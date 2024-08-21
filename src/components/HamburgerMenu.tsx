import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";

interface HamburgerMenuProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  isMenuOpen,
  toggleMenu,
}) => (
  <button onClick={toggleMenu} className="flex items-center">
    {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
  </button>
);

export default HamburgerMenu;
