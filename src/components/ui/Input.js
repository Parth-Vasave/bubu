import React from 'react';

const Input = ({ 
  label, 
  type = 'text', 
  placeholder, 
  value, 
  onChange, 
  required = false,
  className = '',
  rows = 4
}) => {
  const baseClasses = "w-full p-4 border-2 border-pink-200 rounded-2xl bg-pink-50/80 font-quicksand text-base focus:outline-none focus:border-pink-cute focus:shadow-lg focus:shadow-pink-cute/30 focus:scale-[1.02] transition-all duration-300";

  return (
    <div className="space-y-3">
      {label && (
        <label className="block text-lg font-semibold text-pink-cute">
          {label}
        </label>
      )}
      {type === 'textarea' ? (
        <textarea
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          rows={rows}
          className={`${baseClasses} resize-y min-h-[100px] ${className}`}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={`${baseClasses} ${className}`}
        />
      )}
    </div>
  );
};

export default Input;