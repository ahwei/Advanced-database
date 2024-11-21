export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/lBebnlB_d.png?maxwidth=520&shape=thumb&fidelity=high"
                  className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0 object-contain"
                />
                <h1 className="text-xl font-bold">康家瑀 (Nina)</h1>
                <p className="text-gray-700">高雄科技大學 大三學生</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">
                  Skills
                </span>
                <ul>
                  <li className="mb-2">NO</li>
                  <li className="mb-2">NO</li>
                  <li className="mb-2">NO</li>
                  <li className="mb-2">NO</li>
                  <li className="mb-2">NO</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-4 sm:col-span-9">
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">About Me</h2>
              <p className="text-gray-700">
                嗨！我是康家瑀 (Nina)，現在是高雄科技大學的學生，今年大三，目前也在補習班擔任數學老師。
              </p>

              <h2 className="text-xl font-bold mt-6 mb-4">經驗</h2>
              <div className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                  <span className="text-gray-700 font-bold">
                    大學生
                  </span>
                  <p>
                    <span className="text-gray-700 mr-2">無</span>
                    <span className="text-gray-700">無</span>
                  </p>
                </div>
                <p className="mt-2">
                  擔任補習班的數學老師。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                  <span className="text-gray-700 font-bold">無</span>
                  <p>
                    <span className="text-gray-700 mr-2">
                      無
                    </span>
                    <span className="text-gray-700">無</span>
                  </p>
                </div>
                <p className="mt-2">
                  無
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                  <span className="text-gray-700 font-bold">無</span>
                  <p>
                    <span className="text-gray-700 mr-2">無</span>
                    <span className="text-gray-700">無</span>
                  </p>
                </div>
                <p className="mt-2">
                  nononononononono
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
