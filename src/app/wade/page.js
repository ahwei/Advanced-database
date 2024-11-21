export default function Page() {
  return (
    <div className="bg-gray-100 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/JACcrC0.jpeg"
                  className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0 object-contain"
                />
                <h1 className="text-xl font-bold">Wade</h1>
                <p className="text-gray-700">Student</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">
                  Skills
                </span>
                <ul>
                  <li className="mb-2">Baseball</li>
                  <li className="mb-2">English</li>
                  <li className="mb-2">Programming</li>
                  
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-4 sm:col-span-9">
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">About Me</h2>
              <p className="text-gray-700">
              I consider myself a responsible and sedulous person. Keep improving my English skills.
              </p>

              <h2 className="text-xl font-bold mt-6 mb-4">Educational Background</h2>
              <div className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                  <span className="text-gray-700 font-bold">
                  KIHS(高雄市立高雄高級工業職業學校)
                  </span>
                  <p>
                    <span className="text-gray-700 mr-2"></span>
                    <span className="text-gray-700">2019 - 2022</span>
                  </p>
                </div>
                <p className="mt-2">
                  KIHS baseball team
                </p>
                <p>
                Taiwan Schools Cyberfair(網界博覽會)
                </p>
                <p>
                Level C technician for computer software application
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                  <span className="text-gray-700 font-bold">NKUST(國立高雄科技大學)</span>
                  <p>
                    
                    <span className="text-gray-700">2022 - in progress</span>
                  </p>
                </div>
                <p className="mt-2">
                TOEIC Gold Certificate.
                </p>
                <p>
                Ranked third in IM department and second in class.
                </p>
                <p>
                Own 2379 Dogecoins and 0.12 Ethereum.
                </p>
              </div>

              <div className="mb-6">
  <div className="flex justify-between flex-wrap gap-2 w-full">
    <h2 className="text-xl font-bold mb-4">Work Experience</h2>
  </div>

  <div className="mb-4">
    <span className="text-gray-700 font-bold">Dollars Mall - Administration Unit</span>
    <div className="flex justify-between w-full">
      <p className="text-gray-700">Warehouse management, operate powered pallet truck, powered stacker, etc.</p>
      <span className="text-gray-700">2022 - current</span>
    </div>
  </div>

  <div className="mb-4">
    <span className="text-gray-700 font-bold">Shichen Cram School</span>
    <div className="flex justify-between w-full">
      <p className="text-gray-700">Teaching assistant.</p>
      <span className="text-gray-700">2022 - current</span>
    </div>
  </div>

  <div className="mb-4">
    <span className="text-gray-700 font-bold">Tai Urban Resort</span>
    <div className="flex justify-between w-full">
      <p className="text-gray-700">Housekeeping, customer service.</p>
      <span className="text-gray-700">2022 - current</span>
    </div>
  </div>
</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
