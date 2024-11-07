export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex flex-col items-center">
                <img
                  src="https://photo.s3.com.tw/look/Upload/BlogArticleImages/7730/20200121085412745_700_0_80.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0 object-contain"
                />
                <h1 className="text-xl font-bold">Gino</h1>
                <p className="text-gray-700">資訊管理系學生</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">
                  Skills
                </span>
                <ul>
                  <li className="mb-2">JavaScript</li>
                  <li className="mb-2">React</li>
                  <li className="mb-2">Node.js</li>
                  <li className="mb-2">HTML/CSS</li>
                  <li className="mb-2">Tailwind CSS</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-4 sm:col-span-9">
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">About Me</h2>
              <p className="text-gray-700">
                嗨！我是 Gino，目前是資訊管理系的學生，專注於前端開發，
                熱愛學習新技術，並持續提升自己在網頁開發方面的能力。
              </p>

              <h2 className="text-xl font-bold mt-6 mb-4">經驗</h2>
              <div className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                  <span className="text-gray-700 font-bold">
                    前端開發專案經驗
                  </span>
                  <p>
                    <span className="text-gray-700">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
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
