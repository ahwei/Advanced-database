export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex flex-col items-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Mizuki_Lin_standing_on_the_stage_20220820b_%28cropped%29.jpg/220px-Mizuki_Lin_standing_on_the_stage_20220820b_%28cropped%29.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0 object-contain"
                />
                <h1 className="text-xl font-bold">林襄</h1>
                <p className="text-gray-700">專業啦啦隊員</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">
                  技能
                </span>
                <ul>
                  <li className="mb-2">舞蹈技巧</li>
                  <li className="mb-2">體能訓練</li>
                  <li className="mb-2">團隊合作</li>
                  <li className="mb-2">舞台表演</li>
                  <li className="mb-2">啦啦隊領導力</li>
                  <li className="mb-2">創意編排</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-4 sm:col-span-9">
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>
              <p className="text-gray-700">
                嗨！我是林襄，一位充滿活力和激情的專業啦啦隊員，擁有超過 5 年的表演經驗。我的舞蹈技巧結合創意編排，能夠在舞台上充分展示團隊合作的精神並感染觀眾。我曾參與多場大型體育賽事及演出，並且擅長與隊友協作，提升整體表演的表現力和魅力。除了專業表演外，我也負責指導新人訓練和表演節目的編排。
              </p>

              <h2 className="text-xl font-bold mt-6 mb-4">經歷</h2>
              <div className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                  <span className="text-gray-700 font-bold">
                    專業啦啦隊員
                  </span>
                  <p>
                    <span className="text-gray-700 mr-2">於 XYZ 體育團隊</span>
                    <span className="text-gray-700">2020 - 2024</span>
                  </p>
                </div>
                <p className="mt-2">
                  作為 XYZ 體育團隊的啦啦隊員，我參與了多場國際性比賽和現場表演，負責舞蹈編排、團隊協作及活動策劃。我的表演不僅激勵了現場觀眾，還增強了球迷對隊伍的支持。透過不斷的訓練和磨合，我與隊友一起展現了高水準的團隊默契和舞蹈技術。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                  <span className="text-gray-700 font-bold">啦啦隊隊長</span>
                  <p>
                    <span className="text-gray-700 mr-2">於 ABC 體育俱樂部</span>
                    <span className="text-gray-700">2018 - 2020</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 ABC 體育俱樂部擔任啦啦隊隊長，負責指導新隊員，安排日常訓練並協助編排表演節目。我帶領隊伍參加了數場全國性的比賽，並且在每場比賽中都取得了優異的表現。我學會了如何在壓力下保持冷靜，並帶領隊伍達到最佳狀態。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                  <span className="text-gray-700 font-bold">啦啦隊成員</span>
                  <p>
                    <span className="text-gray-700 mr-2">於 DEF 高中</span>
                    <span className="text-gray-700">2014 - 2017</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 DEF 高中時期，我加入了學校的啦啦隊，並成為其中一名活躍的成員。這段時間，我提升了自己的舞蹈技術、體能和舞台表現，並參與了校內外的各類體育比賽和校慶活動。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
