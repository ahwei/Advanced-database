export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex flex-col items-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8frWxeGEdC80YPavKhNvD9ScAPEa6nFwD9Q&s"
                  className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0 object-contain"
                />
                <h1 className="text-xl font-bold">王希銘</h1>
                <p className="text-gray-700">散戶中的霸主</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">
                  基本資料
                </span>
                <ul>
                  <li className="mb-2">姓名：王希銘</li>
                  <li className="mb-2">出生日期：01/08, 1986</li>
                  <li className="mb-2">電話：0980 497 079</li>
                  <li className="mb-2">地址：320 桃園市中壢區龍川二街134號</li>
                  <li className="mb-2">血型：B 型</li>
                  <li className="mb-2">車牌號碼：MKP - 0988</li>
                  <li className="mb-2">身分證號：H123345500</li>
                  <li className="mb-2">銀行帳號：808 1333979126112</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-4 sm:col-span-9">
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">關於我</h2>
              <p className="text-gray-700">
                王希銘，台灣桃園中壢人，自稱為唐唐症症的中囯人，是台灣網路知名人物，發跡於哈哈母特。祖父王漢樁國軍上校退役，其父王建勛即 Kevin。
                曾養一隻狗，名為小翠兒，待遇非常惡劣，走得十分痛苦。經常在網路上消費前女友 Nana，隨機騷擾陌生女網友的紀錄罄竹難書。
                為了滿足他暴食的慾望，屢次以各種理由借錢、騙錢。曾經在家樂福蔬果課、威尼斯影城及若干證券行服務，但都因故被解雇。
                住所因大門口長著一棵大樹而被戲稱為樹屋，原本是奶奶的，後來被叔叔買下但霸主仍然繼續住，還騙叔叔說剛結束三年感情會努力工作買回來。
                因為沒繳水費所以被停水，要洗澡就去健身房，廁所只能去外面，如果不想出門時大便就會拉在塑膠袋等垃圾車來丟，小便則直接灌溉樹叢。
              </p>

              <h2 className="text-xl font-bold mt-6 mb-4">經驗</h2>
              <div className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                  <span className="text-gray-700 font-bold">家樂福蔬果課職員</span>
                  <p>
                    <span className="text-gray-700">曾任職</span>
                  </p>
                </div>
                <p className="mt-2">
                  曾在家樂福擔任蔬果課職員，負責蔬果的整理和銷售，但因故被解雇。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                  <span className="text-gray-700 font-bold">威尼斯影城員工</span>
                  <p>
                    <span className="text-gray-700">曾任職</span>
                  </p>
                </div>
                <p className="mt-2">
                  曾在威尼斯影城工作，但因故被解雇。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                  <span className="text-gray-700 font-bold">證券行職員</span>
                  <p>
                    <span className="text-gray-700">曾任職</span>
                  </p>
                </div>
                <p className="mt-2">
                  曾在多家證券行服務，但因故被解雇。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                  <span className="text-gray-700 font-bold">網路社團創立者</span>
                  <p>
                    <span className="text-gray-700 mr-2">於 霸社</span>
                    <span className="text-gray-700">2018 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  創立並管理網路社團「霸社」，致力於提供一個開放的平台讓成員自由討論生活大小事，並透過社群活動提高成員的參與度。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                  <span className="text-gray-700 font-bold">社群影響者</span>
                  <p>
                    <span className="text-gray-700 mr-2">於 Facebook</span>
                    <span className="text-gray-700">2015 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  在 Facebook 上分享生活經驗和個人觀點，累積了大量的追隨者，並透過幽默和獨特的內容與粉絲建立緊密的聯繫。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                  <span className="text-gray-700 font-bold">金融分析</span>
                  <p>
                    <span className="text-gray-700 mr-2">自學及分享</span>
                    <span className="text-gray-700">2017 - 現在</span>
                  </p>
                </div>
                <p className="mt-2">
                  自學多張金融證照，並在網路上分享個人對股市的分析和預測，儘管常被視為反指標，但仍獲得不少關注和討論。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
