import React from 'react';
import ScrollAnimation from './ScrollAnimation';

interface StatCardProps {
  value: string;
  description: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, description }) => (
  <div className="relative p-6">
    <h3 className="text-5xl font-extrabold text-blue-600 mb-3">{value}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const WhyChooseUs: React.FC = () => {
  const stats = [
    {
      value: '85%',
      description: 'snížení oběhu fyzických dokumentů',
    },
    {
      value: '90%',
      description: 'úspora času při evidenci a kontrole dokumentů',
    },
    {
      value: '100%',
      description: 'dohledatelnost dokumentů, kdykoli a kdekoli',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <ScrollAnimation>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Proč s námi spolupracovat?
          </h2>
        </ScrollAnimation>
        <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x divide-gray-200 text-center">
          {stats.map((stat, index) => (
            <ScrollAnimation key={index} delay={index * 150}>
              <StatCard value={stat.value} description={stat.description} />
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
