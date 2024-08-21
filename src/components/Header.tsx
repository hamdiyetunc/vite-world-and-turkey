import React from "react";
import LanguageSelector from "./LanguageSelector";

const Header: React.FC = () => {
  return (
    <header className="bg-[#134069] text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Logo */}
        <div className="flex items-center mb-4 md:mb-0">
          <img
            src="../src/assets/world-and-turkey-health-logo.png"
            alt="Logo"
            className="h-16"
          />
        </div>

        {/* Menu */}
        <nav className="flex flex-col md:flex-row items-center text-center md:text-left">
          <a
            href="#"
            className="mb-2 md:mb-0 md:mr-4 px-4 py-2 rounded-full text-center hover:bg-[#275d9b] hover:text-white transition-all duration-300 ease-in-out"
          >
            ANA SAYFA
          </a>

          <a
            href="#"
            className="mb-2 md:mb-0 md:mr-4 px-4 py-2 rounded-full text-center hover:bg-[#275d9b] hover:text-white transition-all duration-300 ease-in-out"
          >
            HAKKIMIZDA
          </a>
          <a
            href="#"
            className="mb-2 md:mb-0 md:mr-4 px-4 py-2 rounded-full text-center hover:bg-[#275d9b] hover:text-white transition-all duration-300 ease-in-out"
          >
            HİZMETLERİMİZ
          </a>
          <a
            href="#"
            className="mb-2 md:mb-0 md:mr-4 px-4 py-2 rounded-full text-center hover:bg-[#275d9b] hover:text-white transition-all duration-300 ease-in-out"
          >
            İK
          </a>
          <a
            href="#"
            className="mb-2 md:mb-0 md:mr-4 px-4 py-2 rounded-full text-center hover:bg-[#275d9b] hover:text-white transition-all duration-300 ease-in-out"
          >
            İLETİŞİM
          </a>
        </nav>

        {/* Language Selector */}
        <div className="mt-4 md:mt-0">
          <LanguageSelector />
        </div>
      </div>
    </header>
  );
};

export default Header;
