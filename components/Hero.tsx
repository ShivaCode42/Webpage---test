import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-blue-600 text-white">
      <div className="container mx-auto px-6 py-32 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
          Komplexní platforma pro správu dokumentů
        </h1>
        <p className="text-lg md:text-xl text-blue-200 max-w-3xl mx-auto mb-8">
          Sledujte, podepisujte a spravujte své dokumenty na jednom místě.
        </p>
        <form className="flex flex-col sm:flex-row justify-center items-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="vas@email.cz"
            className="w-full sm:w-auto flex-grow px-4 py-3 rounded-md sm:rounded-r-none text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-2 sm:mb-0"
          />
          <button
            type="submit"
            className="w-full sm:w-auto bg-gray-800 text-white font-bold px-6 py-3 rounded-md sm:rounded-l-none hover:bg-gray-900 transition-colors"
          >
            Získat demo
          </button>
        </form>
      </div>
    </section>
  );
};

export default Hero;