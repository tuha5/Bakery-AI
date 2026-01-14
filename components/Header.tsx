
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white border-b border-amber-50 py-6 px-4 sticky top-0 z-10 shadow-sm">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <div className="flex items-center gap-2 mb-1">
          <div className="bg-amber-100 p-2 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0116 0z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-800 to-amber-600 bg-clip-text text-transparent">
            BakeMaster AI
          </h1>
        </div>
        <p className="text-amber-800/60 font-medium text-sm tracking-wide uppercase">Artisanal Branding Studio</p>
      </div>
    </header>
  );
};

export default Header;
