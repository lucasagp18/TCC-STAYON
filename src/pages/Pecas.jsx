import React, { useState } from "react"
import bateria from "../assets/bateria.png";
import buzzer from "../assets/buzzer.png";
import esp32 from "../assets/ESP_32.png";
import mpu from "../assets/mpu_6050.png";
import button from "../assets/button.png";
import sensorir from "../assets/sensor_IR.png";
import TP4046 from "../assets/TP4056.png";
import oculos from "../assets/oculos.webp";



export function Pecas() {
  // Lista completa de itens
  const items = [
    {
      name: "Bateria",
      description:
        "Bateria recarregável de íons de lítio para alimentação do circuito",
      quantity: 2,
      price: "R$90,00",
      image: bateria, // Placeholder image
    },
    {
      name: "Buzzer 5V",
      description: "Emissor sonoro para alertas e sinais",
      quantity: 1,
      price: "R$3,50",
      image: buzzer, // Placeholder image
    },
    {
      name: "ESP32",
      description: "Microcontrolador com Wi-Fi e Bluetooth integrado",
      quantity: 2,
      price: "R$120,00",
      image: esp32, // Placeholder image
    },
    {
      name: "MPU-6050",
      description: "Acelerômetro e giroscópio para detecção de movimentos",
      quantity: 1,
      price: "R$30,00",
      image: mpu, // Placeholder image
    },
    {
      name: "Push Button",
      description: "Botão tátil para acionamento manual de funções",
      quantity: 4,
      price: "R$2,80",
      image: button, // Placeholder image
    },
    {
      name: "Sensor IR",
      description: "Sensor infravermelho para detecção de obstáculos",
      quantity: 1,
      price: "R$7,00",
      image: sensorir, // Placeholder image
    },
    {
      name: "TP4056",
      description: "Módulo para carregamento seguro de baterias de lítio",
      quantity: 2,
      price: "R$12,00",
      image: TP4046, // Placeholder image
    },
    {
      name: "Óculos simples",
      description: "Óculos básico, leve e confortável",
      quantity: 1,
      price: "R$121,50",
      image: oculos, // Placeholder image
    },
  ]

  // Estado para controlar a página atual (grupos de 3 itens)
  const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = 3
  const totalPages = Math.ceil(items.length / itemsPerPage)

  // Função para obter os itens da página atual
  const getCurrentItems = () => {
    const startIndex = currentPage * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return items.slice(startIndex, endIndex)
  }

  // Funções de navegação
  const goToNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1)
    }
  }

  const goToPrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#001128] font-inter py-8 px-4 sm:py-16 sm:px-10 flex flex-col items-center text-gray-900 dark:text-white">
      {/* Title */}
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-[#4A74FF] text-3xl sm:text-5xl font-bold font-poppins mb-2 leading-tight">
          Itens do Projeto
        </h1>
        <div className="w-24 sm:w-32 h-1 bg-[#4A74FF] mx-auto"></div>
      </div>

      {/* Items Table Container */}
      <div className="bg-white dark:bg-[#001128] rounded-2xl sm:rounded-3xl p-4 sm:p-8 max-w-sm sm:max-w-4xl w-full shadow-lg mb-6 sm:mb-8 border border-gray-200 dark:border-gray-700">
        {/* Table Header - Desktop */}
        <div className="hidden sm:grid sm:grid-cols-4 bg-[#4A74FF] text-white font-bold font-poppins text-lg sm:text-xl py-4 px-6 rounded-t-xl">
          <div>Item</div>
          <div>Descrição</div>
          <div className="text-center">Quantidade</div>
          <div className="text-right">Valor</div>
        </div>

        {/* Scrollable Items Container */}
        <div className="space-y-4 sm:space-y-0">
          {getCurrentItems().map((item, index) => (
            <div
              key={`${currentPage}-${index}`}
              className="bg-white dark:bg-[#001128] border-b border-gray-200 dark:border-gray-700 p-4 sm:p-0 rounded-lg sm:rounded-none"
            >
              <div className="sm:grid sm:grid-cols-4 sm:py-4 sm:px-6 items-center">
                {/* Item - Mobile */}
                <div className="flex items-center space-x-3 mb-3 sm:mb-0">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center overflow-hidden">
                    {item.image ? (
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#4A74FF] rounded"></div>
                    )}
                  </div>
                  <div>
                    <div className="font-bold text-sm sm:text-base text-gray-900 dark:text-white">
                      {item.name}
                    </div>
                    <div className="text-xs sm:hidden text-gray-600 dark:text-gray-400">
                      {item.description}
                    </div>
                  </div>
                </div>

                {/* Description - Desktop only */}
                <div className="hidden sm:block text-gray-900 dark:text-white font-normal">
                  {item.description}
                </div>

                {/* Quantity and Value - Mobile */}
                <div className="flex justify-between sm:hidden">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Qtd:{" "}
                    <span className="font-bold text-gray-900 dark:text-white">
                      {item.quantity}
                    </span>
                  </span>
                  <span className="text-sm font-bold text-gray-900 dark:text-white">
                    {item.price}
                  </span>
                </div>

                {/* Quantity - Desktop */}
                <div className="hidden sm:block text-center text-gray-900 dark:text-white font-normal">
                  {item.quantity}
                </div>

                {/* Value - Desktop */}
                <div className="hidden sm:block text-right text-gray-900 dark:text-white font-normal">
                  {item.price}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-between items-center mt-6 sm:mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={goToPrevPage}
            disabled={currentPage === 0}
            className={`px-4 py-2 rounded-lg font-poppins text-sm sm:text-base transition-all ${
              currentPage === 0
                ? "bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed"
                : "bg-[#4A74FF] text-white hover:bg-blue-600 dark:hover:bg-blue-700"
            }`}
          >
            ← Anterior
          </button>

          <div className="flex items-center space-x-2">
            <span className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-poppins">
              {currentPage + 1} de {totalPages}
            </span>
            <div className="flex space-x-1">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                    i === currentPage ? "bg-[#4A74FF]" : "bg-gray-300 dark:bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>

          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages - 1}
            className={`px-4 py-2 rounded-lg font-poppins text-sm sm:text-base transition-all ${
              currentPage === totalPages - 1
                ? "bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed"
                : "bg-[#4A74FF] text-white hover:bg-blue-600 dark:hover:bg-blue-700"
            }`}
          >
            Próximo →
          </button>
        </div>

        {/* Total Value */}
        <div className="mt-6 sm:mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center">
            <span className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white font-poppins">
              Valor Total
            </span>
            <span className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white font-poppins">
              R$290,30
            </span>
          </div>
        </div>
      </div>

      {/* Final Result Section */}
      <div className="bg-white dark:bg-[#001128] rounded-2xl sm:rounded-3xl p-6 sm:p-8 max-w-sm sm:max-w-4xl w-full shadow-lg border border-gray-200 dark:border-gray-700 mt-6 sm:mt-8">
        <div className="text-center mb-6">
          <h2 className="text-[#4A74FF] text-xl sm:text-2xl font-bold font-poppins">
            Resultado Final
          </h2>
        </div>

        {/* Image Placeholder */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-xl h-48 sm:h-80 flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600">
          <div className="text-center">
            <div className="w-16 h-16 sm:w-24 sm:h-24 bg-gray-300 dark:bg-gray-700 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <svg
                className="w-8 h-8 sm:w-12 sm:h-12 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base font-poppins">
              Imagem do projeto finalizado
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
