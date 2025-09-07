import React, { useState } from "react"

export function Referencias() {
  const references = [
    {
      id: 1,
      accessDate: "ACESSADO EM: 01/06/2025",
      url: "https://tekband.com.br/Imagens/Artigo%20TekBand.pdf",
      title: "TekBand",
      description:
        "Desenvolvimento de um dispositivo autônomo de eletroestimulação",
    },
    {
      id: 2,
      accessDate: "ACESSADO EM: 01/06/2025",
      url: "https://revista.processandosaber.com.br/artigo/arduino-solucao",
      title: "Revista Processando o Saber",
      description:
        "Solução de uma problemática utilizando a plataforma Arduino: óculos antissono",
    },
    {
      id: 3,
      accessDate: "ACESSADO EM: 01/06/2025",
      url: "https://mcsv.com.br/vinicius-da-silva-versao-final.pdf",
      title: "MCSV - Vinícius da Silva",
      description:
        "MCSV + SISTEMA DE MONITORAMENTO CONTÍNUO DE SINAIS VITAIS UTILIZANDO ARDUINO",
    },
    {
      id: 4,
      accessDate: "ACESSADO EM: 01/06/2025",
      url: "https://ocs.ifsp.edu.br/conict/Scicpaper/view/3354/334",
      title: "Instituto Federal de São Paulo",
      description:
        "RASTREADOR DE ANIMAIS DOMÉSTICOS UTILIZANDO PLATAFORMA ARDUINO",
    },
  ]

  // Estado para controlar quais referências estão expandidas
  const [expandedItems, setExpandedItems] = useState({})

  // Função para alternar a expansão de uma referência
  const toggleExpanded = (id) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  // Função para abrir link em nova aba
  const openLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#001128] font-inter py-8 px-4 sm:py-16 sm:px-10 flex flex-col items-center text-gray-900 dark:text-white">
      {/* Title */}
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-[#4A74FF] text-3xl sm:text-5xl font-bold font-poppins mb-2 leading-tight">
          Referências
        </h1>
      </div>

      {/* References Container */}
      <div className="max-w-sm sm:max-w-4xl w-full space-y-4">
        {references.map((reference) => (
          <div
            key={reference.id}
            className="bg-white dark:bg-[#001128] rounded-2xl sm:rounded-xl shadow-lg overflow-hidden transition-all duration-300 border border-gray-200 dark:border-gray-700"
          >
            {/* Header - Always visible */}
            <div className="p-4 sm:p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0">
                  {/* Access Date */}
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-normal mb-2">
                    {reference.accessDate}
                  </p>

                  {/* Title/Link */}
                  <button
                    onClick={() => openLink(reference.url)}
                    className="text-[#4A74FF] font-bold text-sm sm:text-base hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left break-words"
                  >
                    {reference.title}
                  </button>

                  {/* Description - Always visible on mobile, expandable on desktop */}
                  <div className="sm:hidden mt-2">
                    <p className="text-gray-900 dark:text-white text-xs leading-relaxed">
                      {reference.description}
                    </p>
                  </div>
                </div>

                {/* Expand/Collapse Button - Desktop only */}
                <button
                  onClick={() => toggleExpanded(reference.id)}
                  className="hidden sm:flex ml-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors flex-shrink-0"
                >
                  <svg
                    className={`w-5 h-5 text-gray-600 dark:text-gray-400 transition-transform duration-300 ${
                      expandedItems[reference.id] ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Expandable Content - Desktop only */}
            <div
              className={`hidden sm:block overflow-hidden transition-all duration-300 ${
                expandedItems[reference.id]
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-6 pb-6 border-t border-gray-100 dark:border-gray-700">
                <div className="pt-4">
                  <p className="text-gray-900 dark:text-white text-sm sm:text-base leading-relaxed">
                    {reference.description}
                  </p>

                  {/* URL Display */}
                  <div className="mt-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <p className="text-xs text-gray-600 dark:text-gray-400 break-all">
                      {reference.url}
                    </p>
                  </div>

                  {/* Action Button */}
                  <div className="mt-4">
                    <button
                      onClick={() => openLink(reference.url)}
                      className="bg-[#4A74FF] hover:bg-blue-600 dark:hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      Acessar Referência
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Action Button */}
            <div className="sm:hidden px-4 pb-4">
              <button
                onClick={() => openLink(reference.url)}
                className="w-full bg-[#4A74FF] hover:bg-blue-600 dark:hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors"
              >
                Acessar Referência
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Info */}
      <div className="mt-8 sm:mt-12 text-center">
        <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm font-poppins">
          Total de {references.length} referências encontradas
        </p>
      </div>
    </div>
  )
}
