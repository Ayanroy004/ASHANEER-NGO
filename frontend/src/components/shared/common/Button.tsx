import React, { type ButtonHTMLAttributes } from "react";


export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  data: {
    text: string;
    css?: string;
  };
}
const Button: React.FC<ButtonProps> = ({ data, ...props }: ButtonProps) => {
  return (
    <button className={`${data.css}`} {...props}>
      {data.text}
    </button>
  );
};

export default Button;
