export default function Page() {
  return (
    <div
      className="h-[100vh] bg-cover bg-center scroll-my-1"
      style={{ backgroundImage: "url('https://example.com/your-image.jpg')" }}
    >
      <div className="bg-black bg-opacity-50 h-full">
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
                  <img
                    src="data:image/jpeg;base64,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"
                    className="w-25 h-32 bg-gray-700 square-full mb-4 shrink-0 object-contain"
                  />
                  <img
                    src="data:image/jpeg;base64,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"
                    className="w-25 h-32 bg-gray-700 square-full mb-4 shrink-0 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
