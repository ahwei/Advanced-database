export default function Page() {
  return (
    <div
      className="h-[100vh] scroll-my-1"
      style={{
        backgroundImage: "url(https://i.imgur.com/Qn6jT2i.gif)", // 背景圖片 URL
        backgroundSize: "cover", // 背景覆蓋整個畫面
        backgroundPosition: "center", // 背景居中
        backgroundRepeat: "no-repeat", // 防止背景重複
      }}
    >
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
          {/* 左側欄位 - 個人資訊 */}
          <div className="col-span-4 sm:col-span-3">
            <div className="shadow rounded-lg p-6 bg-transparent backdrop-blur-md">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/bSuTQWm.jpeg" // 替換為 Ninomae Ina‘nis 的圖片
                  className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0 object-contain"
                  alt="Ninomae Ina‘nis"
                />
                <h1 className="text-xl font-bold text-white">Ninomae Ina‘nis</h1>
                <p className="text-gray-200">Hololive EN 成員</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-200 uppercase font-bold tracking-wider mb-2">
                  特點
                </span>
                <ul>
                  <li className="mb-2 text-gray-200">虛擬偶像兼插畫家</li>
                  <li className="mb-2 text-gray-200">「古神使者」設定</li>
                  <li className="mb-2 text-gray-200">愛畫畫與遊戲</li>
                  <li className="mb-2 text-gray-200">粉絲群名稱：Takodachi</li>
                  <li className="mb-2 text-gray-200">溫柔又幽默的性格</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 右側欄位 - 主要內容 */}
          <div className="col-span-4 sm:col-span-9">
            <div className="shadow rounded-lg p-6 bg-transparent backdrop-blur-md">
              {/* 關於我 */}
              <h2 className="text-xl font-bold mb-4 text-white">關於我</h2>
              <p className="text-gray-200">
                大家好！我是 Ninomae Ina‘nis，來自 hololive English 的
                VTuber。我是「古神的使者」，擁有神秘的觸手之力，也是一名插畫家與遊戲愛好者。
                我的直播充滿藝術創作、休閒遊戲以及與粉絲 Takodachi 的歡樂互動！
              </p>

              {/* 經驗 */}
              <h2 className="text-xl font-bold mt-6 mb-4 text-white">活動歷程</h2>
              <div className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                  <span className="text-gray-200 font-bold">Hololive 出道</span>
                  <p>
                    <span className="text-gray-200 mr-2">於 Hololive EN</span>
                    <span className="text-gray-200">2020 年 9 月</span>
                  </p>
                </div>
                <p className="mt-2 text-gray-200">
                  於 2020 年 9 月正式出道，作為 Hololive EN
                  的首批成員之一。以溫柔的嗓音和藝術才能迅速吸引大量粉絲。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                  <span className="text-gray-200 font-bold">藝術創作</span>
                  <p>
                    <span className="text-gray-200 mr-2">自由插畫家</span>
                    <span className="text-gray-200">長期</span>
                  </p>
                </div>
                <p className="mt-2 text-gray-200">
                  作為一名才華洋溢的插畫家，經常在直播中分享自己的繪畫過程，並激勵粉絲發展藝術興趣。她的繪畫作品充滿細膩與創意。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                  <span className="text-gray-200 font-bold">遊戲直播</span>
                  <p>
                    <span className="text-gray-200 mr-2">多平台直播</span>
                    <span className="text-gray-200">持續中</span>
                  </p>
                </div>
                <p className="mt-2 text-gray-200">
                  主播內容涵蓋各類型的遊戲，包括 RPG、解謎遊戲、合作遊戲，甚至是輕鬆的模擬遊戲。她的直播風格幽默、輕鬆且充滿魅力。
                </p>
              </div>

              {/* 興趣 */}
              <h2 className="text-xl font-bold mt-6 mb-4 text-white">興趣愛好</h2>
              <ul className="list-disc list-inside text-gray-200">
                <li className="mb-2">數位插畫創作</li>
                <li className="mb-2">與粉絲互動聊天</li>
                <li className="mb-2">探索奇幻與神秘題材</li>
                <li className="mb-2">嘗試新遊戲與挑戰</li>
                <li className="mb-2">與其他 Hololive 成員合作</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
