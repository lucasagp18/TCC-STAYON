import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

import truckSceneLight from "../assets/caminoaoescuro.png"; 
import grassBackgroundLight from "../assets/resebanoite.png"; 

import truckSceneDark from "../assets/caminoao.png"; 
import grassBackgroundDark from "../assets/reseba.png"; 

export function Jogo() {
  const { theme } = useContext(ThemeContext);

  const currentTruckScene = theme === "dark" ? truckSceneLight : truckSceneDark;
  const currentGrassBackground = theme === "dark" ? grassBackgroundLight : grassBackgroundDark;

  const MainContent = () => (
    <main className="w-full">
      <div className="hidden md:block">
        <section className="relative w-full h-[700px]">
          <img
            src={currentTruckScene}
            alt="Stay Awake truck scene"
            className="w-full h-full object-cover"
          />
          <div
            className={`absolute top-[10%] left-1/2 transform -translate-x-1/2 flex flex-col items-center text-center px-6 ${
              theme === "dark" ? "text-[#9B9B95]" : "text-white"
            }`}
          >
            <h2
              className={`text-2xl md:text-4xl font-bold font-poppins mb-4 ml-80 ${
                theme === "dark" ? "text-[#9B9B95]" : "text-yellow-400"
              }`}
            >
              STAY AWAKE
            </h2>
          </div>

          <div className="absolute top-[72%] left-[7%]">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-10 px-15 rounded-lg text-3xl shadow-md transition">
              JOGUE AGORA
            </button>
          </div>

        </section>

        <section className="w-full relative">
          <div className="w-full h-[749px] relative">
            <img
              src={currentGrassBackground}
              alt="Grass background"
              className="w-full h-full "
            />

            <div className="absolute inset-0 flex items-center justify-center px-8">
              <div className="grid md:grid-cols-2 gap-12 items-center w-full max-w-6xl">
                <div className="w-full flex flex-col justify-center items-end">
                  <h3
                    className={`text-2xl font-bold uppercase mb-8 mr-30 ${
                      theme === "dark" ? "text-[#9B9B95]" : "text-yellow-400"
                    }`}
                  >
                    ASSISTA O TRAILER A BAIXO
                  </h3>
                  <iframe
                    width="600"
                    height="400"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Stay Awake Gameplay"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-xl shadow-lg"
                  ></iframe>
                </div>

                {/* Texto */}
                <div className="text-center max-w-lg ml-50">
                  <p
                    className={`text-3xl leading-relaxed font-poppins ${
                      theme === "dark" ? "text-[#9B9B95]" : "text-yellow-400"
                    }`}
                  >
                    <strong>Stay Awake</strong> é um jogo top-down onde você
                    controla um caminhoneiro com narcolepsia em uma corrida contra
                    o sono.
                    Enfrente estradas perigosas, obstáculos inesperados e vença o
                    maior inimigo: o próprio cansaço.

                    Você consegue mantê-lo acordado até o fim da jornada?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Mobile Version - Exact Figma Layout */}
      <div className="block md:hidden w-full min-h-screen relative overflow-hidden">
        {/* Top Background Image Section */}
        <div className="relative w-full h-[50vh]">
          <img 
            src={currentTruckScene}
            alt="Stay Awake truck scene"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom Content Section */}
        <div className={`w-full flex-1 px-6 py-8 ${
          theme === "dark" 
            ? "bg-gradient-to-b from-slate-900 to-orange-800" 
            : "bg-gradient-to-b from-slate-900 to-orange-500"
        }`}>
          
          {/* JOGUE AGORA Button */}
          <div className="mb-8 flex justify-center">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-12 rounded-2xl text-xl shadow-lg transition-colors">
              JOGUE AGORA
            </button>
          </div>

          {/* ASSISTA O TRAILER Text */}
          <div className="mb-6 text-center">
            <h3 className="text-orange-600 text-2xl font-normal font-poppins uppercase">
              ASSISTA O TRAILER<br />A BAIXO
            </h3>
          </div>

          {/* Video Container */}
          <div className="mb-8 flex justify-center">
            <div className="relative w-64 h-36 bg-zinc-800 rounded-lg">
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                  <svg 
                    className="w-6 h-6 text-black ml-1" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Descrição */}
          <div className="text-center px-8">
            <p className="text-yellow-400 text-lg leading-relaxed font-poppins">
              Stay Awake é um jogo top-down onde você controla um caminhoneiro com narcolepsia em uma corrida contra o sono. Enfrente estradas perigosas, obstáculos inesperados e vença o maior inimigo: o próprio cansaço. Você consegue mantê-lo acordado até o fim da jornada?
            </p>
          </div>
        </div>
      </div>
    </main>
  );

  return (
    <div
      className={`w-full min-h-screen ${
        theme === "dark" ? "bg-custom-light-gray" : "bg-gray-900"
      }`}
    >
      <MainContent />
    </div>
  );
}