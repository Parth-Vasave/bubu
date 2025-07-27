import React, { useState } from 'react';
import { FloatingHearts, Header } from './components/layout';
import { GrievanceForm } from './components/form';
import { SuccessMessage } from './components/feedback';

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
      <FloatingHearts />

      <div className="max-w-4xl mx-auto p-5 relative z-20">
        <Header />
        <GrievanceForm onSubmit={handleFormSubmit} />
      </div>

      {showSuccess && <SuccessMessage />}
    </div>
  );
}

export default App;