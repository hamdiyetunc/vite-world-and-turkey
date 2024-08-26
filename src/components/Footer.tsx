import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { footer } from "../contents/footer";
import { Language } from "../contents/types";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const footerText = footer[language as Language]?.text || "Default text";

  const socialMediaLinks = [
    { href: "https://www.facebook.com/people/World-and-Turkey/100068080773194/", icon: <FaFacebook />, label: "Facebook" },
    { href: "https://x.com/WorldAndTurkey", icon: <FaTwitter />, label: "Twitter" },
    { href: "https://www.instagram.com/world.and.turkey/", icon: <FaInstagram />, label: "Instagram" },
    { href: "https://www.youtube.com/channel/UCa5PQCjeFgCZKjnuX7xF1zQ", icon: <FaYoutube />, label: "YouTube" },
  ];

  return (
    <footer className="bg-[#134069] text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} {footerText}
        </p>
        <div className="mt-4 flex justify-center space-x-4">
          {socialMediaLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              aria-label={social.label}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
