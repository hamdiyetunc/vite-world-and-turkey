import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { footer } from "../contents/footer";
import { Language } from "../contents/types";

const Footer: React.FC = () => {
  const { language } = useContext(LanguageContext);

  // Check if the language is a valid key in the content.footer
  const footerText = footer[language as Language]?.text || "Default text";

  return (
    <footer className="bg-[#134069] text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} {footerText}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
