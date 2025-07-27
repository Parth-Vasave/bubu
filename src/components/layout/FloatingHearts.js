import React, { useEffect, useState } from 'react';

const FloatingHearts = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const createHeart = () => {
      const id = Date.now() + Math.random();
      const heart = {
        id,
        emoji: Math.random() > 0.5 ? '💖' : '💕',
        left: Math.random() * 100,
        animationDelay: Math.random() * 2,
        animationDuration: Math.random() * 3 + 4,
      };

      setHearts(prev => [...prev, heart]);

      // Remove heart after animation completes
      setTimeout(() => {
        setHearts(prev => prev.filter(h => h.id !== id));
      }, 7000);
    };

    // Create initial hearts
    createHeart();
    
    // Create hearts periodically
    const interval = setInterval(createHeart, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="absolute text-pink-cute text-xl animate-float"
          style={{
            left: `${heart.left}%`,
            animationDelay: `${heart.animationDelay}s`,
            animationDuration: `${heart.animationDuration}s`,
          }}
        >
          {heart.emoji}
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;