/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'quicksand': ['Quicksand', 'sans-serif'],
      },
      colors: {
        'pink-cute': '#ff69b4',
        'pink-deep': '#ff1493',
        'purple-cute': '#d63384',
        'purple-light': '#6f42c1',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'bounce-cute': 'bounce-cute 2s ease-in-out infinite',
        'pulse-cute': 'pulse-cute 1.5s ease-in-out infinite',
        'wiggle': 'wiggle 2s ease-in-out infinite',
        'sway': 'sway 3s ease-in-out infinite',
        'dance': 'dance 1s ease-in-out infinite',
        'pop-in': 'pop-in 0.5s ease-out',
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(100vh) rotate(0deg)', opacity: '0' },
          '10%, 90%': { opacity: '1' },
          '50%': { transform: 'translateY(-20px) rotate(180deg)' },
        },
        'bounce-cute': {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-10px)' },
          '60%': { transform: 'translateY(-5px)' },
        },
        'pulse-cute': {
          '0%, 100%': { transform: 'scale(1) rotate(0deg)' },
          '50%': { transform: 'scale(1.15) rotate(2deg)' },
        },
        'wiggle': {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-10deg)' },
          '75%': { transform: 'rotate(10deg)' },
        },
        'sway': {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
        },
        'dance': {
          '0%, 100%': { transform: 'scale(1) rotate(0deg)' },
          '50%': { transform: 'scale(1.2) rotate(5deg)' },
        },
        'pop-in': {
          '0%': { transform: 'translate(-50%, -50%) scale(0)', opacity: '0' },
          '100%': { transform: 'translate(-50%, -50%) scale(1)', opacity: '1' },
        },
      }
    },
  },
  plugins: [],
}