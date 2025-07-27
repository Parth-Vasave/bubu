import React, { useState } from 'react';

// Simple test components
const Header = () => (
  <div className="text-center mb-8">
    <h1 className="text-4xl md:text-5xl font-bold text-pink-cute mb-3">
      💖 Sweetie's Grievance Portal 💖
    </h1>
    <p className="text-xl text-purple-light font-light">
      ✨ Where your feelings matter most ✨
    </p>
  </div>
);

const GrievanceForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    complaint: '',
    angerLevel: 5,
    solution: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-pink-200/50">
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="space-y-3">
          <label className="block text-lg font-semibold text-pink-cute">
            💭 batao toh maine kya kiya
          </label>
          <textarea
            value={formData.complaint}
            onChange={(e) => setFormData({...formData, complaint: e.target.value})}
            placeholder="sowwi ☕"
            required
            className="w-full p-4 border-2 border-pink-200 rounded-2xl bg-pink-50/80 font-quicksand text-base resize-y min-h-[120px] focus:outline-none focus:border-pink-cute focus:shadow-lg focus:shadow-pink-cute/30 focus:scale-[1.02] transition-all duration-300"
          />
        </div>

        <div className="space-y-3">
          <label className="block text-lg font-semibold text-pink-cute">
            😤 gussa kitna hai?
          </label>
          <input
            type="range"
            min="1"
            max="10"
            value={formData.angerLevel}
            onChange={(e) => setFormData({...formData, angerLevel: e.target.value})}
            className="w-full h-4 rounded-full appearance-none cursor-pointer"
          />
          <div className="text-center">
            <div className="text-4xl mb-2">😐</div>
            <div className="font-bold text-purple-cute">Level {formData.angerLevel}</div>
          </div>
        </div>

        <div className="space-y-3">
          <label className="block text-lg font-semibold text-pink-cute">
            💡 kaise theek karu batao
          </label>
          <textarea
            value={formData.solution}
            onChange={(e) => setFormData({...formData, solution: e.target.value})}
            placeholder="saari baatein maanunga"
            className="w-full p-4 border-2 border-pink-200 rounded-2xl bg-pink-50/80 font-quicksand text-base resize-y min-h-[100px] focus:outline-none focus:border-pink-cute focus:shadow-lg focus:shadow-pink-cute/30 focus:scale-[1.02] transition-all duration-300"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-gradient-to-r from-pink-cute to-pink-deep border-none rounded-3xl px-8 py-4 font-quicksand text-lg font-semibold text-white cursor-pointer flex items-center gap-3 transition-all duration-300 shadow-lg shadow-pink-cute/40 hover:-translate-y-1 hover:scale-105 hover:shadow-xl hover:shadow-pink-cute/60"
          >
            <span className="text-2xl">🧸</span>
            <span>Submit Complaint</span>
          </button>
        </div>
      </form>
    </div>
  );
};

const SuccessMessage = () => (
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/20 backdrop-blur-sm">
    <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-10 text-center shadow-2xl border-3 border-pink-cute max-w-md mx-4">
      <h2 className="text-3xl font-bold text-purple-cute mb-4">
        💌 Complaint Received! 💌
      </h2>
      <p className="text-purple-light mb-3 text-lg">
        We value your anger and will work on it immediately! 🛠️
      </p>
      <p className="text-purple-light mb-6 text-lg">
        Your happiness is our top priority! ✨
      </p>
      <div className="text-4xl">
        💖💕💖💕💖
      </div>
    </div>
  </div>
);

function App() {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleFormSubmit = (formData) => {
    console.log('Grievance submitted:', formData);
    setShowSuccess(true);

    // Hide success message after 4 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 4000);
  };

  return (
    <div className="font-quicksand min-h-screen overflow-x-hidden relative">
      <div className="max-w-4xl mx-auto p-5 relative z-20">
        <Header />
        <GrievanceForm onSubmit={handleFormSubmit} />
      </div>

      {showSuccess && <SuccessMessage />}
    </div>
  );
}

export default App;