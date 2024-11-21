export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 </p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊管理系。我目前是大學三年級學生，對於學習新技術充滿熱情。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">耍費者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  每天來學校上課都很認真
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  喜歡結交新朋友
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">就是學生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  認真中
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 </p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊管理系。我目前是大學三年級學生，並且對於學習新技術充滿熱情
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
">
export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
-12 gap-6 px-4">
export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
g p-6">
export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
ter">
export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
eg"
export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
unded-full mb-4 shrink-0 object-contain"
export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
ei</h1>
export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 Developer</p>
export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
y-300" />
export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
ase font-bold tracking-wider mb-2">
export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
>
export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
li>
export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
g p-6">
export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
About Me</h2>
export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
驗包括在 CodeGreen 和
export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
應用程式及開源項目，並應用技術如
export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
和測試自動化。具備領導開源項目的經驗，曾負責多個專案的開發和社群貢獻文件的制定。
export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
b-4">經驗</h2>
export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
flex-wrap gap-2 w-full">
export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
-bold">
export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
-2">於 CodeGreen</span>
export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
020 - 2022</span>
export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
程式的開發，應用技術如
export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
縫切換，並負責自動化測試。
export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
flex-wrap gap-2 w-full">
export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
-bold">前端開發人員</span>
export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
-2">
export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
018 - 2020</span>
export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
項目的開發，並使用
export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
貢獻文件，
export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
flex-wrap gap-2 w-full">
export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
-bold">產品開發人員</span>
export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
-2">於 XYZ Tech</span>
export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
015 - 2018</span>
export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
隊完成多個項目，
export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-l">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full"
                />
                <h1 className="text-xl font-bold">劉瓊穗</h1>
                <p className="text-gray-700">學生 & 前端開發者</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-semibold">
                  技能
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
            <div className="bg-white shadow rounded-l p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700 mb-4">
                嗨！我是劉瓊穗，來自高雄科技大學，主修資訊工程。我目前是大學四年級學生，擁有一定的前端開發經驗，並且對於學習新技術充滿熱情。我熟悉多種前端框架與工具，並且積極參與開源項目及技術社群。
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">經歷與專案</h2>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                  <p>
                    <span className="text-gray-700 mr-4">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  
                  在 XYZ 公司進行前端開發實習，負責網站和應用程式的界面設計與開發，使用 React 和 Tailwind CSS 提升網站的用戶體驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                  <p>
                    <span className="text-gray-700 mr-4">2022 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  積極參與開源項目，主要貢獻於前端領域的代碼優化，修復 Bug，並向開源社群分享自己的學習經驗。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                  <p>
                    <span className="text-gray-700 mr-4">2021 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  於 ABC 公司實習期間，負責前端網站的開發與維護，使用 HTML、CSS、JavaScript 開發響應式頁面。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
