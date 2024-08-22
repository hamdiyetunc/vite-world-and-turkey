import React, { useState, useRef, useEffect } from "react";
import HamburgerMenu from "./HamburgerMenu";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import LanguageSelector from "./LanguageSelector";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

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
        <NavLinks
          isMenuOpen={isMenuOpen}
          onLinkClick={() => setIsMenuOpen(false)}
        />

        {/* Language Selector (Desktop) */}
        <div className="hidden md:block mt-4 md:mt-0">
          <LanguageSelector />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="fixed inset-0 bg-[#134069] text-white flex flex-col items-center justify-center z-20"
        >
          <div className="absolute text-white top-9 left-6 z-50">
            <HamburgerMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
          </div>
          <NavLinks
            isMenuOpen={isMenuOpen}
            onLinkClick={() => setIsMenuOpen(false)}
          />
        </div>
      )}
    </header>
  );
};

export default Header;
