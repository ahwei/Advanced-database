export default function Page() {
  return (
 <div className="bg-gray-100 h-[100vh] scroll-my-1">
 <div className="container mx-auto py-8">
 <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
 <div className="col-span-4 sm:col-span-3">
 <div className="bg-white shadow rounded-lg p-6">
 <div className="flex flex-col items-center">
 <img
 src="https://megapx-assets.dcard.tw/images/33a546bb-34f4-406b-bd87-36fe63e99e5b/1280.webp"
 className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0 object-contain"
 />
 <h1 className="text-xl font-bold">蔡侑辰</h1>
 <p className="text-gray-700">高科大資管系</p>
 </div>
 <hr className="my-6 border-t border-gray-300" />
 <div className="flex flex-col">
 <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">
  技能
 </span>
 <ul>
 <li className="mb-2">基礎程式設計</li>
 <li className="mb-2">資料庫管理</li>
 <li className="mb-2">系統分析</li>
 <li className="mb-2">專案管理</li>
 <li className="mb-2">問題解決</li>
 </ul>
 </div>
 </div>
 </div>
 <div className="col-span-4 sm:col-span-9">
 <div className="bg-white shadow rounded-lg p-6">
 <h2 className="text-xl font-bold mb-4">關於我</h2>
 <p className="text-gray-700">
  目前就讀於國立高雄科技大學資訊管理系，致力於學習最新的資訊技術和管理知識。
  對於程式開發、系統分析及數位轉型充滿熱情，積極參與各類技術學習和專業成長的機會。
 </p>
 <h2 className="text-xl font-bold mt-6 mb-4">學習經歷</h2>
 <div className="mb-6">
 <div className="flex justify-between flex-wrap gap-2 w-full">
 <span className="text-gray-700 font-bold">
  資訊管理系
 </span>
 <p>
 <span className="text-gray-700 mr-2">國立高雄科技大學</span>
 <span className="text-gray-700">2021 - 至今</span>
 </p>
 </div>
 <p className="mt-2">
  主修資訊管理，修習課程包括程式設計、資料庫系統、作業系統、系統分析與設計等專業課程。
  積極參與系上學術活動和技術研討會，不斷提升專業技能。
 </p>
 </div>
 <div className="mb-6">
 <div className="flex justify-between flex-wrap gap-2 w-full">
 <span className="text-gray-700 font-bold">課外活動</span>
 <p>
 <span className="text-gray-700">校內外專業社團</span>
 </p>
 </div>
 <p className="mt-2">
  熱衷於參與資訊技術相關社團，如程式設計社、創新創業社等，透過實作和交流不斷學習成長。
 </p>
 </div>
 <div className="mb-6">
 <div className="flex justify-between flex-wrap gap-2 w-full">
 <span className="text-gray-700 font-bold">未來目標</span>
 <p>
 <span className="text-gray-700">持續精進</span>
 </p>
 </div>
 <p className="mt-2">
  目標成為一名優秀的資訊管理專業人才，不斷學習新技術，為企業數位轉型貢獻力量。
  計劃在畢業前取得相關專業證照，並累積實務經驗。
 </p>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
  );
 }