
import React, { useState, useEffect } from 'react';

const MESSAGES = [
  "Firing up the ovens...",
  "Selecting the finest ingredients...",
  "Proofing the sourdough...",
  "Measuring out the flour...",
  "Kneading the dough to perfection...",
  "Whipping up the frosting...",
  "Adding a touch of baker's magic...",
  "Perfecting your professional uniform...",
  "Softening the bakery lighting...",
  "Placing the final cake in your hands..."
];

const LoadingOverlay: React.FC = () => {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % MESSAGES.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-amber-950/40 backdrop-blur-md flex flex-col items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-sm w-full text-center border-t-8 border-amber-600">
        <div className="relative w-24 h-24 mx-auto mb-8">
          <div className="absolute inset-0 border-4 border-amber-100 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-amber-600 rounded-full border-t-transparent animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-600 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
             </svg>
          </div>
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Artisanal Crafting</h3>
        <p className="text-amber-600 font-medium h-6">{MESSAGES[messageIndex]}</p>
        <p className="mt-8 text-xs text-gray-400 leading-relaxed italic">
          High-quality image generation takes a moment. <br />Our AI is hand-crafting every pixel for you.
        </p>
      </div>
    </div>
  );
};

export default LoadingOverlay;
