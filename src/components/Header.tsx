import React, { useState } from 'react';
import { Globe, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('中文');
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const toggleLanguage = () => {
    setLanguage(language === '中文' ? 'English' : '中文');
  };

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="/" className="flex items-center text-blue-500 text-xl font-bold">
          <Globe className="mr-2" />
          <span>FestiGlobe</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-gray-700 hover:text-blue-500 transition duration-300">
            功能介绍
          </a>
          <a href="#faq" className="text-gray-700 hover:text-blue-500 transition duration-300">
            常见问题
          </a>
          <button 
            onClick={toggleLanguage}
            className="flex items-center text-gray-700 bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full transition duration-300"
          >
            <Globe className="w-4 h-4 mr-1" />
            {language}
          </button>
        </nav>
        
        {/* Mobile menu button */}
        <button className="md:hidden text-gray-700" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#features" 
              className="text-gray-700 hover:text-blue-500 transition duration-300 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              功能介绍
            </a>
            <a 
              href="#faq" 
              className="text-gray-700 hover:text-blue-500 transition duration-300 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              常见问题
            </a>
            <button 
              onClick={toggleLanguage}
              className="flex items-center text-gray-700 bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-full transition duration-300 w-fit"
            >
              <Globe className="w-4 h-4 mr-1" />
              {language}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;