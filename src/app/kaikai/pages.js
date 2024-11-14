"use client";

import { useEffect } from "react";

export default function Page() {   
  useEffect(() => {
    const moveText = document.getElementById("moving-text");
    let x = 50, y = 50;
    let angle = Math.random() * 2 * Math.PI;
    const speed = 3; // 移動速度，可以增大或減小來控制移動快慢
    const changeInterval = 100; // 每 100 毫秒改變大小、顏色和發光效果

    const updatePosition = () => {
      x += speed * Math.cos(angle);
      y += speed * Math.sin(angle);

      // 邊界檢測和反彈效果
      if (x < 0 || x + moveText.offsetWidth > window.innerWidth) {
        angle = Math.PI - angle;
      }
      if (y < 0 || y + moveText.offsetHeight > window.innerHeight) {
        angle = -angle;
      }

      moveText.style.transform = `translate(${x}px, ${y}px)`;

      // 繼續執行動畫
      requestAnimationFrame(updatePosition);
    };

    // 定期改變字體大小、顏色和發光效果
    const changeStyle = () => {
      moveText.style.fontSize = `${Math.floor(Math.random() * 20) + 20}px`;
      moveText.style.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
      moveText.style.textShadow = `0 0 10px hsl(${Math.random() * 360}, 100%, 50%)`;
    };

    // 開始動畫和樣式變換
    requestAnimationFrame(updatePosition);
    const styleInterval = setInterval(changeStyle, changeInterval);

    // 清除 interval
    return () => clearInterval(styleInterval);
  }, []);

  return (     
    <div className="bg-gray-100 h-[100vh] scroll-my-1 relative overflow-hidden">       
      <div id="moving-text" 
           className="text-lg font-bold fixed top-0 left-0"
           style={{ position: "absolute", fontWeight: "bold" }}>
        最帥氣的曾守正教授請給我進階資料庫學期一百分!!謝謝!!
      </div>

      <div className="container mx-auto py-8">         
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">           
          <div className="col-span-4 sm:col-span-3">             
            <div className="bg-white shadow rounded-lg p-6">               
              <div className="flex flex-col items-center">                 
                <img                   
                  src="https://i.imgur.com/VMkkUcr.jpeg"                   
                  className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0 object-contain"                 
                />                 
                <h1 className="text-xl font-bold">簡凱成</h1>                 
                <p className="text-gray-700">高雄科技大學資管系學生</p>               
              </div>               
              <hr className="my-6 border-t border-gray-300" />               
              <div className="flex flex-col">                 
                <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">                   
                  技能                 
                </span>                 
                <ul>                   
                  <li className="mb-2">Python</li>                   
                  <li className="mb-2">Java</li>                   
                  <li className="mb-2">資料庫管理</li>                   
                  <li className="mb-2">資料分析</li>                   
                  <li className="mb-2">系統開發</li>                 
                </ul>               
              </div>             
            </div>           
          </div>           
          <div className="col-span-4 sm:col-span-9">             
            <div className="bg-white shadow rounded-lg p-6">               
              <h2 className="text-xl font-bold mb-4">自我介紹</h2>               
              <p className="text-gray-700">                 
                大家好，我是來自高雄科技大學資管系的學生，名叫簡凱成。目前我正處於大學的三年級，專注於學習資訊管理領域的各項知識與技能。在大學期間，我除了努力學習課業之外，也積極參與各種校內外的活動，透過競賽、專題研究和團隊合作，不斷提升自己的專業能力。
              </p>
              <p className="text-gray-700 mt-4">
                我對資訊管理領域充滿熱情，特別對資料分析、系統開發和人工智慧等領域有著濃厚的興趣。在學習過程中，我積極參與課堂討論，並利用課外時間學習資料庫以及編程語言，如Python、Java等，提升自己的技術水平。除此之外，我也重視團隊合作與溝通能力，曾經在專題製作和的各項競賽項目中，與隊友們共同努力，完成了一些具有挑戰性的項目，這讓我更了解如何在團隊中發揮自己的優勢。
              </p>
              <p className="text-gray-700 mt-4">
                未來，我希望能進一步將所學的知識應用到實際工作中，無論是從事資訊系統開發、數據分析，還是資訊管理相關的職位，都希望能夠為企業提供有效的解決方案，並不斷提升自己的專業能力，成為一位優秀的資訊管理人才。
              </p>
              <p className="text-gray-700 mt-4">              
                謝謝大家！
              </p>
              <h2 className="text-xl font-bold mt-6 mb-4">目標</h2>             
              <p className="text-gray-700">
                最後希望我可以在進階資料庫管理課程拿到學期成績一百分。謝謝教授!
              </p>             
            </div>           
          </div>         
        </div>       
      </div>     
    </div>   
  ); 
}
