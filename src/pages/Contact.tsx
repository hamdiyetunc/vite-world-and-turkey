import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useLanguage } from "../context/LanguageContext";
import { contactContent, Language } from "../contents/contact";
import emailjs from "emailjs-com";

const Contact: React.FC = () => {
  const { language } = useLanguage();
  const isRtl = language === "ar";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const data: { [key: string]: string } = {};
    formData.forEach((value, key) => {
      data[key] = value as string;
    });
    
    emailjs
      .send(
        "service_4imu2um",
        "template_6jtg7m6",
        {
          to_name: "World and Turkey Team",
          from_name: data.name,
          name: data.name,
          phone: data.phone,
          email: data.email,
          subject: data.subject,
          message: data.message,
        },
        "DV0wUQo59TIcg4ibc"
      )
      .then(
        function (response) {
          console.log("E-posta başarıyla gönderildi:", response);
        },
        function (error) {
          console.log("E-posta gönderiminde hata oluştu:", error);
        }
      );
  };

  return (
    <section className="mt-10 py-8 px-4 md:px-8">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
          {contactContent.contact[language as Language].title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className={`bg-white text-gray-800 p-6 rounded-lg shadow-lg ${
              isRtl ? "text-right" : ""
            }`}
          >
            <h3 className="text-xl font-semibold mb-4">
              {contactContent.contact[language as Language].subtitle}
            </h3>
            <form
              onSubmit={handleSubmit}
              className={`flex flex-col space-y-4 ${
                isRtl ? "items-end" : "items-start"
              }`}
            >
              <label htmlFor="name" className="flex flex-col w-full">
                <span className="text-gray-600">
                  {contactContent.contact[language as Language].nameLabel}
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
              <label htmlFor="phone" className="flex flex-col w-full">
                <span className="text-gray-600">
                  {contactContent.contact[language as Language].phoneLabel}
                </span>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className={`mt-1 p-2 border border-gray-300 rounded-md ${
                    isRtl ? "text-right" : "text-left"
                  }`}
                  required
                />
              </label>
              <label htmlFor="email" className="flex flex-col w-full">
                <span className="text-gray-600">
                  {contactContent.contact[language as Language].emailLabel}
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
              <label htmlFor="subject" className="flex flex-col w-full">
                <span className="text-gray-600">
                  {contactContent.contact[language as Language].subjectLabel}
                </span>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className={`mt-1 p-2 border border-gray-300 rounded-md ${
                    isRtl ? "text-right" : "text-left"
                  }`}
                  required
                />
              </label>
              <label htmlFor="message" className="flex flex-col w-full">
                <span className="text-gray-600">
                  {contactContent.contact[language as Language].messageLabel}
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
              <ReCAPTCHA sitekey="YOUR_RECAPTCHA_SITE_KEY" className="mb-4" />
              <button
                type="submit"
                className={`bg-[#134069] text-white py-2 px-4 rounded-md hover:bg-[#0d2b43] transition-colors ${
                  isRtl ? "self-end" : "self-start"
                }`}
              >
                {contactContent.contact[language as Language].submitButton}
              </button>
            </form>
          </div>
          <div>
            <iframe
              width="100%"
              height="730"
              src="https://maps.google.com/maps?width=100%25&amp;height=450&amp;hl=en&amp;q=Aziz%20Mahmut%20H%C3%BCdayi,%20%C3%96%C4%9Fd%C3%BCl%20Sk.%20No:42,%2034672%20%C3%9Csk%C3%BCdar/%C4%B0stanbul+(World%20and%20Turkey)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps systems</a>
            </iframe>
            <a
              href="https://maps.app.goo.gl/uEMzfnCWjaKUGMmi9"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 text-blue-500 hover:underline text-center"
            >
              {contactContent.maplink[language as Language].link}
            </a>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          <div
            className={`p-4 bg-white shadow-lg rounded-lg ${
              isRtl ? "text-right" : "text-left"
            }`}
          >
            <h4 className="font-semibold mb-2">
              {contactContent.info[language as Language].address}
            </h4>
            <p>
              Head Office: Aziz Mahmut Hüdayi, Öğdül Sk. No:42, 34672
              Üsküdar/İstanbul
            </p>
          </div>
          <div
            className={`p-4 bg-white shadow-lg rounded-lg ${
              isRtl ? "text-right" : "text-left"
            }`}
          >
            <h4 className="font-semibold mb-2">
              {contactContent.info[language as Language].telephone}
            </h4>
            <p>+90 216 343 51 58</p>
            <p>+90 216 343 51 57</p>
          </div>
          <div
            className={`p-4 bg-white shadow-lg rounded-lg ${
              isRtl ? "text-right" : "text-left"
            }`}
          >
            <h4 className="font-semibold mb-2">
              {contactContent.info[language as Language].email}
            </h4>
            <p>info@worldandturkey.com</p>
            <p>sales@worldandturkey.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
