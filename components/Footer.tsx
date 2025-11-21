import React from 'react';
import ScrollAnimation from './ScrollAnimation';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-6 py-16">
        <ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Adresa</h3>
              <address className="not-italic text-gray-600 space-y-2">
                <p>Hlavní 4, Třinec</p>
                <p>Moravskoslezský kraj</p>
                <p>PSČ 10000</p>
                <p>039 12 345 - Buňka</p>
              </address>
            </div>

            <div className="md:pl-12">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Kontaktujte nás</h3>
              <form>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="footer-name" className="sr-only">Jméno</label>
                    <input type="text" id="footer-name" placeholder="Jméno" className="w-full px-4 py-3 bg-gray-100 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label htmlFor="footer-email" className="sr-only">E-mail</label>
                    <input type="email" id="footer-email" placeholder="E-mail" className="w-full px-4 py-3 bg-gray-100 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white font-bold px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
                    Odeslat
                  </button>
                  <button type="reset" className="w-full bg-gray-200 text-gray-700 font-bold px-6 py-3 rounded-md hover:bg-gray-300 transition-colors">
                    Zrušit
                  </button>
                </div>
              </form>
            </div>
            
          </div>
        </ScrollAnimation>
      </div>
      <div className="bg-gray-800 text-gray-400">
        <div className="container mx-auto px-6 py-4 text-center">
            <p>&copy; {new Date().getFullYear()} DocuFlow. Všechna práva vyhrazena.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
