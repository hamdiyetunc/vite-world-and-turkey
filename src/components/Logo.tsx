import React from "react";
import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => (
  <div className={className}>
    <Link to="/">
      <img
        src="../src/assets/world-and-turkey-health-logo.png"
        alt="Logo"
        className="h-16"
      />
    </Link>
  </div>
);

export default Logo;
