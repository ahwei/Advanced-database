export default function Page() {
    return (
      <div className="bg-gray-900 h-[100vh] scroll-my-1">
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
            <div className="col-span-4 sm:col-span-3">
              <div className="bg-gray-800 shadow-lg rounded-lg p-6">
                <div className="flex flex-col items-center">
                  <img
                    src="https://i.imgur.com/SdOFdX9_d.jpeg?maxwidth=520&shape=thumb&fidelity=high"
                    className="w-32 h-32 bg-gray-700 rounded-full mb-4 shrink-0 object-contain"
                  />
                  <h1 className="text-xl font-bold text-white">田翔銘</h1>
                  <p className="text-gray-400">NKUST IM</p>
                </div>
                <hr className="my-6 border-t border-gray-600" />
                <div className="flex flex-col">
                  <span className="text-gray-400 uppercase font-bold tracking-wider mb-2">
                    Skills
                  </span>
                  <ul>
                    <li className="mb-2 text-gray-300">呼吸</li>
                    <li className="mb-2 text-gray-300">吃飯</li>
                    <li className="mb-2 text-gray-300">喝水</li>
                    <li className="mb-2 text-gray-300">睡覺</li>
                    <li className="mb-2 text-gray-300">排泄</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-span-4 sm:col-span-9">
              <div className="bg-gray-800 shadow-lg rounded-lg p-6">
                <h2 className="text-xl font-bold text-white mb-4">About Me</h2>
                <p className="text-gray-300">
                  我是 田翔銘，就讀國立高雄科大資訊管理系
                  111年入學，目前是大三學生
                </p>
  
                <h2 className="text-xl font-bold text-white mt-6 mb-4">經驗</h2>
                <div className="mb-6">
                  <div className="flex justify-between flex-wrap gap-2 w-full">
                    <span className="text-gray-400 font-bold">
                      目前無特殊經驗
                    </span>
                    <p>
                      <span className="text-gray-400 mr-2">.</span>
                      <span className="text-gray-400">.</span>
                    </p>
                  </div>
                  <p className="mt-2 text-gray-300">.</p>
                </div>
  
                <div className="mb-6">
                  <div className="flex justify-between flex-wrap gap-2 w-full">
                    <span className="text-gray-400 font-bold">.</span>
                    <p>
                      <span className="text-gray-400 mr-2">.</span>
                      <span className="text-gray-400">.</span>
                    </p>
                  </div>
                  <p className="mt-2 text-gray-300">.</p>
                </div>
  
                <div className="mb-6">
                  <div className="flex justify-between flex-wrap gap-2 w-full">
                    <span className="text-gray-400 font-bold">.</span>
                    <p>
                      <span className="text-gray-400 mr-2">.</span>
                      <span className="text-gray-400">.</span>
                    </p>
                  </div>
                  <p className="mt-2 text-gray-300">.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  