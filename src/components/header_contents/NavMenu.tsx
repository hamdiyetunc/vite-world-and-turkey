import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import NavMenuButton from "./NavMenuButton";
import DropdownMenu from "./DropdownMenu";
import { LanguageContext } from "../../context/LanguageContext";
import { homeContent } from "../../contents/home";
import { header } from "../../contents/header";

interface NavMenuProps {
  isMenuOpen: boolean;
  onLinkClick: () => void;
}

const NavMenu: React.FC<NavMenuProps> = ({ isMenuOpen, onLinkClick }) => {
  const { language } = useContext(LanguageContext);
  const location = useLocation(); // Get current URL location
  const navContent = header[language];

  // Determine if the current path matches the link
  const isActive = (path: string) => location.pathname === path;

  // Function to get the URL with language prefix
  const getLocalizedUrl = (path: string) => {
    const pathWithoutLang = path.replace(/^\/(tr|en|ar|ru|fr)/, "");
    return `/${language}${pathWithoutLang}`;
  };

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
      <NavMenuButton
        to={getLocalizedUrl("/")}
        label={navContent.home}
        onClick={onLinkClick}
        isActive={isActive(getLocalizedUrl("/"))}
        textTransform="uppercase"
      />

      {isMenuOpen ? (
        <div className="flex flex-col items-center">
          <NavMenuButton
            to={getLocalizedUrl("/health")}
            label={homeContent.partners[language].health}
            onClick={onLinkClick}
            textTransform="uppercase"
          />
          <NavMenuButton
            to="https://www.edutema.com/"
            label={homeContent.partners[language].education}
            onClick={onLinkClick}
            textTransform="uppercase"
          />
          <NavMenuButton
            to={getLocalizedUrl("/realestate")}
            label={homeContent.partners[language].realty}
            onClick={onLinkClick}
            textTransform="uppercase"
          />
        </div>
      ) : (
        <DropdownMenu
          label={navContent.services}
          links={[
            {
              to: getLocalizedUrl("/health"),
              label: homeContent.partners[language].health,
            },
            {
              to: "https://www.edutema.com/",
              label: homeContent.partners[language].education,
            },
            {
              to: getLocalizedUrl("/realestate"),
              label: homeContent.partners[language].realty,
            },
          ]}
          onLinkClick={onLinkClick}
        />
      )}

      <NavMenuButton
        to={getLocalizedUrl("/aboutus")}
        label={navContent.aboutUs}
        onClick={onLinkClick}
        isActive={isActive(getLocalizedUrl("/aboutus"))}
        textTransform="uppercase"
      />

      <NavMenuButton
        to={getLocalizedUrl("/contact")}
        label={navContent.contact}
        onClick={onLinkClick}
        isActive={isActive(getLocalizedUrl("/contact"))}
        textTransform="uppercase"
      />
    </nav>
  );
};

export default NavMenu;
