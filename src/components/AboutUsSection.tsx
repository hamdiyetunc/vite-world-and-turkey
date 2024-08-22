import React from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { content, Language } from "./content";

const AboutUsSection: React.FC = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const handleClick = () => {
    navigate("/aboutus");
  };

  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-32 px-4 md:px-0">
      <img
        src="../src/assets/about-us.jpg"
        alt="About Us"
        className="w-full max-w-full md:max-w-[600px] h-auto object-cover"
      />
      <div className="flex flex-col items-center md:items-start max-w-xl text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          {content.AboutUsSection[language as Language].title}
        </h2>
        <p className="text-md md:text-xl mb-6">
          {content.AboutUsSection[language as Language].text}
        </p>
        <button
          className="bg-[#134069] text-white py-2 px-4 rounded hover:bg-[#275d9b]"
          onClick={handleClick}
        >
          {content.AboutUsSectionBtn[language as Language].title}
        </button>
      </div>
    </div>
  );
};

export default AboutUsSection;
