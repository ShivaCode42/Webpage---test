import React from 'react';
import ScrollAnimation from './ScrollAnimation';

interface ProblemCardProps {
  title: string;
  description: string;
}

const ProblemCard: React.FC<ProblemCardProps> = ({ title, description }) => (
  <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
    <h3 className="font-bold text-lg text-blue-600 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

const Problems: React.FC = () => {
  const problems = [
    {
      title: 'Právní a compliance rizika',
      description: 'Nejste si jisti, kdo jaký dokument podepsal, nebo zda je digitální podpis platný pro soud.'
    },
    {
      title: 'Provozní a finanční neefektivita',
      description: 'Schvalování dokumentů znamená nekonečné tisknutí, podepisování a hledání správných lidí, což plýtvá časem a zdroji.'
    },
    {
      title: 'Chaos v evidenci',
      description: 'Těžko sledovatelné verze dokumentů a roztříštěné úložiště vedou k nejistotě, co je skutečně platné.'
    },
    {
      title: 'Chybí kontrola nad daty',
      description: 'Ztrácíte přehled o tom, kdo má přístup k citlivým dokumentům, což vytváří významné bezpečnostní riziko.'
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <ScrollAnimation>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Zní vám tyto problémy povědomě?
          </h2>
        </ScrollAnimation>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <ScrollAnimation key={index} delay={index * 100}>
              <ProblemCard title={problem.title} description={problem.description} />
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;
