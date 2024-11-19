'use client';

export default function SearchForm({ defaultValue = '' }) {
  return (
    <form className="mb-4">
      <div className="flex gap-2">
        <input
          type="text"
          name="name"
          defaultValue={defaultValue}
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
  );
}
