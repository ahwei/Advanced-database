export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
          {/* 左側欄位 - 個人資訊 */}
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex flex-col items-center">
                <img
                  src="/images.jpg" // 引用 public 資料夾中的圖片
                  className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0 object-contain"
                  alt="野原新之助"
                />
                <h1 className="text-xl font-bold">野原新之助</h1>
                <p className="text-gray-700">幼稚園小朋友</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">
                  特點
                </span>
                <ul>
                  <li className="mb-2">搞笑天才</li>
                  <li className="mb-2">熱愛吃巧克力餅乾</li>
                  <li className="mb-2">經典屁股舞表演</li>
                  <li className="mb-2">愛看動感超人</li>
                  <li className="mb-2">鬼點子高手</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 右側欄位 - 主要內容 */}
          <div className="col-span-4 sm:col-span-9">
            <div className="bg-white shadow rounded-lg p-6">
              {/* 關於我 */}
              <h2 className="text-xl font-bold mb-4">關於我</h2>
              <p className="text-gray-700">
                我是野原新之助，5 歲，是雙葉幼稚園向日葵班的一員。我以搞笑、鬼靈精怪的行為和
                "屁股舞" 聞名。我的日常生活充滿冒險和歡樂，我的家人和朋友總是被我天馬行空的點子逗樂。我最喜歡看動感超人，還夢想成為一名超級英雄。
              </p>

              {/* 經驗 */}
              <h2 className="text-xl font-bold mt-6 mb-4">生活經歷</h2>
              <div className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                  <span className="text-gray-700 font-bold">向日葵班學生</span>
                  <p>
                    <span className="text-gray-700 mr-2">於 雙葉幼稚園</span>
                    <span className="text-gray-700">2019 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在幼稚園裡，我是大家的開心果。我熱愛帶領同學玩遊戲，特別是那些不太符合規矩的「特別玩法」。老師們對我又愛又恨，但都認為我是班上不可或缺的成員。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                  <span className="text-gray-700 font-bold">家庭生活小專家</span>
                  <p>
                    <span className="text-gray-700 mr-2">於 野原家</span>
                    <span className="text-gray-700">全職</span>
                  </p>
                </div>
                <p className="mt-2">
                  作為野原家的大哥，我總是帶著妹妹小葵探索世界。雖然偶爾惹爸媽生氣，但我的幽默和機智總能讓家人捧腹大笑。我還會幫爸爸廣志面對生活中的種種「挑戰」。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                  <span className="text-gray-700 font-bold">動感超人粉絲</span>
                  <p>
                    <span className="text-gray-700 mr-2">忠實追隨者</span>
                    <span className="text-gray-700">無期限</span>
                  </p>
                </div>
                <p className="mt-2">
                  我從小就熱愛動感超人，他是我的英雄和偶像。我每天都會準時收看他的動畫，並學習他的「動感光波」動作。我的朋友們都知道，沒有什麼可以阻止我追動感超人的步伐！
                </p>
              </div>

              {/* 興趣 */}
              <h2 className="text-xl font-bold mt-6 mb-4">興趣愛好</h2>
              <ul className="list-disc list-inside text-gray-700">
                <li className="mb-2">觀看動感超人並模仿他的招式</li>
                <li className="mb-2">表演經典屁股舞</li>
                <li className="mb-2">和朋友一起製作「秘密計劃」</li>
                <li className="mb-2">挑戰媽媽美冴的極限</li>
                <li className="mb-2">吃巧克力餅乾和喝草莓牛奶</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
