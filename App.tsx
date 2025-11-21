
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problems from './components/Problems';
import HowItWorks from './components/HowItWorks';
import Solutions from './components/Solutions';
import WhyChooseUs from './components/WhyChooseUs';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white font-sans text-gray-800">
      <Header />
      <main>
        <Hero />
        <Problems />
        <HowItWorks />
        <Solutions />
        <WhyChooseUs />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
