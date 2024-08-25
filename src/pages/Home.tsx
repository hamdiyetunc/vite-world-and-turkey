import React from "react";
import SliderSection from "../components/home_contents/SliderSection";
import AboutUsSection from "../components/home_contents/AboutUsSection";
import AffiliatesSection from "../components/home_contents/AffiliatesSection";
import { useLanguage } from "../context/LanguageContext";
import { homeContent, Language } from "../contents/home";

const Home: React.FC = () => {
  const { language } = useLanguage();
  const { title, subtitle } = homeContent.home[language as Language];

  return (
    <main className="bg-gray-100 min-h-screen">
      <SliderSection />
      <div className="text-center">
        <div className="mb-14 mt-6">
          <h2 className="text-2xl sm:text-3xl text-[#134069] font-semibold mb-1">
            {title}
          </h2>
          <p className="text-lg">{subtitle}</p>
        </div>
        <AboutUsSection />
        <AffiliatesSection />
      </div>
    </main>
  );
};

export default Home;
