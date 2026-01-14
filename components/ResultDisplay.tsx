
import React from 'react';
import { TransformationResult } from '../types';

interface ResultDisplayProps {
  result: TransformationResult;
  onReset: () => void;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ result, onReset }) => {
  const downloadImage = () => {
    const link = document.createElement('a');
    link.href = result.imageUrl;
    link.download = 'bakemaster-portrait.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-amber-100 flex flex-col md:flex-row">
        <div className="md:w-3/5 relative">
          <img 
            src={result.imageUrl} 
            alt="Transformed Baker Portrait" 
            className="w-full h-full object-cover min-h-[400px]"
          />
          <div className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
            AI Enhanced
          </div>
        </div>
        
        <div className="md:w-2/5 p-8 md:p-12 flex flex-col justify-center bg-amber-50/30">
          <h2 className="text-3xl font-bold text-amber-900 mb-4 leading-tight">
            Your Professional Branding Portrait
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Authentic, warm, and inviting. This image is optimized for your shop's 'About Us' page, 
            social media presence, or marketing materials.
          </p>
          
          <div className="space-y-4">
            <button 
              onClick={downloadImage}
              className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Download Portrait
            </button>
            
            <button 
              onClick={onReset}
              className="w-full bg-white border-2 border-amber-200 text-amber-800 font-bold py-4 rounded-xl hover:bg-amber-50 transition-all"
            >
              Try Another Photo
            </button>
          </div>
          
          <div className="mt-12 flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-amber-100">
            <img src={result.originalUrl} className="w-12 h-12 rounded-lg object-cover border border-gray-200" alt="Thumbnail" />
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-tighter">Original Source</p>
              <p className="text-sm font-medium text-gray-700">Reimagined by BakeMaster</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultDisplay;
