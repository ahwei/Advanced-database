export default function Page() {
  return (
    <div className="bg-gray-900 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-gray-800 shadow rounded-lg p-6">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/r5Obphb_d.jpeg?maxwidth=520&shape=thumb&fidelity=high"
                  className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0 object-contain"
                />
                <h1 className="text-xl font-bold text-white">Elena</h1>
                <p className="text-gray-400">軟體開發工程師</p>
              </div>
              <hr className="my-6 border-t border-gray-600" />
              <div className="flex flex-col">
                <span className="text-gray-400 uppercase font-bold tracking-wider mb-2">
                  專業技能
                </span>
                <ul>
                  <li className="mb-2 text-gray-300">JavaScript</li>
                  <li className="mb-2 text-gray-300">React</li>
                  <li className="mb-2 text-gray-300">Node.js</li>
                  <li className="mb-2 text-gray-300">HTML/CSS</li>
                  <li className="mb-2 text-gray-300">Tailwind CSS</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-4 sm:col-span-9">
            <div className="bg-gray-800 shadow rounded-lg p-6">
              <h2 className="text-xl font-bold text-white mb-4">關於我</h2>
              <p className="text-gray-400">
                嗨！我是 Elena，來自美麗的澎湖小島。目前熱衷於軟體開發，樂於接受新挑戰。
              </p>

              <h2 className="text-xl font-bold text-white mt-6 mb-4">工作經驗</h2>
              <div className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                  <span className="text-gray-400 font-bold">CodeGreen</span>
                  <p>
                    <span className="text-gray-400">2020 - 2022</span>
                  </p>
                </div>
                <p className="mt-2 text-gray-300">
                  曾參與多個前端與全端專案的開發，專注於提升用戶體驗與系統效能。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                  <span className="text-gray-400 font-bold">Hashgreen Labs</span>
                  <p>
                    <span className="text-gray-400">2018 - 2020</span>
                  </p>
                </div>
                <p className="mt-2 text-gray-300">
                  主要負責後端系統設計與資料庫優化，並與團隊合作完成多項企業級專案。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                  <span className="text-gray-400 font-bold">XYZ Tech</span>
                  <p>
                    <span className="text-gray-400">2015 - 2018</span>
                  </p>
                </div>
                <p className="mt-2 text-gray-300">
                  初期作為前端工程師，累積了豐富的專案開發經驗，逐漸涉足全端技術。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
