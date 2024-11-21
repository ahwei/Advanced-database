export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/r5Obphb_d.jpeg?maxwidth=520&shape=thumb&fidelity=high"
                  className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0 object-contain"
                />
                <h1 className="text-xl font-bold">Elena</h1>
                <p className="text-gray-700">Software Developer</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">
                  Skills
                </span>
                <ul>
                  <li className="mb-2">JavaScript</li>
                  <li className="mb-2">React</li>
                  <li className="mb-2">Node.js</li>
                  <li className="mb-2">HTML/CSS</li>
                  <li className="mb-2">Tailwind Css</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-4 sm:col-span-9">
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">About Me</h2>
              <p className="text-gray-700">
                嗨！我是 Elena，來自澎湖的一個小島
                
              </p>

              <h2 className="text-xl font-bold mt-6 mb-4">經驗</h2>
              <div className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                  <span className="text-gray-700 font-bold">
                    。
                  </span>
                  <p>
                    <span className="text-gray-700 mr-2">於 CodeGreen</span>
                    <span className="text-gray-700">2020 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                 目前擔任高科大懶惰蟲，興趣睡覺。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                  <span className="text-gray-700 font-bold">。。。</span>
                  <p>
                    <span className="text-gray-700 mr-2">
                      於 Hashgreen Labs
                    </span>
                    <span className="text-gray-700">2018 - 2020</span>
                  </p>
                </div>
                <p className="mt-2">
                  口頭禪好好笑。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                  <span className="text-gray-700 font-bold">。。。</span>
                  <p>
                    <span className="text-gray-700 mr-2">於 XYZ Tech</span>
                    <span className="text-gray-700">2015 - 2018</span>
                  </p>
                </div>
                <p className="mt-2">
                  介紹完畢。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
