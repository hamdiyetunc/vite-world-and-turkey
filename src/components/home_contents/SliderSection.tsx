import React from "react";
import Slider from "react-slick";
import SliderArrow from "./SliderArrow";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { homeContent, Language } from "../../contents/home";
import { useLanguage } from "../../context/LanguageContext";

const SliderSection: React.FC = () => {
  const { language } = useLanguage();
  const textAlignClass = "text-left";

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SliderArrow direction="next" />,
    prevArrow: <SliderArrow direction="prev" />,
  };

  return (
    <Slider {...settings}>
      <div className="relative z-10">
        <img
          src="/assets/slider-2.jpg"
          alt="Slider 1"
          className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
        />
        <div
          className={`absolute inset-0 flex flex-col ${textAlignClass} justify-center text-center`}
        >
          <h1 className="text-white text-shadow-lg text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            {homeContent.slider[language as Language].title}
            <br />
            {homeContent.slider[language as Language].subtitle}
          </h1>
          <h3 className="text-white text-shadow-lg text-2xl sm:text-3xl md:text-4xl font-light mt-2">
            {homeContent.slider[language as Language].description}
          </h3>
        </div>
      </div>
      <div className="relative">
        <img
          src="/assets/slider-1.jpg"
          alt="Slider 2"
          className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center text-center sm:items-start sm:text-left ml-2 sm:ml-4 md:ml-6 lg:ml-8">
          <h1 className="text-white text-shadow-lg text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            {homeContent.slider[language as Language].title}
            <br />
            {homeContent.slider[language as Language].subtitle}
          </h1>
          <h3 className="text-white text-shadow-lg text-2xl sm:text-3xl md:text-4xl font-light mt-2">
            {homeContent.slider[language as Language].description}
          </h3>
        </div>
      </div>
    </Slider>
  );
};

export default SliderSection;
