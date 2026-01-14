
import React, { useState, useCallback } from 'react';
import { AppStatus, TransformationResult } from './types';
import { transformToBakerPortrait } from './services/gemini';
import Header from './components/Header';
import ImageUploader from './components/ImageUploader';
import ResultDisplay from './components/ResultDisplay';
import LoadingOverlay from './components/LoadingOverlay';

const App: React.FC = () => {
  const [status, setStatus] = useState<AppStatus>(AppStatus.IDLE);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<TransformationResult | null>(null);
  const [originalBase64, setOriginalBase64] = useState<string | null>(null);

  const handleImageUpload = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result as string;
      setOriginalBase64(base64);
      setResult(null);
      setError(null);
      setStatus(AppStatus.IDLE);
    };
    reader.readAsDataURL(file);
  };

  const handleTransform = async () => {
    if (!originalBase64) return;

    setStatus(AppStatus.TRANSFORMING);
    setError(null);

    try {
      const mimeType = originalBase64.match(/data:(.*?);/)?.[1] || 'image/png';
      const transformedUrl = await transformToBakerPortrait(originalBase64, mimeType);
      
      setResult({
        originalUrl: originalBase64,
        imageUrl: transformedUrl
      });
      setStatus(AppStatus.COMPLETED);
    } catch (err: any) {
      console.error(err);
      setError("Failed to transform image. Please try again with a clearer photo.");
      setStatus(AppStatus.ERROR);
    }
  };

  const handleReset = () => {
    setOriginalBase64(null);
    setResult(null);
    setStatus(AppStatus.IDLE);
    setError(null);
  };

  return (
    <div className="min-h-screen flex flex-col items-center pb-12">
      <Header />
      
      <main className="w-full max-w-4xl px-4 mt-8 flex flex-col items-center">
        {!originalBase64 ? (
          <ImageUploader onUpload={handleImageUpload} />
        ) : status === AppStatus.COMPLETED && result ? (
          <ResultDisplay result={result} onReset={handleReset} />
        ) : (
          <div className="w-full bg-white rounded-2xl shadow-xl overflow-hidden p-6 md:p-8 border border-amber-100">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/2">
                <p className="text-sm font-semibold text-amber-800 mb-2 uppercase tracking-wider">Source Photo</p>
                <img 
                  src={originalBase64} 
                  alt="Original" 
                  className="w-full h-auto rounded-lg shadow-md border-4 border-white"
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col items-center justify-center text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready for Transformation</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  We'll reimagine you as an artisanal baker, complete with a professional uniform, 
                  a cozy bakery backdrop, and holding one of your signature cakes.
                </p>
                
                <div className="flex gap-4 w-full">
                  <button
                    onClick={handleTransform}
                    disabled={status === AppStatus.TRANSFORMING}
                    className="flex-1 bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-amber-200 disabled:opacity-50"
                  >
                    Transform Me
                  </button>
                  <button
                    onClick={handleReset}
                    className="px-6 py-4 text-gray-500 hover:text-gray-700 font-medium"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {error && (
          <div className="mt-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {error}
          </div>
        )}
      </main>

      {status === AppStatus.TRANSFORMING && <LoadingOverlay />}
      
      <footer className="mt-auto pt-12 text-center text-gray-400 text-sm">
        <p>© 2024 BakeMaster AI Studio. For professional branding visualization.</p>
      </footer>
    </div>
  );
};

export default App;
