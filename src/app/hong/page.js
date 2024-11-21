export default function Page() {
  return (
    <div className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
          {/* Profile Section */}
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/sJQHeZT_d.webp?maxwidth=520&shape=thumb&fidelity=high"
                  className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0 object-cover"
                  alt="Profile Picture"
                />
                <h1 className="text-xl font-bold">Bai-Chen-Hong</h1>
                <p className="text-gray-700">Computer Science Student</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">
                  Skills
                </span>
                <ul>
                  <li className="mb-2">JavaScript</li>
                  <li className="mb-2">Python</li>
                  <li className="mb-2">HTML/CSS</li>
                  <li className="mb-2">React</li>
                  <li className="mb-2">Git & GitHub</li>
                </ul>
              </div>
            </div>
          </div>

          {/* About Me Section */}
          <div className="col-span-4 sm:col-span-9">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">About Me</h2>
              <p className="text-gray-700">
                嗨！我是 Bai-Chen-Hong，目前是資訊管理系的學生，對編程和軟體開發充滿熱情。
                我目前正在學習 JavaScript、Python 等技術，並積極參與校園內的項目。我的目標是利用我在學校所學的知識，開發出有用的軟體，並將這些技能應用於未來的實習和工作機會。
              </p>

              <h2 className="text-xl font-bold mt-6 mb-4">經歷</h2>

              {/* Experience Section */}
              <div className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                  <span className="text-gray-700 font-bold">學生專案開發者</span>
                  <p>
                    <span className="text-gray-700 mr-2">於 資訊管理系</span>
                    <span className="text-gray-700">2023 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  參與大學資訊管理課程中的多個專案，負責使用 Python 和 JavaScript 開發簡單的應用程式。最近的專案是開發一個基於網頁的 To-Do List 應用，使用 React 和 Node.js 完成。
                </p>
              </div>

              {/* Another Experience Section */}
              <div className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                  <span className="text-gray-700 font-bold">參與者</span>
                  <p>
                    <span className="text-gray-700 mr-2">於 校園 </span>
                    <span className="text-gray-700">2024</span>
                  </p>
                </div>
                <p className="mt-2">
                  在校園中參與多個團隊開發，協作開發應用程式並使用 Git 進行版本控制。在其中一個項目中，我負責設計用戶界面並確保應用的交互式體驗流暢。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
