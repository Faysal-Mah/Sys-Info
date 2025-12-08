import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'white';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', className = '', children, ...props }) => {
  const baseStyle = "px-6 py-3 rounded-md font-semibold transition-all duration-300 transform hover:-translate-y-0.5 shadow-md flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-red-700 hover:bg-red-800 text-white shadow-red-700/30",
    outline: "border-2 border-red-700 text-red-700 hover:bg-red-50",
    white: "bg-white text-red-700 hover:bg-gray-100 shadow-white/30"
  };

  return (
    <button 
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};