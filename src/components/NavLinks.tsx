import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface NavLinksProps {
  isMenuOpen: boolean;
}

const NavLinks: React.FC<NavLinksProps> = ({ isMenuOpen }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

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
      {["ANA SAYFA", "HAKKIMIZDA", "İLETİŞİM"].map((link, index) => (
        <Link
          key={index}
          to={
            link === "ANA SAYFA"
              ? "/"
              : link === "HAKKIMIZDA"
              ? "/aboutus"
              : link === "İLETİŞİM"
              ? "/contact"
              : "#"
          }
          className={`mb-4 md:mb-0 md:mr-4 px-4 py-2 rounded-full text-center transition-all duration-300 ease-in-out ${
            location.pathname ===
            (link === "ANA SAYFA"
              ? "/"
              : link === "HAKKIMIZDA"
              ? "/aboutus"
              : link === "İLETİŞİM"
              ? "/contact"
              : "#")
              ? "bg-[#275d9b] text-white"
              : "hover:bg-[#275d9b] hover:text-white"
          }`}
        >
          {link}
        </Link>
      ))}

      {/* OurServices Dropdown */}
      <div
        className="relative"
        onMouseEnter={() => setIsDropdownOpen(true)}
        onMouseLeave={() => setIsDropdownOpen(false)}
      >
        <button className="mb-4 md:mb-0 md:mr-4 px-4 py-2 rounded-full text-center hover:bg-[#275d9b] hover:text-white transition-all duration-300 ease-in-out">
          HİZMETLERİMİZ
        </button>
        {isDropdownOpen && (
          <div className="absolute bg-[#275d9b] top-full left-0 rounded-lg shadow-lg mt-2 w-48 z-50">
            <Link
              to="/health"
              className={`block px-4 py-2 transition-all duration-300 ease-in-out ${
                location.pathname === "/health"
                  ? "bg-[#134069] text-white"
                  : "hover:bg-[#134069]"
              }`}
            >
              Sağlık
            </Link>
            <Link
              to="/education"
              className={`block px-4 py-2 transition-all duration-300 ease-in-out ${
                location.pathname === "/education"
                  ? "bg-[#134069] text-white"
                  : "hover:bg-[#134069]"
              }`}
            >
              Eğitim
            </Link>
            <Link
              to="/realestate"
              className={`block px-4 py-2 transition-all duration-300 ease-in-out ${
                location.pathname === "/realestate"
                  ? "bg-[#134069] text-white"
                  : "hover:bg-[#134069]"
              }`}
            >
              Gayrimenkul
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavLinks;
