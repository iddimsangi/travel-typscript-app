import {   ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClickHandler: () => void;
  bgColor?: string;
}
function Button({ children, onClickHandler, bgColor }: ButtonProps) {
  return (
    <button
      onClick={onClickHandler}
      className={`px-5 py-2 uppercase ${bgColor} rounded-md`}
    >
      {children}
    </button>
  );
}

export default Button;
