import React from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { notfound } from "../contents/notfound";
import { Language } from "../contents/types";

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-9xl text-gray-800 font-bold">404</h1>
      <h2 className="text-2xl font-medium text-gray-600 mt-4">
        {notfound[language as Language].title}
      </h2>
      <button
        onClick={handleGoHome}
        className="mt-6 px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
      >
        {notfound[language as Language].button}
      </button>
    </div>
  );
};

export default NotFound;
