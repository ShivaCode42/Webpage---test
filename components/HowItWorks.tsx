import React, { useState } from 'react';
import ScrollAnimation from './ScrollAnimation';

const Step: React.FC<{ number: number; title: string; isActive: boolean; onClick: () => void }> = ({ number, title, isActive, onClick }) => (
  <div
    className={`flex items-center space-x-4 p-4 rounded-lg cursor-pointer transition-all duration-300 mb-2 ${isActive ? 'bg-white shadow-md' : 'hover:bg-blue-100'}`}
    onClick={onClick}
    onKeyPress={(e) => e.key === 'Enter' && onClick()}
    role="button"
    aria-pressed={isActive}
    tabIndex={0}
  >
    <div className={`flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 rounded-full font-bold transition-all duration-300 ${isActive ? 'bg-blue-600 border-blue-600 text-white transform scale-105' : 'border-blue-400 text-blue-500'}`}>
      {number}
    </div>
    <span className={`text-lg font-semibold transition-colors ${isActive ? 'text-blue-800' : 'text-gray-700'}`}>{title}</span>
  </div>
);

const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: 'Vytvoření dokumentu',
      description: 'Dokument je v pracovní fází.'
    },
    {
      title: 'Schvalování',
      description: 'Dokument putuje na základě nastavené workflow automaticky ke schválení.'
    },
    {
      title: 'Podpis',
      description: 'Oběma stranám přijde e-mail z ktérého se prokliknou do zabezpečeného portálu, ověří svou totožnost (např. BankID, eObčanky) a dokument podepíší.'
    },
    {
      title: 'Časová razítka a certifikáty',
      description: 'Po podepsání je dokument na pozadí automaticky opatřen certifikátem a časovým razítkem. Tím je garantován obsah dokumentu i čas podpisu.'
    },
    {
      title: 'Archivace',
      description: 'Dokument se automaticky uloží do archivu. Systém sám hlídá platnost certifikátů a před jejich expirací se automaticky obnoví, čímž prodlouží jejich platnost o další roky.'
    },
    {
      title: 'Skartace',
      description: 'Po uplynutí zákonné lhůty (např. 10 let) systém upozorní zodpovědnou osobu a provede bezpečné a doložitelné smazání dat.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <ScrollAnimation>
          <p className="text-blue-600 font-semibold">Spravovat dokumenty jde lépe!</p>
          <h2 className="text-3xl font-bold text-gray-800 mt-2 mb-12">
            Jak DocuFlow funguje
          </h2>
        </ScrollAnimation>
        <ScrollAnimation delay={200}>
          <div className="bg-blue-50 rounded-lg p-8 lg:p-12 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-left bg-white p-8 rounded-lg shadow-inner min-h-[250px] lg:min-h-[350px] flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-blue-600 mb-4">{steps[activeStep].title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{steps[activeStep].description}</p>
              </div>
              <div className="text-left">
                {steps.map((step, index) => (
                  <Step 
                    key={index} 
                    number={index + 1} 
                    title={step.title} 
                    isActive={activeStep === index}
                    onClick={() => setActiveStep(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default HowItWorks;
