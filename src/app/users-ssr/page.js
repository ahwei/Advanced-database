import SearchForm from './SearchForm';

export default async function UserSSRPage({ searchParams }) {
  const name = searchParams?.name?.trim() || '';

  try {
    const response = await fetch(
      `${
        process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'
      }/api/get-user?name=${encodeURIComponent(name)}`,
      {
        cache: 'no-store',
        headers: {
          Accept: 'application/json',
        },
      },
    );

    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }

    const users = await response.json();

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
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">使用者列表 (SSR API版本)</h1>
        <SearchForm defaultValue={name} />
        <p className="text-red-500 mt-4">發生錯誤：{error.message}</p>
      </div>
    );
  }
}
