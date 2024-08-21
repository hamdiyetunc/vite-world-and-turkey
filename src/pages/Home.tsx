import React from "react";
import SliderComponent from "../components/SliderComponent";
import AboutUsSection from "../components/AboutUsSection";
import PartnersSection from "../components/PartnersSection";

const Home: React.FC = () => {
  return (
    <main className="bg-gray-100 min-h-screen">
      <SliderComponent />
      <div className="text-center">
        <div className="mb-14 mt-6">
          <h2 className="text-2xl sm:text-3xl text-[#134069] font-semibold mb-1">
            World and Turkey
          </h2>
          <p className="text-lg">Ayrıcalıklar Dünyasına Hoş Geldiniz.</p>
        </div>
        <AboutUsSection />
        <PartnersSection />
      </div>
    </main>
  );
};

export default Home;
