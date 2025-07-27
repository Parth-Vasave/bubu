import React, { useState } from 'react';
import { Input, Button } from '../ui';
import AngerSlider from './AngerSlider';

const GrievanceForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    complaint: '',
    angerLevel: 5,
    solution: '',
  });

  const [showKisses, setShowKisses] = useState(false);
  const [kisses, setKisses] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/myzpwogy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          complaint: formData.complaint,
          angerLevel: formData.angerLevel,
          solution: formData.solution,
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        // Show success message
        onSubmit(formData);

        // Reset form
        setFormData({
          complaint: '',
          angerLevel: 5,
          solution: '',
        });
      } else {
        console.error('Form submission failed');
        alert('Oops! Something went wrong. Please try again. 💔');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Oops! Something went wrong. Please try again. 💔');
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleKissieClick = () => {
    setShowKisses(true);

    // Create multiple kiss emojis
    const newKisses = [];
    for (let i = 0; i < 30; i++) {
      newKisses.push({
        id: Date.now() + i,
        emoji: '💋',
        left: Math.random() * 100,
        top: Math.random() * 100,
        animationDelay: Math.random() * 0.5,
        animationDuration: Math.random() * 2 + 1,
      });
    }

    setKisses(newKisses);

    // Hide kisses after animation
    setTimeout(() => {
      setShowKisses(false);
      setKisses([]);
    }, 3000);
  };

  return (
    <>
      {/* Kiss Explosion Overlay */}
      {showKisses && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {kisses.map(kiss => (
            <div
              key={kiss.id}
              className="absolute text-4xl animate-ping"
              style={{
                left: `${kiss.left}%`,
                top: `${kiss.top}%`,
                animationDelay: `${kiss.animationDelay}s`,
                animationDuration: `${kiss.animationDuration}s`,
              }}
            >
              {kiss.emoji}
            </div>
          ))}
        </div>
      )}

      <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-pink-200/50">
        <form onSubmit={handleSubmit} className="space-y-8" method="POST" action="https://formspree.io/f/myzpwogy">
          {/* Complaint Field */}
          <Input
            label="batao toh maine kya kiya"
            type="textarea"
            value={formData.complaint}
            onChange={(e) => handleInputChange('complaint', e.target.value)}
            placeholder="sowwi ☕"
            required
            rows={5}
          />

          {/* Anger Level Slider */}
          <div className="space-y-3">
            <label className="block text-lg font-semibold text-pink-cute">
              gussa kitna hai? you rn: 😡
            </label>
            <AngerSlider
              value={formData.angerLevel}
              onChange={(value) => handleInputChange('angerLevel', value)}
            />
          </div>

          {/* Solution Field */}
          <Input
            label="kaise theek karu batao 🥺"
            type="textarea"
            value={formData.solution}
            onChange={(e) => handleInputChange('solution', e.target.value)}
            placeholder="saari baatein maanunga ☹️"
            rows={4}
          />

          {/* Kissie Button */}
          <div className="flex items-center justify-center">
            <Button
              type="button"
              onClick={handleKissieClick}
              variant="secondary"
              className="bg-gradient-to-r from-pink-400 to-pink-600 hover:from-pink-500 hover:to-pink-700"
            >
              <span className="text-xl">💋</span>
              <span>kissie?</span>
            </Button>
          </div>

          {/* Hidden fields for Formspree */}
          <input type="hidden" name="complaint" value={formData.complaint} />
          <input type="hidden" name="angerLevel" value={formData.angerLevel} />
          <input type="hidden" name="solution" value={formData.solution} />
          <input type="hidden" name="_subject" value="💔 New Grievance Submitted" />

          {/* Submit Button */}
          <div className="flex justify-center">
            <Button type="submit" variant="primary">
              <span className="text-2xl animate-wiggle">🧸</span>
              <span>Submit Complaint</span>
            </Button>
          </div>

        </form>
      </div>
    </>
  );
};

export default GrievanceForm;