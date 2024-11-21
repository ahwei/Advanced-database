"use client";

import { useState, useEffect } from "react";

export default function Page() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState("zh");
  const [toast, setToast] = useState("");

  const content = {
    zh: {
      about: "關於我",
      achievements: "傑出成就",
      contact: "聯繫方式",
      experience: "職業亮點",
      mode: (isDark) => `切換至${isDark ? "亮色模式" : "暗色模式"}`,
      lang: "切換語言",
      contactDetails: "聯繫我：example@example.com",
      aboutContent: `里安納度·狄卡比奧是一位全球知名的演員與環保倡導者。他以在電影中的出色表演和深入的角色塑造聞名，參與了包括《鐵達尼號》、《神鬼獵人》和《華爾街之狼》等經典作品。他同時也是一名致力於推動全球環境保護的行動家，創立了狄卡比奧基金會，資助了多個環保計畫，專注於氣候變遷、生物多樣性和海洋保育等領域。他的職業生涯充滿了榮耀與成就，而他的公益行動更讓他成為一位深受尊敬的公眾人物。`,
      experienceHighlights: [
        "榮獲奧斯卡最佳男主角，憑藉《神鬼獵人》展現了極高的表演技藝。",
        "領導多個環保專案，創立基金會以支持氣候行動。",
        "與多位著名導演合作，包括馬丁·史柯西斯與克里斯多福·諾蘭。",
        "參與了數十部備受好評的電影作品，全球票房累計超過 70 億美元。",
      ],
    },
    en: {
      about: "About Me",
      achievements: "Achievements",
      contact: "Contact",
      experience: "Professional Highlights",
      mode: (isDark) => `Switch to ${isDark ? "Light Mode" : "Dark Mode"}`,
      lang: "Switch Language",
      contactDetails: "Contact me: example@example.com",
      aboutContent: `Leonardo DiCaprio is a globally renowned actor and environmental advocate. He is celebrated for his outstanding performances and in-depth character portrayals in classics like *Titanic*, *The Revenant*, and *The Wolf of Wall Street*. In addition to his acting accolades, he is a committed environmental activist. Through the Leonardo DiCaprio Foundation, he has funded numerous environmental projects focused on climate change, biodiversity, and ocean conservation. His career is marked by both cinematic triumphs and impactful philanthropy, making him a respected public figure worldwide.`,
      experienceHighlights: [
        "Won the Academy Award for Best Actor for his outstanding performance in *The Revenant*.",
        "Led multiple environmental initiatives through his foundation to support climate action.",
        "Collaborated with acclaimed directors such as Martin Scorsese and Christopher Nolan.",
        "Starred in over 30 critically acclaimed films with a combined global box office revenue exceeding $7 billion.",
      ],
    },
  };

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(""), 3000); // 3 秒後自動隱藏
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setIsDarkMode(savedTheme === "dark");

    const savedLang = localStorage.getItem("language");
    setLanguage(savedLang || "zh");
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    localStorage.setItem("language", language);
  }, [isDarkMode, language]);

  return (
    <div className={`${isDarkMode ? "dark" : ""}`}>
      <div className="bg-gray-100 dark:bg-gray-800 h-full min-h-screen text-gray-900 dark:text-gray-100">
        {/* 導航欄 */}
        <nav className="bg-blue-500 dark:bg-blue-300 px-4 py-2 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-white dark:text-black font-bold">
              {language === "zh" ? "網站名稱" : "Website Name"}
            </h1>
            <div className="flex space-x-4">
              <button
                className="px-4 py-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-100 rounded shadow"
                onClick={() => {
                  setIsDarkMode(!isDarkMode);
                  showToast(content[language].mode(isDarkMode));
                }}
              >
                {content[language].mode(isDarkMode)}
              </button>
              <button
                className="px-4 py-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-100 rounded shadow"
                onClick={() => {
                  const newLang = language === "zh" ? "en" : "zh";
                  setLanguage(newLang);
                  showToast(
                    newLang === "zh" ? "語言切換至繁體中文" : "Language switched to English"
                  );
                }}
              >
                {content[language].lang}
              </button>
            </div>
          </div>
        </nav>

        {/* 通知提示 */}
        {toast && (
          <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow">
            {toast}
          </div>
        )}

        {/* 主內容 */}
        <div className="container mx-auto py-8 px-4">
          <div className="grid grid-cols-4 sm:grid-cols-12 gap-6">
            {/* 左側：個人資料 */}
            <div className="col-span-4 sm:col-span-3">
              <div className="bg-white dark:bg-gray-700 shadow rounded-lg p-6">
                <div className="flex flex-col items-center">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Leonardo_DiCaprio_cropped_and_rotated_%28cropped%29.jpg/330px-Leonardo_DiCaprio_cropped_and_rotated_%28cropped%29.jpg"
                    className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0 object-contain"
                  />
                  <h1 className="text-xl font-bold">Leonardo DiCaprio</h1>
                  <p className="text-gray-700 dark:text-gray-300">
                    {language === "zh" ? "演員與環保人士" : "Actor and Environmentalist"}
                  </p>
                </div>
                <hr className="my-6 border-t border-gray-300 dark:border-gray-600" />
                <div>
                  <span className="text-gray-700 dark:text-gray-300 uppercase font-bold tracking-wider mb-2">
                    {content[language].achievements}
                  </span>
                  <ul className="mt-2">
                    <li className="mb-2">
                      {language === "zh" ? "奧斯卡最佳男主角" : "Oscar Best Actor"}
                    </li>
                    <li className="mb-2">
                      {language === "zh" ? "環保行動家" : "Environmental Activist"}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 右側：關於與經驗 */}
            <div className="col-span-4 sm:col-span-9">
              <div className="bg-white dark:bg-gray-700 shadow rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4">{content[language].about}</h2>
                <p className="text-gray-700 dark:text-gray-300">
                  {content[language].aboutContent}
                </p>

                <h2 className="text-xl font-bold mt-6 mb-4">
                  {content[language].experience}
                </h2>
                <ul className="text-gray-700 dark:text-gray-300 list-disc pl-6">
                  {content[language].experienceHighlights.map((item, index) => (
                    <li key={index} className="mb-2">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
