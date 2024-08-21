import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import LanguageSelector from "./LanguageSelector";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#134069] text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-between">
        {/* Hamburger Icon */}
        <div className="md:hidden flex items-center justify-between w-full">
          <button onClick={toggleMenu} className="flex items-center">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
          {/* Logo for small screens */}
          <div className="flex items-center mx-auto md:hidden">
            <img
              src="../src/assets/world-and-turkey-health-logo.png"
              alt="Logo"
              className="h-16"
            />
          </div>
          <div>
            <LanguageSelector />
          </div>
        </div>

        {/* Logo for large screens */}
        <div className="hidden md:flex items-center mb-4 md:mb-0">
          <img
            src="../src/assets/world-and-turkey-health-logo.png"
            alt="Logo"
            className="h-16"
          />
        </div>

        {/* Menu */}
        <nav
          className={`${
            isMenuOpen ? "flex flex-col items-center" : "hidden md:flex md:flex-row md:items-center md:text-left"
          } ${isMenuOpen ? 'absolute inset-0 bg-[#134069] flex flex-col items-center justify-center' : 'md:static'}`}
        >
          <a
            href="#"
            className="mb-4 md:mb-0 md:mr-4 px-4 py-2 rounded-full text-center hover:bg-[#275d9b] hover:text-white transition-all duration-300 ease-in-out"
          >
            ANA SAYFA
          </a>
          <a
            href="#"
            className="mb-4 md:mb-0 md:mr-4 px-4 py-2 rounded-full text-center hover:bg-[#275d9b] hover:text-white transition-all duration-300 ease-in-out"
          >
            HAKKIMIZDA
          </a>
          <a
            href="#"
            className="mb-4 md:mb-0 md:mr-4 px-4 py-2 rounded-full text-center hover:bg-[#275d9b] hover:text-white transition-all duration-300 ease-in-out"
          >
            HİZMETLERİMİZ
          </a>
          <a
            href="#"
            className="mb-4 md:mb-0 md:mr-4 px-4 py-2 rounded-full text-center hover:bg-[#275d9b] hover:text-white transition-all duration-300 ease-in-out"
          >
            İK
          </a>
          <a
            href="#"
            className="mb-4 md:mb-0 md:mr-4 px-4 py-2 rounded-full text-center hover:bg-[#275d9b] hover:text-white transition-all duration-300 ease-in-out"
          >
            İLETİŞİM
          </a>
        </nav>

        {/* Language Selector (Desktop) */}
        <div className={`hidden md:block mt-4 md:mt-0`}>
          <LanguageSelector />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-[#134069] text-white flex flex-col items-center justify-center ${isMenuOpen ? 'flex' : 'hidden'} transition-all duration-300 ease-in-out z-20`}
        onClick={toggleMenu}
      >
        <div className="flex flex-col items-center">
          <a
            href="#"
            className="mb-4 px-4 py-2 rounded-full text-center hover:bg-[#275d9b] hover:text-white transition-all duration-300 ease-in-out"
            onClick={(e) => e.stopPropagation()}
          >
            ANA SAYFA
          </a>
          <a
            href="#"
            className="mb-4 px-4 py-2 rounded-full text-center hover:bg-[#275d9b] hover:text-white transition-all duration-300 ease-in-out"
            onClick={(e) => e.stopPropagation()}
          >
            HAKKIMIZDA
          </a>
          <a
            href="#"
            className="mb-4 px-4 py-2 rounded-full text-center hover:bg-[#275d9b] hover:text-white transition-all duration-300 ease-in-out"
            onClick={(e) => e.stopPropagation()}
          >
            HİZMETLERİMİZ
          </a>
          <a
            href="#"
            className="mb-4 px-4 py-2 rounded-full text-center hover:bg-[#275d9b] hover:text-white transition-all duration-300 ease-in-out"
            onClick={(e) => e.stopPropagation()}
          >
            İK
          </a>
          <a
            href="#"
            className="mb-4 px-4 py-2 rounded-full text-center hover:bg-[#275d9b] hover:text-white transition-all duration-300 ease-in-out"
            onClick={(e) => e.stopPropagation()}
          >
            İLETİŞİM
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
