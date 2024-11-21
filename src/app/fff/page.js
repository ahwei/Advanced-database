export default function Page() {
  return (
      <div className="bg-gray-50 h-[100vh] overflow-auto">
          <div className="container mx-auto py-10">
              <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
                  <div className="col-span-4 sm:col-span-3">
                      <div className="bg-white shadow-lg rounded-xl p-6">
                          <div className="flex flex-col items-center">
                              <img
                                  src="https://randomuser.me/api/portraits/men/35.jpg"
                                  className="w-32 h-32 bg-gray-300 rounded-full mb-4"
                                  alt="Profile"
                              />
                              <h1 className="text-2xl font-semibold text-gray-800">劉瓊穗</h1>
                              <p className="text-lg text-gray-600">學生 | 網頁開發者</p>
                              <div className="mt-4">
                                  <a
                                      href="mailto:liuqiong@example.com"
                                      className="text-blue-500 hover:text-blue-700"
                                  >
                                      liuqiong@example.com
                                  </a>
                              </div>
                          </div>
                          <hr className="my-6 border-t border-gray-300" />
                          <div className="flex flex-col">
                              <span className="text-gray-700 uppercase font-semibold mb-2">
                                  技能
                              </span>
                              <ul className="space-y-2">
                                  <li className="text-gray-700">JavaScript / ES6</li>
                                  <li className="text-gray-700">React & Next.js</li>
                                  <li className="text-gray-700">Node.js & Express</li>
                                  <li className="text-gray-700">HTML5 / CSS3</li>
                                  <li className="text-gray-700">Tailwind CSS & Bootstrap</li>
                                  <li className="text-gray-700">Git & GitHub</li>
                                  <li className="text-gray-700">MySQL / MongoDB</li>
                              </ul>
                          </div>
                      </div>
                  </div>

                  <div className="col-span-4 sm:col-span-9">
                      <div className="bg-white shadow-lg rounded-xl p-6">
                          <h2 className="text-2xl font-semibold text-gray-800 mb-4">自我介紹</h2>
                          <p className="text-gray-700 mb-4">
                              嗨！我是劉瓊穗，來自高雄科技大學資訊管理系。我目前是大學三年級學生，對於
                              網頁開發和新技術的學習充滿熱情。在學習的過程中，我積極參與開源社群，並實習於
                              前端開發領域，專注於提升技術和實踐能力。
                          </p>

                          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                              經歷與專案
                          </h2>

                          <div className="mb-6">
                              <div className="flex justify-between">
                                  <span className="text-gray-700 font-semibold">前端開發者 (實習)</span>
                                  <p className="text-gray-600">2023 - 現在</p>
                              </div>
                              <p className="mt-2 text-gray-700">
                                  在這段實習中，我負責開發和維護公司內部管理系統的前端，使用React和Tailwind CSS
                                  進行頁面設計與優化，並與後端工程師協作，確保資料流程順暢。
                              </p>
                          </div>

                          <div className="mb-6">
                              <div className="flex justify-between">
                                  <span className="text-gray-700 font-semibold">開源貢獻者</span>
                                  <p className="text-gray-600">2022 - 現在</p>
                              </div>
                              <p className="mt-2 text-gray-700">
                                  我積極參與GitHub上的開源專案，並定期提交Pull Requests。參與的項目包括Web應用程式和
                                  工具，專注於改善用戶體驗和功能。
                              </p>
                          </div>

                          <div className="mb-6">
                              <div className="flex justify-between">
                                  <span className="text-gray-700 font-semibold">Web 開發實習生</span>
                                  <p className="text-gray-600">2021 - 2022</p>
                              </div>
                              <p className="mt-2 text-gray-700">
                                  在這個角色中，我負責設計和開發簡單的網站，並進行基礎的SEO優化及前端效能優化，
                                  獲得了實踐中關於網頁性能和用戶介面的寶貴經驗。
                              </p>
                          </div>

                          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">教育背景</h2>
                          <div className="mb-6">
                              <div className="flex justify-between">
                                  <span className="text-gray-700 font-semibold">高雄科技大學</span>
                                  <p className="text-gray-600">2021 - 目前</p>
                              </div>
                              <p className="mt-2 text-gray-700">資訊管理系 大學三年級</p>
                          </div>

                          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                              語言能力
                          </h2>
                          <div className="mb-6">
                              <div className="flex justify-between">
                                  <span className="text-gray-700 font-semibold">中文</span>
                                  <p className="text-gray-600">母語</p>
                              </div>
                              <div className="flex justify-between">
                                  <span className="text-gray-700 font-semibold">英文</span>
                                  <p className="text-gray-600">中等</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}
