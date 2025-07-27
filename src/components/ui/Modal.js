import React from 'react';

const Modal = ({ isOpen, onClose, children, className = '' }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/20 backdrop-blur-sm">
      <div className={`bg-white/95 backdrop-blur-lg rounded-3xl p-10 text-center shadow-2xl border-3 border-pink-cute animate-pop-in max-w-md mx-4 ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default Modal;