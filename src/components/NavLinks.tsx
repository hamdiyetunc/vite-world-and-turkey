import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import LinkButton from "./LinkButton";
import DropdownMenu from "./DropdownMenu";
import { LanguageContext } from "../context/LanguageContext";
import { content } from "./content";

interface NavLinksProps {
  isMenuOpen: boolean;
  onLinkClick: () => void;
}

const NavLinks: React.FC<NavLinksProps> = ({ isMenuOpen, onLinkClick }) => {
  // Get language context
  const { language } = useContext(LanguageContext);
  const location = useLocation(); // Get current URL location

  // Select translation content
  const navContent = content.header[language];

  // Function to add language parameter to URL
  const addLangParam = (url: string) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("lang", language);
    return `${url}?${searchParams.toString()}`;
  };

  // Determine if the current path matches the link
  const isActive = (path: string) => location.pathname === path;

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
      <LinkButton
        to={addLangParam("/")}
        label={navContent.home}
        onClick={onLinkClick}
        isActive={isActive("/")}
      />

      <DropdownMenu
        label={navContent.services}
        links={[
          { to: addLangParam("/health"), label: content.partners[language].health },
          { to: "https://www.edutema.com/", label: content.partners[language].education },
          { to: addLangParam("/realestate"), label: content.partners[language].realty },
        ]}
        onLinkClick={onLinkClick}
      />
      <LinkButton
        to={addLangParam("/aboutus")}
        label={navContent.aboutUs}
        onClick={onLinkClick}
        isActive={isActive("/aboutus")}
      />

      <LinkButton
        to={addLangParam("/contact")}
        label={navContent.contact}
        onClick={onLinkClick}
        isActive={isActive("/contact")}
      />
    </nav>
  );
};

export default NavLinks;
