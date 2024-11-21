export default function Page() {
    return (
      <div className="bg-gray-100 h-[100vh] scroll-my-1">
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
            <div className="col-span-4 sm:col-span-3">
              <div className="bg-white shadow rounded-lg p-6">
                <div className="flex flex-col items-center">
                  <img
                    src="https://i.imgur.com/fmQEGZI.jpeg"
                    className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0 object-contain"
                  />
                  <h1 className="text-xl font-bold">沈少榮</h1>
                  <p className="text-gray-700">學生</p>
                </div>
                <hr className="my-6 border-t border-gray-300" />
                <div className="flex flex-col">
                  <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">
                    興趣興趣
                  </span>
                  <ul>
                    <li className="mb-2">健身</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-span-4 sm:col-span-9">
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4">關於我</h2>
                <p className="text-gray-700">
                  大家好！我是沈少榮，目前是一名學生，學號是 C111118250。我對健身充滿熱情，
                  喜歡挑戰自己的極限並提升體能。健身不僅讓我變得更健康，也讓我學會了自律和堅持。
                </p>
  
                <h2 className="text-xl font-bold mt-6 mb-4">學習與目標</h2>
                <p className="text-gray-700">
                  我希望在未來不僅能在健身上持續進步，也能在學業和技能上有所突破。
                  期待與大家交流學習，一起成長！
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
