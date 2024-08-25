import React from "react";

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  direction: "next" | "prev";
}

const SliderArrow: React.FC<ArrowProps> = ({ className, style, onClick, direction }) => {
  const positionClass = direction === "next" ? "right-2" : "left-2 z-10";
  return (
    <div
      className={`${className} ${positionClass}`}
      style={{
        ...style,
        display: "block",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
};

export default SliderArrow;
