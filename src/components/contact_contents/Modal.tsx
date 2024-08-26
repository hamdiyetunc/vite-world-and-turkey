import React from "react";
import { contactContent } from "../../contents/contact";
import { Language } from "../../contents/types";

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  language: Language;
}

const Modal: React.FC<ModalProps> = ({ isVisible, onClose, language }) => {
  if (!isVisible) return null;

  const modalMessage = contactContent.modalmessage.message[language].message;
  const closeButtonLabel = contactContent.modalbtn.btn[language].btn;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-4 md:p-8 rounded-md shadow-lg max-w-sm w-full sm:max-w-md md:max-w-lg flex flex-col items-center mx-4">
        <p className="text-center text-base md:text-lg mb-4">{modalMessage}</p>
        <button
          onClick={onClose}
          className="bg-blue-500 text-white py-2 px-4 md:px-6 rounded-md hover:bg-blue-600"
        >
          {closeButtonLabel}
        </button>
      </div>
    </div>
  );
};

export default Modal;
