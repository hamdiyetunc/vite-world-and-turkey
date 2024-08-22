import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { content, Language } from "./content";

const PartnersSection: React.FC = () => {
  const { language } = useLanguage();
  const { health, education, realty } = content.partners[language as Language];

  return (
    <div className="bg-[#acbefa] mt-14">
      <div className="p-4">
        <h2 className="text-gray-600 text-2xl md:text-3xl font-semibold mb-4 text-center">
          {content.partners[language as Language].title}
        </h2>
        <hr className="text-2xl md:text-3xl font-semibold mb-4 text-center" />
      </div>
      <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6 px-4 md:px-0">
        <div className="flex flex-col items-center">
          <img
            src="../src/assets/wt_health.jpg"
            alt="Sağlık"
            className="w-full max-w-[300px] sm:max-w-[450px] md:max-w-[550px] h-[200px] sm:h-[250px] md:h-[300px] object-cover mb-2"
          />
          <a
            href="/health"
            className="text-gray-600 mb-4 hover:underline text-lg"
          >
            {health}
          </a>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="../src/assets/wt_education.jpg"
            alt="Eğitim"
            className="w-full max-w-[300px] sm:max-w-[450px] md:max-w-[550px] h-[200px] sm:h-[250px] md:h-[300px] object-cover mb-2"
          />
          <a
            href="/education"
            className="text-gray-600 mb-4 hover:underline text-lg"
          >
            {education}
          </a>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="../src/assets/wt_realty.jpg"
            alt="İnşaat"
            className="w-full max-w-[300px] sm:max-w-[450px] md:max-w-[550px] h-[200px] sm:h-[250px] md:h-[300px] object-cover mb-2"
          />
          <a
            href="/realty"
            className="text-gray-600 mb-4 hover:underline text-lg"
          >
            {realty}
          </a>
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;
