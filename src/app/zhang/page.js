"use client";

import { useState } from "react";

export default function Page() {
  const [showDetails, setShowDetails] = useState(false);

  if (!showDetails) {
    return (
      <div className="bg-gray-900 h-[100vh] flex flex-col items-center justify-center text-center text-gray-200">
        <div
          className="cursor-pointer"
          onClick={() => setShowDetails(true)}
          title="點擊圖片以查看更多資訊"
        >
          <div className="w-80 h-80 rounded-full overflow-hidden bg-gray-600 mb-4">
            <img
              src="https://i.imgur.com/jJKwR1h.jpg"
              className="w-full h-full object-cover"
              alt="Profile"
            />
          </div>
          <h1 className="text-3xl font-bold mt-4">張峻豪</h1>
          <p className="text-gray-400 mt-2">點擊圖片以查看更多資訊</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 h-[100vh] text-gray-200 scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-gray-800 shadow rounded-lg p-6">
              <div className="flex flex-col items-center">
                <div className="w-64 h-64 rounded-full overflow-hidden bg-gray-600 mb-4">
                  <img
                    src="https://i.imgur.com/jJKwR1h.jpg"
                    className="w-full h-full object-cover"
                    alt="Profile"
                  />
                </div>
                <h1 className="text-xl font-bold">張峻豪</h1>
                <p className="text-gray-400">高雄科技大學資管系學生</p>
              </div>
              <hr className="my-6 border-t border-gray-600" />
              <div className="flex flex-col">
                <span className="text-gray-400 uppercase font-bold tracking-wider mb-2">
                  Skills
                </span>
                <ul>
                  <li className="mb-2">Java</li>
                  <li className="mb-2">Python</li>
                  <li className="mb-2">資料庫管理</li>
                  <li className="mb-2">系統開發</li>
                  <li className="mb-2">資料分析</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-4 sm:col-span-9">
            <div className="bg-gray-800 shadow rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">About Me</h2>
              <table className="table-auto w-full text-left text-gray-300">
                <tbody>
                  <tr>
                    <td className="py-2 px-4 font-bold text-gray-400">姓名</td>
                    <td className="py-2 px-4">張峻豪</td>
                  </tr>
                  <tr className="bg-gray-700">
                    <td className="py-2 px-4 font-bold text-gray-400">學校</td>
                    <td className="py-2 px-4">高雄科技大學</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 font-bold text-gray-400">科系</td>
                    <td className="py-2 px-4">資訊管理系</td>
                  </tr>
                  <tr className="bg-gray-700">
                    <td className="py-2 px-4 font-bold text-gray-400">專長</td>
                    <td className="py-2 px-4">資訊系統與資料分析</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 font-bold text-gray-400">自我期許</td>
                    <td className="py-2 px-4">
                      結合技術與創意，為業界帶來創新解決方案。
                    </td>
                  </tr>
                </tbody>
              </table>

              <h2 className="text-xl font-bold mt-6 mb-4">經驗</h2>
              <div className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                  <span className="text-gray-300 font-bold">系統開發經驗</span>
                  <p>
                    <span className="text-gray-400">學生專案</span>
                  </p>
                </div>
                <p className="mt-2 text-gray-400">
                  在校期間參與多個系統開發專案，包括資料庫設計、後端開發，
                  並與團隊合作完成專案文件與展示。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                  <span className="text-gray-300 font-bold">資料分析</span>
                  <p>
                    <span className="text-gray-400">課程專題</span>
                  </p>
                </div>
                <p className="mt-2 text-gray-400">
                  透過課程專題深入研究資料分析技術，使用 Python 進行數據清理、
                  視覺化分析，以及建構預測模型，並在期末專題中取得優異成績。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                  <span className="text-gray-300 font-bold">技術學習</span>
                  <p>
                    <span className="text-gray-400">自主學習</span>
                  </p>
                </div>
                <p className="mt-2 text-gray-400">
                  持續學習最新技術，如前端框架與雲端服務，並利用課外時間進行個人
                  開發專案，提升實作能力。
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <button
            onClick={() => setShowDetails(false)}
            className="px-4 py-2 bg-gray-700 text-gray-300 rounded hover:bg-gray-600 transition"
          >
            返回上一頁
          </button>
        </div>
      </div>
    </div>
  );
}
