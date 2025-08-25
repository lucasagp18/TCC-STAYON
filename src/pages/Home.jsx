import React from "react";


export function Home() {
  return (
    <div className="font-sans text-gray-800 bg-gray-50 min-h-screen bg-red-400 dark:bg-red-800">
      {/* Header */}


      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center max-w-7xl mx-auto px-8 py-12 md:py-20 gap-12">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Revolucionando a <br />
            Segurança no Transporte
          </h1>
          <p className="text-gray-600 text-lg max-w-xl">
            Um sistema integrado de monitoramento que ajuda veículos e empresas a gestão de frotas
          </p>
          <div className="flex space-x-4">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-md px-6 py-3 font-semibold shadow-md transition">
              Quero aplicativo
            </button>
            <button className="border border-indigo-600 text-indigo-600 rounded-md px-6 py-3 font-semibold hover:bg-indigo-50 transition">
              Saiba Mais
            </button>
          </div>
        </div>
        <div className="md:w-1/2 bg-white rounded-3xl shadow-lg p-10 flex justify-center items-center">
          {/* Placeholder for image */}
          <img
            src="/src/assets/oculos-bracelete.png"
            alt="Óculos e Bracelete"
            className="max-w-full max-h-64"
          />
        </div>
      </section>

      {/* Como Funciona */}
      <section className="max-w-4xl mx-auto text-center px-6 py-16">
        <h2 className="text-3xl font-bold mb-4">Como Funciona</h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-12">
          Um sistema integrado e intuitivo para máxima proteção
        </p>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          <FeatureItem
            number="1"
            title="Monitoramento Contínuo"
            description="Fique sempre ligado com atualizações em tempo real do status da sua frota."
          />
          <FeatureItem
            number="2"
            title="Detecção de Riscos"
            description="Alertas automáticos para situações que possam comprometer a segurança."
          />
          <FeatureItem
            number="3"
            title="Ações Preventivas"
            description="Sistema inteligente para minimizar riscos antes que aconteçam."
          />
          <FeatureItem
            number="4"
            title="Diagnóstico e Emergência"
            description="Resposta rápida para emergências e problemas na frota."
          />
        </div>
      </section>

      {/* Recursos Inovadores */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h3 className="text-3xl font-semibold mb-3">Recursos Inovadores</h3>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Tecnologia de ponta para máxima segurança e eficiência
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <InnovativeFeature
            title="Monitoramento em tempo real"
            description="Acompanhe a localização e status de sua frota instantaneamente."
          />
          <InnovativeFeature
            title="Localização em Tempo Real"
            description="Rastreamento GPS avançado para garantir a rota mais segura."
          />
          <InnovativeFeature
            title="Monitoramento de sinais vitais"
            description="Sensores inteligentes que monitoram a saúde do motorista."
          />
          <InnovativeFeature
            title="Alertas automáticos"
            description="Notificações imediatas para situações críticas."
          />
        </div>
      </section>

      {/* Benefícios para Empresas */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Benefícios para Empresas</h2>
        <p className="text-center text-gray-700 mb-12 max-w-xl mx-auto">
          Maximize a segurança e eficiência da sua frota
        </p>
        <div className="space-y-6">
          <BenefitItem
            title="Redução de Acidentes"
            description="Minimize os riscos e melhore a segurança dos seus veículos."
          />
          <BenefitItem
            title="Aumento de Produtividade"
            description="Otimize rotas e maximize o uso da frota."
          />
          <BenefitItem
            title="Redução de Custos"
            description="Economize com manutenção preventiva e redução de gastos."
          />
          <BenefitItem
            title="Conformidade Regulatória"
            description="Atenda às normas e regulamentos do setor de transporte."
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-400 py-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-6">
          Pronto para Revolucionar a Segurança da sua Frota?
        </h2>
        <p className="mb-8 max-w-2xl mx-auto">
          Descubra nossa aplicação e como ela transforma a segurança e eficiência da sua frota em tempo real.
        </p>
        <div className="space-x-4">
          <button className="bg-white text-indigo-600 font-semibold rounded-md px-8 py-3 hover:bg-gray-100 transition">
            Quero aplicativo
          </button>
          <button className="border border-white rounded-md px-8 py-3 hover:bg-indigo-500 transition">
            Saiba Mais
          </button>
        </div>
      </section>

      {/* Footer */}

    </div>
  );
}

// Componentes auxiliares para facilitar o código

function FeatureItem({ number, title, description }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">
        {number}
      </div>
      <div>
        <h4 className="font-semibold text-lg mb-1">{title}</h4>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
}

function InnovativeFeature({ title, description }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer">
      <div className="mb-4 text-indigo-600 text-4xl">⚡</div>
      <h5 className="font-semibold text-lg mb-2">{title}</h5>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

function BenefitItem({ title, description }) {
  return (
    <div className="flex items-center gap-4 p-4 border border-gray-300 rounded-lg bg-white hover:shadow-md transition cursor-pointer">
      <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl">✓</div>
      <div>
        <h5 className="font-semibold text-lg">{title}</h5>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
}
