import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { content, Language } from "../components/content";

const Contact: React.FC = () => {
  const { language } = useLanguage();
  const isRtl = language === "ar"; // RTL control

  return (
    <section className="mt-10 py-8 px-4 md:px-8">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
          {content.contact[language as Language].title}
        </h2>
        <div
          className={`bg-white text-gray-800 p-6 rounded-lg shadow-lg ${
            isRtl ? "text-right" : ""
          }`}
        >
          <h3 className="text-xl font-semibold mb-4">
            {content.contact[language as Language].subtitle}
          </h3>
          <form
            action="#"
            method="POST"
            className={`flex flex-col space-y-4 ${
              isRtl ? "items-end" : "items-start"
            }`}
          >
            <label htmlFor="name" className="flex flex-col w-full">
              <span className="text-gray-600">
                {content.contact[language as Language].nameLabel}
              </span>
              <input
                type="text"
                id="name"
                name="name"
                className={`mt-1 p-2 border border-gray-300 rounded-md ${
                  isRtl ? "text-right" : "text-left"
                }`}
                required
              />
            </label>
            <label htmlFor="email" className="flex flex-col w-full">
              <span className="text-gray-600">
                {content.contact[language as Language].emailLabel}
              </span>
              <input
                type="email"
                id="email"
                name="email"
                className={`mt-1 p-2 border border-gray-300 rounded-md ${
                  isRtl ? "text-right" : "text-left"
                }`}
                required
              />
            </label>
            <label htmlFor="message" className="flex flex-col w-full">
              <span className="text-gray-600">
                {content.contact[language as Language].messageLabel}
              </span>
              <textarea
                id="message"
                name="message"
                rows={4}
                className={`mt-1 p-2 border border-gray-300 rounded-md ${
                  isRtl ? "text-right" : "text-left"
                }`}
                required
              ></textarea>
            </label>
            <button
              type="submit"
              className={`bg-[#134069] text-white py-2 px-4 rounded-md hover:bg-[#0d2b43] transition-colors ${
                isRtl ? "self-end" : "self-start"
              }`}
            >
              {content.contact[language as Language].submitButton}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
