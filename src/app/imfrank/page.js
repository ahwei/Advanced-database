export default function Page() {
  return (
    <div className="bg-gray-900 text-white h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-gray-800 shadow rounded-lg p-6">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpeg"
                  alt="Frank Trump"
                  className="w-32 h-32 bg-gray-600 rounded-full mb-4 shrink-0 object-contain"
                />
                <h1 className="text-2xl font-bold">Frank Trump</h1>
                <p className="text-gray-400">CEO at Trump Enterprises</p>
              </div>
              <hr className="my-6 border-t border-gray-700" />
              <div className="flex flex-col">
                <span className="text-gray-400 uppercase font-bold tracking-wider mb-2">
                  Skills
                </span>
                <ul className="text-gray-300">
                  <li className="mb-2">Business Leadership</li>
                  <li className="mb-2">Strategic Planning</li>
                  <li className="mb-2">Public Speaking</li>
                  <li className="mb-2">Real Estate Development</li>
                  <li className="mb-2">Negotiation</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-span-4 sm:col-span-9">
            <div className="bg-gray-800 shadow rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4">About Me</h2>
              <p className="text-gray-400">
                Hello! I’m Frank Trump, a seasoned entrepreneur and CEO with a strong
                background in real estate development and business leadership. As the
                CEO of Trump Enterprises, I have led multi-billion dollar deals and
                worked with global brands. My expertise spans across strategy, management,
                and negotiation, helping to shape the future of the industry.
              </p>

              <h2 className="text-2xl font-bold mt-6 mb-4">Experience</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-gray-800 text-gray-300 border-separate border-spacing-0">
                  <thead>
                    <tr>
                      <th className="py-3 px-6 text-left">Title</th>
                      <th className="py-3 px-6 text-left">Company</th>
                      <th className="py-3 px-6 text-left">Dates</th>
                      <th className="py-3 px-6 text-left">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-700">
                      <td className="py-4 px-6">CEO</td>
                      <td className="py-4 px-6">Trump Enterprises</td>
                      <td className="py-4 px-6">2000 - Present</td>
                      <td className="py-4 px-6">
                        Leading a global real estate empire, including luxury hotels, golf
                        courses, and residential developments. Overseeing business
                        operations, strategic planning, and public relations.
                      </td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-4 px-6">Founder & CEO</td>
                      <td className="py-4 px-6">Trump Organization</td>
                      <td className="py-4 px-6">1971 - Present</td>
                      <td className="py-4 px-6">
                        Founded and grew a multi-billion-dollar real estate company,
                        responsible for numerous high-profile developments in New York City
                        and globally.
                      </td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-4 px-6">Host</td>
                      <td className="py-4 px-6">The Apprentice</td>
                      <td className="py-4 px-6">2004 - 2015</td>
                      <td className="py-4 px-6">
                        Hosted the popular reality TV show, guiding aspiring entrepreneurs
                        through various business challenges while strengthening my brand’s
                        public profile.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}