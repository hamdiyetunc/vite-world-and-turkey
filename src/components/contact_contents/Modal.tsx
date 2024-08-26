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
      <div className="bg-white p-8 rounded-md shadow-lg max-w-lg w-full flex flex-col items-center">
        <p className="text-center text-lg mb-4">{modalMessage}</p>
        <button
          onClick={onClose}
          className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600"
        >
          {closeButtonLabel}
        </button>
      </div>
    </div>
  );
};

export default Modal;
