import { headers } from 'next/headers';
import SearchForm from './SearchForm';

async function getUsers(name) {
  const headersList = headers();
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
  const host = headersList.get('host');

  const response = await fetch(
    `${protocol}://${host}/api/get-user?name=${encodeURIComponent(name)}`,
    {
      cache: 'no-store',
      headers: {
        Accept: 'application/json',
      },
    },
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}

export default async function UserSSRPage({ searchParams }) {
  const name = searchParams?.name?.trim() || '';

  try {
    const users = await getUsers(name);

    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">使用者列表 (SSR API版本)</h1>
        <SearchForm defaultValue={name} />

        <div className="grid gap-4 mt-4">
          {users.length > 0 ? (
            users.map((user) => (
              <div key={user.id} className="border p-4 rounded shadow">
                <p>姓名：{user.name}</p>
                <p>信箱：{user.email}</p>
                <p>建立時間：{new Date(user.createdAt).toLocaleString()}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">沒有找到符合的使用者</p>
          )}
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error fetching users:', error);
    return (
      <div className="p-4">
        {' '}
        <h1 className="text-2xl font-bold mb-4">
          使用者列表 (SSR API版本)
        </h1>{' '}
        <SearchForm defaultValue={name} />{' '}
        <p className="text-red-500 mt-4">發生錯誤：{error.message}</p>
      </div>
    );
  }
}
