import React from "react";

const AboutUsSection: React.FC = () => {
  return (
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
          Bünyemizde çalışan profesyonel, dinamik ve güçlü bir ekiple; ‘Eğitim‘,
          ‘Sağlık‘ ve ‘Yatırım Danışmanlığı‘ alanlarında, müşteri memnuniyetini
          ve kaliteli hizmet anlayışını her şeyden önde tutarak, bu ilke
          doğrultusunda ihtiyaçlarınızın tümüne en hızlı ve en uygun şekilde
          cevap verebilmek için gerekli tüm çalışmaları yapmaya her gün, her
          saat devam etmekteyiz.
        </p>
        <button className="bg-[#134069] text-white py-2 px-4 rounded hover:bg-[#275d9b]">
          Devamını Oku
        </button>
      </div>
    </div>
  );
};

export default AboutUsSection;
