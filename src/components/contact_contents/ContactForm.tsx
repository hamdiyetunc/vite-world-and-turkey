import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { useLanguage } from "../../context/LanguageContext";
import { contactContent, Language } from "../../contents/contact";
import Modal from "./Modal";
import LoadingSpinner from "./LoadingSpinner";

const ContactForm: React.FC = () => {
  const { language } = useLanguage();
  const isRtl = language === "ar";

  const setStatusMessage = useState<string | null>(null)[1];
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const data: { [key: string]: string } = {};
    formData.forEach((value, key) => {
      data[key] = value as string;
    });

    try {
      const response = await emailjs.send(
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
      );
      console.log("Email sent successfully:", response);
      setStatusMessage("Email sent successfully.");
    } catch (error) {
      console.log("Error sending email:", error);
      setStatusMessage("Error sending email. Please try again.");
    } finally {
      setIsLoading(false);
      setIsModalVisible(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  return (
    <div>
      {isLoading && <LoadingSpinner />}
      <form
        ref={formRef}
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
        <button
          type="submit"
          className={`bg-[#134069] text-white py-2 px-4 rounded-md hover:bg-[#0d2b43] transition-colors ${
            isRtl ? "self-end" : "self-start"
          }`}
        >
          {contactContent.contact[language as Language].submitButton}
        </button>
      </form>
      <Modal
        isVisible={isModalVisible}
        onClose={handleCloseModal}
        language={language}
      />
    </div>
  );
};

export default ContactForm;
