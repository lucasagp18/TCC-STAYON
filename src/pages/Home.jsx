import React from "react";
import bracelete from "../assets/bracelete.png";
import batimentos from "../assets/batimentos.png"
import dingol from "../assets/dingol.png"
import localizacao from "../assets/localizacao.png"
import olhos from "../assets/olhos.png"
import escudo from "../assets/escudo.png"
import moeda from "../assets/moeda.png"
import papel from "../assets/papel.png"
import grafico from "../assets/grafico.png"



export function Home() {
  return (
    <div className="font-sans text-gray-800 dark:text-gray-200 bg-gray-50 dark:bg-slate-900 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-200 dark:bg-slate-800 py-8 sm:py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold font-['Poppins'] leading-tight bg-gradient-to-r from-[#2A42B2] to-[#4A6FFF]  text-transparent bg-clip-text">
              Revolucionando a <br />
              Segurança no Transporte
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg max-w-md mx-auto lg:mx-0">
              Um sistema integrado de monitoramento que salva vidas e otimiza a gestão de frotas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

              <button className="bg-gradient-to-r from-[#7C4DFF] to-[#7696FF] hover:opacity-90 dark:bg-gradient-to-r text-white rounded-md px-6 py-3 font-normal font-['Poppins'] shadow-md transition-colors duration-200">
                Baixar aplicativo
              </button>

              <button className="border border-indigo-600 dark:border-purple-600 text-indigo-600 dark:text-purple-400 rounded-md px-6 py-3 font-['Poppins']  font-normal  hover:bg-indigo-50 dark:hover:bg-slate-700 transition-colors duration-200">
                Saiba Mais
              </button>
            </div>
          </div>

          <div className="w-full lg:w-1/2  rounded-3xl  p-6 sm:p-10 flex justify-center items-center">

            {/* Placeholder for image */}

            <img src={bracelete}
              alt="Óculos e Bracelete StayOn"
              className="max-w-full max-h-68 sm:max-h-200 object-contain"
            />
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="max-w-6xl mx-auto text-center px-4 sm:px-6 py-12 sm:py-16">
        <h2 className="text-[24px] lg:text-[50px] font-poppins font-bold lg:font-normal mb-4 text-gray-900 dark:text-gray-100">
          Como Funciona
        </h2>

        <div className="w-30 lg:w-60  h-1 bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300 mx-auto mb-8 rounded-full"></div>
        <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 sm:mb-12 text-base lg:text-2xl font-normal font-['Poppins']">
          Um sistema integrado e intuitivo para máxima proteção
        </p>

        <div className="flex flex-col gap-y-6 sm:gap-y-8 text-left">
          <FeatureItem
            number="1"
            title="Monitoramento Contínuo"
            description="Os óculos inteligentes capturam o estado de alerta do motorista e enviam os dados em tempo real para o sistema de monitoramento da empresa."
          />
          <FeatureItem
            number="2"
            title="Detecção de Riscos"
            description="O sistema identifica sinais de sonolência, distração ou condições comprometedoras da direção, acionando alertas imediatos."
          />
          <FeatureItem
            number="3"
            title="Alertas Preventivos"
            description="Notificações são enviadas tanto para o motorista (via bracelete) quanto para a central de monitoramento antes que acidentes ocorram."
          />
          <FeatureItem
            number="4"
            title="Resposta a Emergências"
            description="Em caso de emergência detectada, o sistema aciona automaticamente protocolos de segurança e notifica equipes de resgate."
          />
        </div>
      </section>

      {/* Recursos Inovadores */}
      <section className="bg-gray-200 dark:bg-slate-800 py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center mb-8 sm:mb-12">

          <h3 className="text-[24px] lg:text-[50px] font-poppins font-bold lg:font-normal mb-3 text-gray-900 dark:text-gray-100">
            Recursos Inovadores
          </h3>
          <div className="w-30 lg:w-60  h-1 bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300 mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-base lg:text-2xl font-normal font-['Poppins']">
            Tecnologia de ponta para máxima segurança e eficiência
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
          <InnovativeFeature
            iconSrc={olhos}
            title="Monitoramento de Sinais Vitais"
            description="Os óculos inteligentes capturam dados biométricos e padrões de movimento ocular para detectar fadiga e distração."
          />
          <InnovativeFeature
            iconSrc={localizacao}
            title="Localização em Tempo Real"
            description="O bracelete possui GPS integrado que permite rastreamento preciso da localização do motorista e do veículo."
          />
          <InnovativeFeature
            iconSrc={batimentos}
            title="Monitoramento de Atenção"
            description="Sensores avançados nos óculos monitoram direção do olhar, piscadas e sinais de sonolência em tempo real."
          />
          <InnovativeFeature
            iconSrc={dingol}
            title="Alertas Automáticos"
            description="O bracelete vibra e emite alertas sonoros quando situações de risco são detectadas pelos óculos inteligentes."
          />
        </div>
      </section>

      {/* Benefícios para Empresas */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h2 className="text-[24px] lg:text-[50px] font-poppins font-bold lg:font-normal mb-6 sm:mb-8 text-center text-gray-900 dark:text-gray-100">
          Benefícios para Empresas
        </h2>
        <div className="w-30 lg:w-60 h-1 bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300 mx-auto mb-8 rounded-full"></div>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto text-base lg:text-2xl font-normal font-['Poppins']">
          Maximize a segurança e eficiência da sua frota
        </p>
        <div className="max-w-6xl mx-auto flex flex-col gap-6 sm:gap-8">
          <CompanyBenefits
            iconSrc={escudo}
            title="Redução de Acidentes"
            description="Diminua drasticamente os riscos de acidentes através do monitoramento preventivo do estado do motorista e alertas em tempo real."
          />
          <CompanyBenefits
            iconSrc={grafico}
            title="Aumento de Produtividade"
            description="Motoristas mais alertas e descansados resultam em maior produtividade, menos paradas não programadas e cumprimento de prazos."
          />
          <CompanyBenefits
            iconSrc={moeda}
            title="Redução de Custos"
            description="Economize com seguros, manutenção de veículos, multas e indenizações através da prevenção proativa de acidentes."
          />
          <CompanyBenefits
            iconSrc={papel}
            title="Conformidade Regulatória"
            description="Atenda às normas de segurança do trabalho e regulamentações do setor de transporte com relatórios detalhados e auditoria completa."
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-400  py-12 sm:py-16 text-center text-white px-4 sm:px-6">
        <div className="mx-5">

          <h2 className=" sm:text-3xl  text-4xl mx-4 font-extrabold font-['Poppins'] mb-4 sm:mb-6">
            Pronto para Revolucionar a Segurança da sua Frota?
          </h2>
          <p className=" font-['Poppins'] mb-6 sm:mb-8 mx-2 max-w-2xl mx-auto text-xl font-thin ">
            Baixe nosso aplicativo e comece a transformar a segurança e eficiência da sua operação hoje mesmo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-600 dark:text-purple-600 font-semibold rounded-md px-8 py-3 hover:bg-gray-100 dark:hover:bg-gray-200 transition-colors duration-200 shadow-md">
              <span className="flex items-center justify-center gap-2">
                📱 Google Play
              </span>
            </button>
            <button className="bg-white text-indigo-600 dark:text-purple-600 font-semibold rounded-md px-8 py-3 hover:bg-gray-100 dark:hover:bg-gray-200 transition-colors duration-200 shadow-md">
              <span className="flex items-center justify-center gap-2">
                🍎 App Store
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

// Componentes auxiliares para facilitar o código

function FeatureItem({ number, title, description }) {
  return (
    <div className="flex flex-col items-center text-center gap-10 p-4 sm:flex-row sm:items-start sm:text-left sm:p-6 rounded-lg">
      <div className="flex-shrink-0 w-20 h-20 sm:w-15 sm:h-15 rounded-full bg-indigo-600 dark:bg-blue-500 text-white flex items-center justify-center font-bold text-3xl sm:text-2xl bg-[radial-gradient(ellipse_50.00%_50.00%_at_50.00%_50.00%,_#7C4DFF_49%,_#4A74FF_100%)]">
        {number}
      </div>

      {/* Container do texto */}
      <div>
        <h4 className="font-semibold font-['Poppins'] leading-tight text-xl mb-2 dark:text-gray-100">
          {title}
        </h4>
        <p className="text-gray-600 dark:text-gray-300 text-sm font-normal font-['Poppins']">
          {description}
        </p>
      </div>
    </div>
  );
}

function InnovativeFeature({ iconSrc, title, description }) {
  return (
    <div className="bg-white dark:bg-slate-700 p-4 sm:p-6 rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.2)] rounded-xl p-6 bg-white hover:shadow-xl transition-shadow duration-200 cursor-pointer">


      <div className="mb-4 w-16 h-16 sm:w-18 sm:h-18 mx-auto">
        <img src={iconSrc} alt={title} className="w-full h-full object-contain" />
      </div>

      <h5 className="font-semibold font-['Poppins'] leading-tight text-xl mb-10 dark:text-gray-100">{title}</h5>
      <p className="text-gray-600 dark:text-gray-300 text-sm font-normal font-['Poppins']">{description}</p>
    </div>
  );
}

function CompanyBenefits({ iconSrc, title, description }) {
  return (
    <div className="bg-white dark:bg-slate-700 p-6 rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.2)] rounded-xl p-6 bg-white hover:shadow-xl transition-shadow duration-200 cursor-pointer
                   sm:flex sm:items-center sm:gap-6">

      <div className="flex-shrink-0 mb-4 w-16 h-16 mx-auto 
                     sm:w-14 sm:h-14 sm:mb-0 sm:mx-0">
        <img src={iconSrc} alt={title} className="w-full h-full object-contain" />
      </div>

      {/* Container do texto */}
      {/* - Padrão (mobile): Texto centralizado. */}
      {/* - sm: (desktop): Texto alinhado à esquerda. */}
      <div className="text-center sm:text-left">
        <h5 className="font-semibold font-['Poppins'] leading-tight text-xl mb-2 dark:text-gray-100">
          {title}
        </h5>
        <p className="text-gray-600 dark:text-gray-300 text-sm font-normal font-['Poppins']">
          {description}
        </p>
      </div>
    </div>
  );
}


