import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";

interface MenuButtonProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({
  isMenuOpen,
  toggleMenu,
}) => (
  <button
    onClick={toggleMenu}
    className={`flex items-center transition-transform duration-300 ease-in-out ${
      isMenuOpen ? "rotate-90" : "rotate-0"
    }`}
  >
    {isMenuOpen ? (
      <FaTimes size={24} />
    ) : (
      <FaBars size={24} className="ml-6" />
    )}
  </button>
);

export default MenuButton;
