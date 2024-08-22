import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { content, Language } from "../components/content";

const AboutUs: React.FC = () => {
  const { language } = useLanguage();
  const { title, text } = content.aboutUs[language as Language];

  return (
    <section className="bg-white mt-10 py-8 px-4 md:px-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start md:justify-between">
        {/* Text Section */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-[#134069] text-2xl md:text-3xl font-semibold mb-4">
            {title}
          </h2>
          <p className="text-md md:text-xl">{text}</p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="../src/assets/about-us.jpg"
            alt="About Us"
            className="w-full max-w-full md:max-w-[600px] h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
