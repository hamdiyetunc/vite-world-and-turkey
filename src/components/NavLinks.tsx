import React, { useContext } from "react";
import LinkButton from "./LinkButton";
import DropdownMenu from "./DropdownMenu";
import { LanguageContext } from "../context/LanguageContext";
import { content } from "./content";

interface NavLinksProps {
  isMenuOpen: boolean;
  onLinkClick: () => void;
}

const NavLinks: React.FC<NavLinksProps> = ({ isMenuOpen, onLinkClick }) => {
  // Dil bağlamını al
  const { language } = useContext(LanguageContext);

  // Çeviri içeriğini seç
  const navContent = content.header[language];

  return (
    <nav
      className={`${
        isMenuOpen
          ? "flex flex-col items-center"
          : "hidden md:flex md:flex-row md:items-center md:text-left"
      } ${
        isMenuOpen
          ? "absolute inset-0 bg-[#134069] flex flex-col items-center justify-center"
          : "md:static"
      }`}
    >
      <LinkButton to="/" label={navContent.home} onClick={onLinkClick} />
      <LinkButton to="/aboutus" label={navContent.aboutUs} onClick={onLinkClick} />
      <LinkButton to="/contact" label={navContent.contact} onClick={onLinkClick} />
      
      <DropdownMenu
        label={navContent.services}
        links={[
          { to: "/health", label: content.partners[language].health },
          { to: "/education", label: content.partners[language].education },
          { to: "/realestate", label: content.partners[language].realty },
        ]}
        onLinkClick={onLinkClick}
      />
    </nav>
  );
};

export default NavLinks;
