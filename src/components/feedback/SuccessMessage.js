import React from 'react';
import { Modal } from '../ui';

const SuccessMessage = () => {
  return (
    <Modal isOpen={true}>
      <h2 className="text-3xl font-bold text-purple-cute mb-4">
        💌 Complaint Received! 💌
      </h2>
      <p className="text-purple-light mb-3 text-lg">
        Ruko abhi meri pitai karta hu
      </p>
      <p className="text-purple-light mb-6 text-lg">
        I AM SO SORRY
      </p>
      <div className="text-4xl animate-dance">
        💖💕💖💕💖
      </div>
    </Modal>
  );
};

export default SuccessMessage;