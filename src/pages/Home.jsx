import React from "react";

export function Home() {
  return (
    <div className="font-sans text-gray-800 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-200 py-8 sm:py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight bg-gradient-to-r from-blue-800 to-blue-600 text-transparent bg-clip-text">
              Revolucionando a <br />
              Segurança no Transporte
            </h1>
            <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
              Um sistema integrado de monitoramento que salva vidas e otimiza a gestão de frotas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-md px-6 py-3 font-semibold shadow-md transition-colors duration-200">
                Quero aplicativo
              </button>
              <button className="border border-indigo-600 text-indigo-600 rounded-md px-6 py-3 font-semibold hover:bg-indigo-50 transition-colors duration-200">
                Saiba Mais
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 bg-white rounded-3xl shadow-lg p-6 sm:p-10 flex justify-center items-center">
            {/* Placeholder for image */}
            <img
              src="/assets/oculos-bracelete.png"
              alt="Óculos e Bracelete StayOn"
              className="max-w-full max-h-48 sm:max-h-64 object-contain"
            />
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="max-w-6xl mx-auto text-center px-4 sm:px-6 py-12 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Como Funciona</h2>
        <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-8 rounded-full"></div>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8 sm:mb-12 text-sm sm:text-base">
          Um sistema integrado e intuitivo para máxima proteção
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 text-left">
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
      <section className="bg-gray-200 py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center mb-8 sm:mb-12">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-3 text-gray-900">Recursos Inovadores</h3>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">
            Tecnologia de ponta para máxima segurança e eficiência
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
          <InnovativeFeature
            icon="👁️"
            title="Monitoramento de Sinais Vitais"
            description="Os óculos inteligentes capturam dados biométricos e padrões de movimento ocular para detectar fadiga e distração."
          />
          <InnovativeFeature
            icon="📍"
            title="Localização em Tempo Real"
            description="O bracelete possui GPS integrado que permite rastreamento preciso da localização do motorista e do veículo."
          />
          <InnovativeFeature
            icon="🔔"
            title="Monitoramento de Atenção"
            description="Sensores avançados nos óculos monitoram direção do olhar, piscadas e sinais de sonolência em tempo real."
          />
          <InnovativeFeature
            icon="⚡"
            title="Alertas Automáticos"
            description="O bracelete vibra e emite alertas sonoros quando situações de risco são detectadas pelos óculos inteligentes."
          />
        </div>
      </section>

      {/* Benefícios para Empresas */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-gray-900">Benefícios para Empresas</h2>
        <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-8 rounded-full"></div>
        <p className="text-center text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base">
          Maximize a segurança e eficiência da sua frota
        </p>
        <div className="space-y-4 sm:space-y-6">
          <BenefitItem
            icon="🛡️"
            title="Redução de Acidentes"
            description="Diminua drasticamente os riscos de acidentes através do monitoramento preventivo do estado do motorista e alertas em tempo real."
          />
          <BenefitItem
            icon="📈"
            title="Aumento de Produtividade"
            description="Motoristas mais alertas e descansados resultam em maior produtividade, menos paradas não programadas e cumprimento de prazos."
          />
          <BenefitItem
            icon="💰"
            title="Redução de Custos"
            description="Economize com seguros, manutenção de veículos, multas e indenizações através da prevenção proativa de acidentes."
          />
          <BenefitItem
            icon="📄"
            title="Conformidade Regulatória"
            description="Atenda às normas de segurança do trabalho e regulamentações do setor de transporte com relatórios detalhados e auditoria completa."
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-400 py-12 sm:py-16 text-center text-white px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
          Pronto para Revolucionar a Segurança da sua Frota?
        </h2>
        <p className="mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
          Baixe nossa aplicação e descubra como ela transforma a segurança e eficiência da sua frota em tempo real.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-indigo-600 font-semibold rounded-md px-8 py-3 hover:bg-gray-100 transition-colors duration-200 shadow-md">
            <span className="flex items-center justify-center gap-2">
              📱 Google Play
            </span>
          </button>
          <button className="bg-white text-indigo-600 font-semibold rounded-md px-8 py-3 hover:bg-gray-100 transition-colors duration-200 shadow-md">
            <span className="flex items-center justify-center gap-2">
              🍎 App Store
            </span>
          </button>
        </div>
      </section>
    </div>
  );
}

// Componentes auxiliares para facilitar o código

function FeatureItem({ number, title, description }) {
  return (
    <div className="flex gap-4 items-start p-4 sm:p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-sm sm:text-base">
        {number}
      </div>
      <div>
        <h4 className="font-semibold text-base sm:text-lg mb-2">{title}</h4>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function InnovativeFeature({ icon, title, description }) {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 cursor-pointer">
      <div className="mb-4 text-3xl sm:text-4xl">{icon}</div>
      <h5 className="font-semibold text-base sm:text-lg mb-2">{title}</h5>
      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function BenefitItem({ icon, title, description }) {
  return (
    <div className="flex items-start gap-4 p-4 sm:p-6 border border-gray-200 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-200 cursor-pointer">
      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl">
        {icon}
      </div>
      <div>
        <h5 className="font-semibold text-base sm:text-lg mb-2">{title}</h5>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
