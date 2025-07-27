import React from 'react';

const AngerSlider = ({ value, onChange }) => {
  const angerLevels = [
    { emoji: '😊', text: 'im not angry yayy' },
    { emoji: '😐', text: 'ignore karunga' },
    { emoji: '😒', text: 'fuck you' },
    { emoji: '😠', text: 'Getting mad' },
    { emoji: '😡', text: 'Pretty angry' },
    { emoji: '🤬', text: 'ghar se bahar jao' },
    { emoji: '👿', text: 'aaj aap gaye' },
    { emoji: '💀', text: "die die die" }
  ];

  const currentLevel = angerLevels[value - 1];

  return (
    <div className="relative p-6 bg-pink-50/60 rounded-2xl border-2 border-pink-200/40 backdrop-blur-sm">
      <div className="space-y-6">
        {/* Slider */}
        <div className="relative">
          <input
            type="range"
            min="1"
            max="8"
            step="0.1"
            value={value}
            onChange={(e) => onChange(Math.round(parseFloat(e.target.value)))}
            className="w-full h-4 rounded-full appearance-none cursor-pointer border-3 border-white/90 shadow-xl shadow-pink-cute/40 hover:shadow-2xl hover:shadow-pink-cute/50 transition-all duration-500 ease-out"
            style={{
              background: 'linear-gradient(to right, #98fb98 0%, #87ceeb 20%, #dda0dd 40%, #ffa07a 60%, #ff6347 80%, #dc143c 100%)',
            }}
          />
          <style jsx>{`
            input[type="range"] {
              outline: none;
            }
            
            input[type="range"]::-webkit-slider-thumb {
              -webkit-appearance: none;
              appearance: none;
              width: 40px;
              height: 40px;
              border-radius: 50%;
              background: linear-gradient(135deg, #ff69b4, #ff1493);
              cursor: pointer;
              border: 5px solid white;
              box-shadow: 
                0 6px 20px rgba(255, 20, 147, 0.5), 
                0 3px 10px rgba(0, 0, 0, 0.2),
                inset 0 1px 3px rgba(255, 255, 255, 0.3);
              transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
              position: relative;
            }
            
            input[type="range"]::-webkit-slider-thumb:hover {
              transform: scale(1.2);
              box-shadow: 
                0 8px 25px rgba(255, 20, 147, 0.7), 
                0 4px 15px rgba(0, 0, 0, 0.3),
                inset 0 1px 3px rgba(255, 255, 255, 0.4);
              background: linear-gradient(135deg, #ff1493, #dc143c);
            }
            
            input[type="range"]::-webkit-slider-thumb:active {
              transform: scale(1.1);
              box-shadow: 
                0 4px 15px rgba(255, 20, 147, 0.8), 
                0 2px 8px rgba(0, 0, 0, 0.4),
                inset 0 1px 3px rgba(255, 255, 255, 0.5);
            }
            
            input[type="range"]::-moz-range-thumb {
              width: 40px;
              height: 40px;
              border-radius: 50%;
              background: linear-gradient(135deg, #ff69b4, #ff1493);
              cursor: pointer;
              border: 5px solid white;
              box-shadow: 
                0 6px 20px rgba(255, 20, 147, 0.5), 
                0 3px 10px rgba(0, 0, 0, 0.2);
              transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            }
            
            input[type="range"]::-moz-range-thumb:hover {
              transform: scale(1.2);
              box-shadow: 
                0 8px 25px rgba(255, 20, 147, 0.7), 
                0 4px 15px rgba(0, 0, 0, 0.3);
              background: linear-gradient(135deg, #ff1493, #dc143c);
            }
            
            input[type="range"]::-moz-range-track {
              height: 16px;
              border-radius: 8px;
              background: linear-gradient(to right, #98fb98 0%, #87ceeb 20%, #dda0dd 40%, #ffa07a 60%, #ff6347 80%, #dc143c 100%);
              border: 3px solid rgba(255, 255, 255, 0.9);
              box-shadow: 0 6px 20px rgba(255, 105, 180, 0.4);
            }
            
            input[type="range"]::-ms-track {
              height: 16px;
              border-radius: 8px;
              background: linear-gradient(to right, #98fb98 0%, #87ceeb 20%, #dda0dd 40%, #ffa07a 60%, #ff6347 80%, #dc143c 100%);
              border: 3px solid rgba(255, 255, 255, 0.9);
              box-shadow: 0 6px 20px rgba(255, 105, 180, 0.4);
            }
            
            input[type="range"]::-ms-thumb {
              width: 40px;
              height: 40px;
              border-radius: 50%;
              background: linear-gradient(135deg, #ff69b4, #ff1493);
              cursor: pointer;
              border: 5px solid white;
              box-shadow: 
                0 6px 20px rgba(255, 20, 147, 0.5), 
                0 3px 10px rgba(0, 0, 0, 0.2);
            }
          `}</style>
        </div>

        {/* Display */}
        <div className="text-center bg-white/90 p-6 rounded-2xl border-2 border-pink-cute/20 shadow-xl shadow-pink-cute/15 backdrop-blur-sm transition-all duration-500">
          <div className="text-6xl animate-pulse-cute drop-shadow-lg mb-3 transition-all duration-300">
            {currentLevel.emoji}
          </div>
          <div className="font-bold text-purple-cute text-xl uppercase tracking-wide drop-shadow-sm transition-all duration-300">
            {currentLevel.text}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AngerSlider;