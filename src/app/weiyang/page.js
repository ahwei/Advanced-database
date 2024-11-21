export default function Page() {
  return (
    <div className="bg-gray-50 text-gray-800 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
          {/* Profile Card */}
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col items-center">
                <img
                  src="https://lh3.googleusercontent.com/a/ACg8ocKWaIlvuZSLN8QNkX1KMGHLm0tMVxfGxNrk2KyqE9AM_c8Fx9Y=s288-c-no"
                  className="w-32 h-32 rounded-full mb-4 object-cover border-4 border-blue-100 shadow-md transition-transform duration-500 hover:scale-105"
                  alt="AhWei's Profile Picture"
                />
                <h1 className="text-2xl font-bold text-blue-600">weiyang</h1>
                <p className="text-gray-500">斜槓大學生</p>
              </div>
              <hr className="my-6 border-t border-gray-200" />
              <div className="flex flex-col">
                <span className="text-blue-400 uppercase font-bold tracking-wider mb-2">
                  Skills
                </span>
                <ul className="space-y-2">
                  <li className="text-gray-700 hover:text-blue-500 transition-colors">
                    Arduino
                  </li>
                  <li className="text-gray-700 hover:text-blue-500 transition-colors">
                    Briefing design
                  </li>
                  <li className="text-gray-700 hover:text-blue-500 transition-colors">
                    Business plan writing
                  </li>
                  <li className="text-gray-700 hover:text-blue-500 transition-colors">
                    Startup Competition
                  </li>
                  <li className="text-gray-700 hover:text-blue-500 transition-colors">
                    3D print & Laser cat
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* About Me & Experience */}
          <div className="col-span-4 sm:col-span-9">
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">
                About Me
              </h2>
              <p className="text-gray-700 leading-relaxed">
                嗨！我是 weiyang，擁有 4
                年的產品開發和新創經驗，最近的工作經驗包括在高科大擔任maker設備講師、在新創公司擔任重要職位
                領導開發多項關於國軍設備的prototype與舉辦多場學校教育訓練。
              </p>

              <h2 className="text-2xl font-bold text-blue-600 mt-6 mb-4">
                Experience
              </h2>

              <div className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                  <span className="text-blue-400 font-bold">
                    新創公司CEO
                  </span>
                  <p className="text-gray-500">
                    <span className="mr-2">於 Makernauts</span>
                    <span>2022 - 2024</span>
                  </p>
                </div>
                <p className="mt-2 text-gray-700">
                  擔任創宇文教有限公司執行長，帶團隊獲得許多補助款與競賽獎勵。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                  <span className="text-blue-400 font-bold">maker設備講師</span>
                  <p className="text-gray-500">
                    <span className="mr-2">於 NKUST </span>
                    <span>2021 - 2024</span>
                  </p>
                </div>
                <p className="mt-2 text-gray-700">
                  在NKUST中參與了多場教育訓練活動，開設過3D print、Laser cat等課程。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                  <span className="text-blue-400 font-bold">資管系學生</span>
                  <p className="text-gray-500">
                    <span className="mr-2">於NKUST</span>
                    <span>2021 - 2024</span>
                  </p>
                </div>
                <p className="mt-2 text-gray-700">
                  在大學期間不誤正業都在搞一些跟本業無關的事😂😂
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
