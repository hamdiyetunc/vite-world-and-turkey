import React, { useState, useRef } from "react";
import { useLanguage } from "../../context/LanguageContext";
import trFlag from "../../assets/tr.png";
import enFlag from "../../assets/en.png";
import arFlag from "../../assets/ar.png";
import ruFlag from "../../assets/ru.png";
import frFlag from "../../assets/fr.png";
import { Language } from "../../contents/types";

const LanguageSelector: React.FC = () => {
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const { setLanguage, language } = useLanguage();
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

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    setIsLangMenuOpen(false);
  };

  return (
    <div
      className="relative z-10"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="flex items-center px-4 py-2 mt-4 md:mt-0 rounded border">
        {language === "tr" && (
          <div className="flex items-center">
            <img src={trFlag} alt="Türkçe" className="w-5 h-5" />
            <span className="ml-2">TR</span>
          </div>
        )}
        {language === "en" && (
          <div className="flex items-center">
            <img src={enFlag} alt="English" className="w-5 h-5" />
            <span className="ml-2">EN</span>
          </div>
        )}
        {language === "ar" && (
          <div className="flex items-center">
            <img src={arFlag} alt="العربية" className="w-5 h-5" />
            <span className="ml-2">AR</span>
          </div>
        )}
        {language === "ru" && (
          <div className="flex items-center">
            <img src={ruFlag} alt="Русский" className="w-5 h-5" />
            <span className="ml-2">RU</span>
          </div>
        )}
        {language === "fr" && (
          <div className="flex items-center">
            <img src={frFlag} alt="Français" className="w-5 h-5" />
            <span className="ml-2">FR</span>
          </div>
        )}
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
          <div
            className="flex items-center px-4 py-2 hover:bg-[#134069] cursor-pointer"
            onClick={() => changeLanguage("tr")}
          >
            <img src={trFlag} alt="Türkçe" className="w-5 h-5 mr-2" />
            Türkçe
          </div>
          <div
            className="flex items-center px-4 py-2 hover:bg-[#134069] cursor-pointer"
            onClick={() => changeLanguage("en")}
          >
            <img src={enFlag} alt="İngilizce" className="w-5 h-5 mr-2" />
            English
          </div>
          <div
            className="flex items-center px-4 py-2 hover:bg-[#134069] cursor-pointer"
            onClick={() => changeLanguage("ar")}
          >
            <img src={arFlag} alt="Arapça" className="w-5 h-5 mr-2" />
            العربية
          </div>
          <div
            className="flex items-center px-4 py-2 hover:bg-[#134069] cursor-pointer"
            onClick={() => changeLanguage("ru")}
          >
            <img src={ruFlag} alt="Rusça" className="w-5 h-5 mr-2" />
            Русский
          </div>
          <div
            className="flex items-center px-4 py-2 hover:bg-[#134069] cursor-pointer"
            onClick={() => changeLanguage("fr")}
          >
            <img src={frFlag} alt="Fransızca" className="w-5 h-5 mr-2" />
            Français
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
