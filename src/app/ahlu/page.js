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
    },
    en: {
      about: "About Me",
      achievements: "Achievements",
      contact: "Contact",
      experience: "Experience",
      mode: (isDark) => `Switch to ${isDark ? "Light Mode" : "Dark Mode"}`,
      lang: "Switch Language",
      contactDetails: "Contact me: example@example.com",
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
                  {language === "zh"
                    ? "里安納度是一位著名的演員與環保倡導者，致力於推動氣候行動。"
                    : "Leonardo is a renowned actor and environmental advocate, committed to climate action."}
                </p>
                <h2 className="text-xl font-bold mt-6 mb-4">
                  {content[language].experience}
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  {language === "zh"
                    ? "代表作包括《鐵達尼號》、《全面啟動》等經典電影。"
                    : "Famous works include Titanic, Inception, and other classics."}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 聯繫方式 */}
        <footer className="bg-gray-200 dark:bg-gray-900 text-center py-4">
          <p className="text-gray-700 dark:text-gray-400">
            {content[language].contactDetails}
          </p>
        </footer>
      </div>
    </div>
  );
}
