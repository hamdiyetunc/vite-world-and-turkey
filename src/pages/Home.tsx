import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} right-2`}
      style={{
        ...style,
        display: "block",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} left-2 z-50 text-red-900`}
      style={{
        ...style,
        display: "block",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
};

const Home: React.FC = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <main className="bg-gray-100 min-h-screen">
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

      <div className="text-center">
        <div className="mb-14 mt-6">
          <h2 className="text-2xl sm:text-3xl text-[#134069] font-semibold mb-1">
            World and Turkey
          </h2>
          <p className="text-lg">Ayrıcalıklar Dünyasına Hoş Geldiniz.</p>
        </div>
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-32 px-4 md:px-0">
          <img
            src="../src/assets/about-us.jpg"
            alt="About Us"
            className="w-full max-w-full md:max-w-[600px] h-auto object-cover"
          />
          <div className="flex flex-col items-center md:items-start max-w-xl text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              BİZ KİMİZ? NE YAPARIZ?
            </h2>
            <p className="text-md md:text-xl mb-6">
              Bünyemizde çalışan profesyonel, dinamik ve güçlü bir ekiple;
              ‘Eğitim‘, ‘Sağlık‘ ve ‘Yatırım Danışmanlığı‘ alanlarında, müşteri
              memnuniyetini ve kaliteli hizmet anlayışını her şeyden önde
              tutarak, bu ilke doğrultusunda ihtiyaçlarınızın tümüne en hızlı ve
              en uygun şekilde cevap verebilmek için gerekli tüm çalışmaları
              yapmaya her gün, her saat devam etmekteyiz.
            </p>
            <button className="bg-[#134069] text-white py-2 px-4 rounded hover:bg-[#275d9b]">
              Devamını Oku
            </button>
          </div>
        </div>

        <div className="bg-[#acbefa] mt-14">
          <div className="p-4">
            <h2 className="text-gray-600 text-2xl md:text-3xl font-semibold mb-4 text-center">
              İştiraklerimiz
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
                Sağlık
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
                Eğitim
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
                Gayrimenkul
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
