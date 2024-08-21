import React from "react";
import Slider from "react-slick";
import Arrow from "./Arrow";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderComponent: React.FC = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <Arrow direction="next" />,
    prevArrow: <Arrow direction="prev" />,
  };

  return (
    <Slider {...settings}>
      <div className="relative">
        <img
          src="../src/assets/slider-2-min.jpg"
          alt="Slider 1"
          className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-white text-shadow-lg text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-left">
            Welcome to the
            <br />
            World of Privileges
          </h1>
          <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-light mt-2">
            You will feel like you are at home.
          </h3>
        </div>
      </div>
      <div className="relative">
        <img
          src="../src/assets/wat-slider-001.jpg"
          alt="Slider 2"
          className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
        />
      </div>
    </Slider>
  );
};

export default SliderComponent;
