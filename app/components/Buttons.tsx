import React from "react";

interface ButtonProps {
  text: string;
  textColor?: string;
  bgColor?: string;
  hoverBgColor?: string;
  borderColor?: string;
  shadowColor?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  text,
  textColor = "text-green-900",
  bgColor = "bg-white",
  hoverBgColor = "hover:bg-green-100",
  borderColor = "border-green-900",
  shadowColor = "shadow-[6px_6px_0px_0px_#454545]",
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2 border-2 rounded-lg font-bold ${textColor} ${bgColor} ${hoverBgColor} ${borderColor} ${shadowColor} transition duration-300`}
    >
      {text}
    </button>
  );
};

export default Button;
