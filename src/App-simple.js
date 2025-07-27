import React from 'react';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1 style={{ color: '#ff69b4' }}>💖 Sweetie's Grievance Portal 💖</h1>
      <p>If you can see this, the React app is working!</p>
      <div style={{ 
        background: 'linear-gradient(135deg, #ffeef8 0%, #e8f4fd 50%, #f0e6ff 100%)',
        padding: '20px',
        borderRadius: '10px',
        marginTop: '20px'
      }}>
        <h2>Test Form</h2>
        <textarea placeholder="What did he do now?" style={{ width: '100%', padding: '10px' }}></textarea>
        <br /><br />
        <button style={{ 
          background: '#ff69b4', 
          color: 'white', 
          padding: '10px 20px', 
          border: 'none', 
          borderRadius: '5px',
          cursor: 'pointer'
        }}>
          🧸 Submit Complaint
        </button>
      </div>
    </div>
  );
}

export default App;