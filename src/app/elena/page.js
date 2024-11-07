export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpeg"
                  className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0 object-contain"
                />
                <h1 className="text-xl font-bold">Elena</h1>
                <p className="text-gray-700">Software Developer</p>
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
                  <li className="mb-2">Tailwind Css</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-4 sm:col-span-9">
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">About Me</h2>
              <p className="text-gray-700">
                嗨！我是 Elena，擁有 7
                年的產品開發和前端經驗，最近的工作經驗包括在 CodeGreen 和
                Hashgreen Labs
                擔任高級前端開發人員，領導開發混合型應用程式及開源項目，並應用技術如
                Electron、Qwik 和
                Playwright，實現跨平台應用的無縫切換和測試自動化。具備領導開源項目的經驗，曾負責多個專案的開發和社群貢獻文件的制定。
              </p>

              <h2 className="text-xl font-bold mt-6 mb-4">經驗</h2>
              <div className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                  <span className="text-gray-700 font-bold">
                    高級前端開發人員
                  </span>
                  <p>
                    <span className="text-gray-700 mr-2">於 CodeGreen</span>
                    <span className="text-gray-700">2020 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  擔任 高雄科技大學 學生
                  的高級前端開發人員，主導混合型應用程式的開發，應用技術如
                  Electron 和 Qwik， 以實現跨平台的無縫切換，並負責自動化測試。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                  <span className="text-gray-700 font-bold">前端開發人員</span>
                  <p>
                    <span className="text-gray-700 mr-2">
                      於 Hashgreen Labs
                    </span>
                    <span className="text-gray-700">2018 - 2020</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 Hashgreen Labs 中參與了多個開源項目的開發，並使用
                  Playwright 進行測試自動化，撰寫社群貢獻文件，
                  提高了項目開發效率。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                  <span className="text-gray-700 font-bold">產品開發人員</span>
                  <p>
                    <span className="text-gray-700 mr-2">於 XYZ Tech</span>
                    <span className="text-gray-700">2015 - 2018</span>
                  </p>
                </div>
                <p className="mt-2">
                  負責 XYZ Tech
                  的產品開發，專注於前端技術，帶領團隊完成多個項目，
                  並協助制定開發文件和技術標準。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
