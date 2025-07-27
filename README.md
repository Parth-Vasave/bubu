# 💖 Sweetie's Grievance Portal 💖

A super cute and playful React application where your girlfriend can submit her complaints when she's upset with you! Built with love, React, and Tailwind CSS.

## ✨ Features

- **Cute UI Elements**: Pastel colors, heart animations, floating emojis
- **Interactive Form**: Complaint submission with emoji anger slider
- **Whimsical Components**: Grumpy cat, teddy bear submit button, floating hearts
- **Sound Effects**: Apology song with Web Audio API
- **Responsive Design**: Works beautifully on desktop and mobile
- **Modern React**: Hooks, component composition, clean architecture

## 🎯 Project Structure

```
src/
├── components/
│   ├── ui/                 # Reusable UI components
│   │   ├── Button.js       # Styled button component
│   │   ├── Input.js        # Input and textarea component
│   │   ├── Modal.js        # Modal wrapper component
│   │   └── index.js        # UI exports
│   ├── layout/             # Layout and visual components
│   │   ├── Header.js       # Animated title header
│   │   ├── FloatingHearts.js # Floating heart animations
│   │   └── index.js        # Layout exports
│   ├── form/               # Form-related components
│   │   ├── GrievanceForm.js # Main form component
│   │   ├── AngerSlider.js  # Interactive anger level slider
│   │   └── index.js        # Form exports
│   ├── feedback/           # Feedback and interaction components
│   │   ├── SuccessMessage.js # Success modal
│   │   └── index.js        # Feedback exports
│   └── index.js            # Main component exports
├── App.js                  # Main application component
└── index.js               # React app entry point
```

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```

3. **Open your browser:**
   Navigate to `http://localhost:3000`

## 🎨 Components Overview

### UI Components
- **Button**: Reusable button with primary/secondary variants
- **Input**: Styled input and textarea with labels
- **Modal**: Modal wrapper with backdrop blur

### Layout Components
- **Header**: Animated bouncing title
- **FloatingHearts**: Continuously spawning floating heart animations
- **GrumpyCat**: Corner cat with hover thought bubble

### Form Components
- **GrievanceForm**: Main form with state management and Formspree integration
- **AngerSlider**: Smooth gradient slider with emoji feedback

### Feedback Components
- **SuccessMessage**: Modal success message with dancing hearts

## 💝 Features in Detail

- **Anger Slider**: 10-level anger scale from "Actually happy" 😊 to "You're dead to me" 💀
- **Form Fields**: "What did he do now?", "How mad are you?", "What can he do to fix it?"
- **Kiss Button**: "kissie?" button that fills screen with 💋 emojis
- **Formspree Integration**: Working form submission to email
- **Animations**: Smooth transitions, floating hearts, bouncing elements
- **Responsive**: Mobile-friendly design with Tailwind CSS

## 🛠️ Built With

- **React 18** - Modern React with hooks
- **Tailwind CSS** - Utility-first CSS framework
- **Web Audio API** - For cute sound effects
- **CSS Animations** - Smooth transitions and effects

## 💖 Perfect For

- Couples who want to add humor to relationship communication
- Anyone who appreciates cute, whimsical UI design
- Learning modern React component architecture
- Demonstrating advanced CSS animations and interactions

---

*Made with 💖 for sweeties everywhere*