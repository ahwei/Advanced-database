export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/wEieJKG.jpeg"
                  className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0 object-contain"
                />
                <h1 className="text-xl font-bold">LZS</h1>
                <p className="text-gray-700">Software Developer</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">
                  Nothing
                </span>
                <ul>
                  <li className="mb-2">Nothing</li>
                  <li className="mb-2">Nothing</li>
                  <li className="mb-2">Nothing</li>
                  <li className="mb-2">Nothing</li>
                  <li className="mb-2">Nothing</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-4 sm:col-span-9">
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">About Me</h2>
              <p className="text-gray-700"> </p>

              <h2 className="text-xl font-bold mt-6 mb-4">經驗</h2>
              <div className="mb-6">
                <p className="text-gray-700"> </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
