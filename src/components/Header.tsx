import React, { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import LanguageSelector from "./LanguageSelector";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#134069] text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-between">
        {/* Hamburger Icon and Logo for small screens */}
        <div className="md:hidden flex items-center justify-between w-full">
          <HamburgerMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
          <Logo className="flex items-center mx-auto md:hidden" />
          <LanguageSelector />
        </div>

        {/* Logo for large screens */}
        <Logo className="hidden md:flex items-center mb-4 md:mb-0" />

        {/* Menu */}
        <NavLinks isMenuOpen={isMenuOpen} />

        {/* Language Selector (Desktop) */}
        <div className={`hidden md:block mt-4 md:mt-0`}>
          <LanguageSelector />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className={`fixed inset-0 bg-[#134069] text-white flex flex-col items-center justify-center transition-all duration-300 ease-in-out z-20`}
          onClick={toggleMenu}
        >
          <NavLinks isMenuOpen={isMenuOpen} />
        </div>
      )}
    </header>
  );
};

export default Header;
