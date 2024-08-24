import React from "react";
import { Link } from "react-router-dom";

interface LinkButtonProps {
  to?: string;
  label: string;
  onClick: () => void;
  isActive?: boolean;
  className?: string;
  textTransform?: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ to, label, onClick, isActive, className, textTransform }) => {
  // Define the classes with conditional active styling
  const classes = `mb-4 md:mb-0 md:mr-4 px-4 py-2 rounded-full text-center transition-all duration-300 ease-in-out ${
    isActive
      ? "bg-[#275d9b] text-white"
      : "hover:bg-[#275d9b] hover:text-white"
  } ${textTransform ? `uppercase ${textTransform}` : ""} ${className ? className : ""}`;

  return to ? (
    <Link to={to} onClick={onClick} className={classes}>
      {label}
    </Link>
  ) : (
    <button onClick={onClick} className={classes}>
      {label}
    </button>
  );
};

export default LinkButton;
