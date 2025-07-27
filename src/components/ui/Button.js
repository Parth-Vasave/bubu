import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  type = 'button', 
  variant = 'primary', 
  className = '',
  disabled = false 
}) => {
  const baseClasses = "border-none rounded-3xl px-8 py-4 font-quicksand text-lg font-semibold text-white cursor-pointer transition-all duration-300 flex items-center gap-3 justify-center";
  
  const variants = {
    primary: "bg-gradient-to-r from-pink-cute to-pink-deep shadow-lg shadow-pink-cute/40 hover:-translate-y-1 hover:scale-105 hover:shadow-xl hover:shadow-pink-cute/60",
    secondary: "bg-gradient-to-r from-purple-500 to-purple-700 shadow-lg shadow-purple-500/40 hover:-translate-y-1 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/60"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variants[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className} active:scale-95`}
    >
      {children}
    </button>
  );
};

export default Button;