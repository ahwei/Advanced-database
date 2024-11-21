export default function Page() {
  return (
    <div className="relative bg-gray-900 h-[100vh] scroll-my-1 text-gray-200 overflow-hidden">
      {/* 動態背景 */}
      <div className="absolute inset-0 z-0">
        <div className="w-[200px] h-[200px] bg-blue-500 opacity-30 rounded-full absolute top-10 left-10 animate-pulse"></div>
        <div className="w-[150px] h-[150px] bg-purple-500 opacity-30 rounded-full absolute bottom-20 right-20 animate-pulse"></div>
      </div>

      <div className="container mx-auto py-8 relative z-10">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-gray-800 shadow rounded-lg p-6 hover:scale-105 transition-transform duration-300">
              <div className="flex flex-col items-center">
                <img
                  src="https://photo.s3.com.tw/look/Upload/BlogArticleImages/7730/20200121085412745_700_0_80.jpg"
                  className="w-32 h-32 bg-gray-700 rounded-full mb-4 shrink-0 object-contain"
                />
                <h1 className="text-xl font-bold text-gray-100">Gino</h1>
                <p className="text-gray-400">資訊管理系學生</p>
              </div>
              <hr className="my-6 border-t border-gray-700" />
              <div className="flex flex-col">
                <span className="text-gray-400 uppercase font-bold tracking-wider mb-2">
                  Skills
                </span>
                <ul>
                  <li className="mb-2 flex justify-between items-center">
                    JavaScript
                    <div className="w-2/3 bg-gray-600 h-2 rounded-full overflow-hidden ml-2">
                      <div className="bg-blue-500 h-full w-4/5"></div>
                    </div>
                  </li>
                  <li className="mb-2 flex justify-between items-center">
                    React
                    <div className="w-2/3 bg-gray-600 h-2 rounded-full overflow-hidden ml-2">
                      <div className="bg-green-500 h-full w-3/4"></div>
                    </div>
                  </li>
                  <li className="mb-2 flex justify-between items-center">
                    Node.js
                    <div className="w-2/3 bg-gray-600 h-2 rounded-full overflow-hidden ml-2">
                      <div className="bg-yellow-500 h-full w-2/3"></div>
                    </div>
                  </li>
                  <li className="mb-2 flex justify-between items-center">
                    HTML/CSS
                    <div className="w-2/3 bg-gray-600 h-2 rounded-full overflow-hidden ml-2">
                      <div className="bg-red-500 h-full w-5/6"></div>
                    </div>
                  </li>
                  <li className="mb-2 flex justify-between items-center">
                    Tailwind CSS
                    <div className="w-2/3 bg-gray-600 h-2 rounded-full overflow-hidden ml-2">
                      <div className="bg-purple-500 h-full w-4/5"></div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-4 sm:col-span-9">
            <div className="bg-gray-800 shadow rounded-lg p-6 hover:scale-105 transition-transform duration-300">
              <h2 className="text-xl font-bold mb-4 text-gray-100">About Me</h2>
              <p className="text-gray-400">
                嗨！我是 Gino，目前是資訊管理系的學生，專注於前端開發，
                熱愛學習新技術，並持續提升自己在網頁開發方面的能力。
              </p>

              <h2 className="text-xl font-bold mt-6 mb-4 text-gray-100">經驗</h2>
              <div className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                  <span className="text-gray-400 font-bold">
                    前端開發專案經驗
                  </span>
                  <p>
                    <span className="text-gray-400">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2 text-gray-400">
                  參與多個前端開發專案，應用技術如 JavaScript、React 等，
                  對 UI/UX 設計和網頁效能優化有深入了解。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
