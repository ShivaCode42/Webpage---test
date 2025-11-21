import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">DocuFlow</div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Řešení</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Ceník</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">O nás</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Kontakt</a>
        </nav>
        <button className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition-colors shadow-md">
          Začít
        </button>
      </div>
    </header>
  );
};

export default Header;