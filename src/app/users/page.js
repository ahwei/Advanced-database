'use client';

import { useEffect, useState } from 'react';

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchName, setSearchName] = useState('');

  const fetchUsers = async (name = '') => {
    try {
      setLoading(true);
      const response = await fetch(
        `/api/get-user?name=${encodeURIComponent(name)}`,
      );
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchUsers(searchName);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">使用者列表</h1>

      <form onSubmit={handleSearch} className="mb-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
            placeholder="搜尋名字..."
            className="border p-2 rounded"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            搜尋
          </button>
        </div>
      </form>
      {loading ? (
        <div>載入中...</div>
      ) : (
        <div className="grid gap-4">
          {users.map((user) => (
            <div key={user.id} className="border p-4 rounded shadow">
              <p>姓名：{user.name}</p>
              <p>信箱：{user.email}</p>
              <p>建立時間：{new Date(user.createdAt).toLocaleString()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
