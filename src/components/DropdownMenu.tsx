import React, { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

interface DropdownMenuProps {
  label: string;
  links: { to: string; label: string }[];
  onLinkClick: () => void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  label,
  links,
  onLinkClick,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();
  const { language } = useLanguage();
  const isRtl = language === "ar";

  const handleDropdownMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsDropdownOpen(true);
  };

  const handleDropdownMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200);
  };

  return (
    <div
      className={`relative ${isRtl ? "text-right" : "text-left"}`}
      onMouseEnter={handleDropdownMouseEnter}
      onMouseLeave={handleDropdownMouseLeave}
    >
      <button
        className={`mb-4 md:mb-0 md:mr-4 px-4 py-2 rounded-full text-center hover:bg-[#275d9b] hover:text-white transition-all duration-300 ease-in-out ${
          isRtl ? "ml-auto" : "mr-auto"
        }`}
      >
        {label}
      </button>
      {isDropdownOpen && (
        <div
          className={`absolute bg-[#275d9b] top-full ${
            isRtl ? "right-0" : "left-0"
          } rounded-lg shadow-lg mt-2 w-48 z-10`}
        >
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              onClick={onLinkClick}
              className={`block px-4 py-2 transition-all duration-300 ease-in-out ${
                isRtl ? "text-right" : "text-left"
              } ${
                location.pathname === link.to
                  ? "bg-[#134069] text-white"
                  : "hover:bg-[#134069]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
