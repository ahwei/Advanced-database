export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
          {/* 左側：個人資料 */}
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex flex-col items-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Leonardo_DiCaprio_cropped_and_rotated_%28cropped%29.jpg/330px-Leonardo_DiCaprio_cropped_and_rotated_%28cropped%29.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0 object-contain"
                />
                <h1 className="text-xl font-bold">里安納度·狄卡比奧</h1>
                <p className="text-gray-700">演員與環保人士</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">
                  傑出成就
                </span>
                <ul>
                  <li className="mb-2">奧斯卡最佳男主角得主</li>
                  <li className="mb-2">6 次金球獎得主</li>
                  <li className="mb-2">聯合國和平使者</li>
                  <li className="mb-2">環保行動家</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 右側：關於與經驗 */}
          <div className="col-span-4 sm:col-span-9">
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">關於我</h2>
              <p className="text-gray-700">
                大家好！我是里安納度·狄卡比奧，一名擁有超過 30 年演藝經歷的演員。
                我以在《鐵達尼號》、《全面啟動》和《神鬼獵人》等經典電影中的角色聞名，
                同時也是一名熱衷於環境保護的倡導者。
                作為聯合國和平使者，我致力於推動氣候行動，並創立了
                里安納度基金會，以支持全球可持續發展。
              </p>

              <h2 className="text-xl font-bold mt-6 mb-4">職業亮點</h2>
              <div className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                  <span className="text-gray-700 font-bold">奧斯卡最佳男主角</span>
                  <p>
                    <span className="text-gray-700">2016</span>
                  </p>
                </div>
                <p className="mt-2">
                  憑藉電影《神鬼獵人》中精彩的演出，榮獲奧斯卡最佳男主角，
                  展現了對挑戰性角色的極致追求。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                  <span className="text-gray-700 font-bold">環保行動</span>
                  <p>
                    <span className="text-gray-700">2010 - 至今</span>
                  </p>
                </div>
                <p className="mt-2">
                  創立里安納度基金會，致力於應對氣候變化、保護生物多樣性，
                  並支持全球可再生能源解決方案。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                  <span className="text-gray-700 font-bold">代表作</span>
                  <p>
                    <span className="text-gray-700">1997 - 至今</span>
                  </p>
                </div>
                <p className="mt-2">
                  參演了多部備受好評的電影，包括《鐵達尼號》、《全面啟動》、《華爾街之狼》、
                  《從前，有個好萊塢》等，穩固了他作為好萊塢頂級演員的地位。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
