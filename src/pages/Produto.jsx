import React from "react"

export function Produto() {
  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,#E5E6E6,#DAE3E5)] font-inter py-8 px-4 sm:py-16 sm:px-10 flex flex-col items-center">
      {/* Title */}
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-blue-500 text-3xl sm:text-5xl font-bold font-poppins mb-2 leading-tight">
          <span className="block sm:inline">Instruções</span>
          <span className="block sm:inline sm:ml-2">de Uso</span>
        </h1>
        <p className="text-blue-500 text-base font-bold font-poppins">
          (Como Utilizar)
        </p>
      </div>

      {/* Instructions Container */}
      <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 max-w-sm sm:max-w-4xl w-full shadow-lg">
        {/* Step 1 */}
        <div className="flex items-start mb-6 sm:mb-10">
          <div className="bg-blue-500 text-white text-lg sm:text-5xl font-bold font-poppins w-8 h-8 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mr-4 sm:mr-8 flex-shrink-0 leading-none">
            1
          </div>
          <div className="flex-1">
            <h2 className="text-blue-500 text-lg sm:text-4xl font-bold font-poppins mb-2 sm:mb-4">
              Primeiro passo
            </h2>
            <p className="text-slate-900 text-sm sm:text-2xl font-normal font-poppins leading-relaxed">
              -Retire cuidadosamente o óculos juntamente com o bracelete da
              embalagem
              <br />
              -Remova a película de proteção da lente e do visor do bracelete
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex items-start mb-6 sm:mb-10">
          <div className="bg-blue-500 text-white text-lg sm:text-5xl font-bold font-poppins w-8 h-8 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mr-4 sm:mr-8 flex-shrink-0 mt-1 leading-none">
            2
          </div>
          <div className="flex-1">
            <h2 className="text-blue-500 text-lg sm:text-4xl font-bold font-poppins mb-2 sm:mb-4">
              Segundo passo
            </h2>
            <p className="text-slate-900 text-sm sm:text-2xl font-normal font-poppins leading-relaxed">
              -Aperte o botão de ligar ao lado do óculos
              <br />
              -E o botão esquerdo do bracelete
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex items-start mb-6 sm:mb-10">
          <div className="bg-blue-500 text-white text-lg sm:text-5xl font-bold font-poppins w-8 h-8 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mr-4 sm:mr-8 flex-shrink-0 mt-1 leading-none">
            3
          </div>
          <div className="flex-1">
            <h2 className="text-blue-500 text-lg sm:text-4xl font-bold font-poppins mb-2 sm:mb-4">
              Terceiro passo
            </h2>
            <p className="text-slate-900 text-sm sm:text-2xl font-normal font-poppins leading-relaxed">
              -Faça login indo nas configurações do dispositivo
              <br />
              com seu endereço de E-mail
            </p>
          </div>
        </div>

        {/* Video Placeholder */}
        <div className="bg-slate-800 rounded-lg sm:rounded-xl h-48 sm:h-80 flex items-center justify-center mb-6 sm:mb-10 relative">
          <div className="bg-white bg-opacity-10 sm:bg-opacity-10 rounded-full w-12 h-12 sm:w-20 sm:h-20 flex items-center justify-center cursor-pointer hover:bg-opacity-20 sm:hover:bg-opacity-20 transition-all">
            <div className="w-0 h-0 border-l-4 sm:border-l-6 border-l-white border-t-2 sm:border-t-4 border-t-transparent border-b-2 sm:border-b-4 border-b-transparent ml-1"></div>
          </div>
          <div className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5 text-white text-sm sm:text-base font-poppins">
            <span className="hidden sm:inline">
              Vídeo demonstrativo (em breve)
            </span>
            <span className="sm:hidden">Vídeo (em breve)</span>
          </div>
        </div>

        {/* Items Button - Mobile */}
        <button className="sm:hidden bg-slate-800 hover:bg-slate-900 text-white text-base font-normal font-poppins py-3 px-6 rounded-full w-full transition-all duration-300 ease-in-out">
          Itens do Projeto
        </button>
      </div>

      {/* Items Button - Desktop */}
      <button className="hidden sm:block bg-slate-800 hover:bg-slate-900 text-white text-2xl font-normal font-poppins py-4 px-10 rounded-full mt-10 transition-all duration-300 ease-in-out">
        Itens do Projeto
      </button>
    </div>
  )
}
