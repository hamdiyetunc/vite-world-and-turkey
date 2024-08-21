import React, { useState } from "react";

const LanguageSelector: React.FC = () => {
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsLangMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setIsLangMenuOpen(false);
  };

  return (
    <div
      className="relative z-50"
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
          <a href="#" className="block px-4 py-2 hover:bg-[#134069]">
            Türkçe
          </a>
          <a href="#" className="block px-4 py-2 hover:bg-[#134069]">
            İngilizce
          </a>
          <a href="#" className="block px-4 py-2 hover:bg-[#134069]">
            Arapça
          </a>
          <a href="#" className="block px-4 py-2 hover:bg-[#134069]">
            Rusça
          </a>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
