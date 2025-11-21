import React, { useState } from 'react';
import ScrollAnimation from './ScrollAnimation';

const FaqItem: React.FC<{ question: string; answer: string; isOpen: boolean; onClick: () => void }> = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="border-b border-gray-200 py-4">
            <button
                onClick={onClick}
                className="w-full flex justify-between items-center text-left text-lg font-semibold text-gray-800"
                aria-expanded={isOpen}
            >
                <span>{question}</span>
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border border-gray-300">
                    <svg className={`w-6 h-6 text-blue-600 transform transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                </span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}
            >
                <p className="text-gray-600 pr-8">{answer}</p>
            </div>
        </div>
    );
};


const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: 'Proč bychom měli integrovat DocuFlow do naší firmy?',
            answer: 'DocuFlow centralizuje správu dokumentů, automatizuje procesy a zvyšuje bezpečnost. Výsledkem je úspora času, snížení nákladů a minimalizace rizik spojených s papírovou agendou.'
        },
        {
            question: 'Jaké jsou nejvýznamnější přínosy?',
            answer: 'Mezi hlavní přínosy patří 100% dohledatelnost dokumentů, 90% úspora času při evidenci a kontrole, a 85% snížení oběhu fyzických dokumentů. Získáte také plnou kontrolu nad přístupy a legislativní soulad.'
        },
        {
            question: 'Je možné napojení na interní systémy?',
            answer: 'Ano, naše platforma je navržena s ohledem na snadnou integraci. Poskytujeme bohaté API a podporu pro napojení na vaše stávající ERP, CRM nebo jiné podnikové systémy.'
        },
        {
            question: 'Co když se změní legislativa, jste na to připraveni?',
            answer: 'Ano, náš systém je neustále aktualizován v souladu s platnou legislativou. Sledujeme změny a zajišťujeme, aby vaše dokumenty a procesy vždy splňovaly zákonné požadavky, včetně nařízení jako je eIDAS.'
        }
    ];

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 max-w-4xl">
                <ScrollAnimation>
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                        Nejčastější dotazy
                    </h2>
                </ScrollAnimation>
                <div className="space-y-2">
                    {faqs.map((faq, index) => (
                        <ScrollAnimation key={index} delay={index * 100}>
                            <FaqItem
                                question={faq.question}
                                answer={faq.answer}
                                isOpen={openIndex === index}
                                onClick={() => handleToggle(index)}
                            />
                        </ScrollAnimation>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
