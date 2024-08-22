import React, { useState, useRef } from "react";
import trFlag from "../assets/tr.png";
import usFlag from "../assets/us.png";
import saFlag from "../assets/sa.png";
import ruFlag from "../assets/ru.png";

const LanguageSelector: React.FC = () => {
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsLangMenuOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsLangMenuOpen(false);
    }, 200);
  };

  return (
    <div
      className="relative z-10"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="flex items-center px-4 py-2 mt-4 md:mt-0 rounded border">
        Diller
        <svg
          className={`w-5 h-5 ml-2 transition-transform ${
            isLangMenuOpen ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isLangMenuOpen && (
        <div className="absolute right-0 mt-2 top-full bg-[#275d9b] rounded-lg shadow-lg w-48">
          <div className="flex items-center px-4 py-2 hover:bg-[#134069]">
            <img src={trFlag} alt="Türkçe" className="w-5 h-5 mr-2" />
            Türkçe
          </div>
          <div className="flex items-center px-4 py-2 hover:bg-[#134069] cursor-pointer">
            <img src={usFlag} alt="İngilizce" className="w-5 h-5 mr-2" />
            İngilizce
          </div>
          <div className="flex items-center px-4 py-2 hover:bg-[#134069] cursor-pointer">
            <img src={saFlag} alt="Arapça" className="w-5 h-5 mr-2" />
            Arapça
          </div>
          <div className="flex items-center px-4 py-2 hover:bg-[#134069] cursor-pointer">
            <img src={ruFlag} alt="Rusça" className="w-5 h-5 mr-2" />
            Rusça
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
