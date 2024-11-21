export default function Page() {
  return (
    <div className="bg-gray-900 h-[100vh] scroll-my-1 text-gray-200">
      <div className="container mx-auto py-8">
        {/* 照片區域 */}
        <div className="flex flex-col items-center mb-8 animate__animated animate__fadeInDown">
          <img
            src="https://i.imgur.com/rDfBLN1.jpeg"
            className="w-32 h-32 bg-gray-600 rounded-full mb-4 shrink-0 object-contain"
          />
          <h1 className="text-3xl font-bold">Trump</h1>
          <p className="text-gray-400">Software Developer</p>
        </div>

        {/* 主內容 */}
        <div className="bg-gray-800 shadow rounded-lg p-6 animate__animated animate__fadeInUp">
          <h2 className="text-xl font-bold mb-4">履歷</h2>
          <div className="overflow-x-auto">
            <table className="table-auto w-full text-left">
              <thead>
                <tr className="bg-gray-700">
                  <th className="px-4 py-2 text-gray-300">職位</th>
                  <th className="px-4 py-2 text-gray-300">公司</th>
                  <th className="px-4 py-2 text-gray-300">年份</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-700">
                  <td className="px-4 py-2">Software Engineer</td>
                  <td className="px-4 py-2">Trump Organization</td>
                  <td className="px-4 py-2">2021 - 現在</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="px-4 py-2">Senior Developer</td>
                  <td className="px-4 py-2">White House Tech</td>
                  <td className="px-4 py-2">2017 - 2021</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="px-4 py-2">Tech Lead</td>
                  <td className="px-4 py-2">Ivanka AI</td>
                  <td className="px-4 py-2">2013 - 2017</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 關於我 */}
          <h2 className="text-xl font-bold mt-6 mb-4">About Me</h2>
          <p className="text-gray-300">
            Hi! I'm Trump, a software developer with extensive experience
            leading tech initiatives. Over the years, I've worked on innovative
            AI projects and driven solutions across web and hybrid applications.
          </p>
        </div>
      </div>
    </div>
  );
}
