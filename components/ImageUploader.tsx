
import React, { useRef } from 'react';

interface ImageUploaderProps {
  onUpload: (file: File) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onUpload }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onUpload(file);
    }
  };

  const triggerUpload = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="w-full">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-amber-100 flex flex-col md:flex-row">
        <div className="md:w-1/2 bg-amber-50 p-8 md:p-12 flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-amber-900 mb-6 leading-tight">
            The Face of Your <br /><span className="text-amber-600 italic">Baking Business.</span>
          </h2>
          <p className="text-amber-800/70 text-lg mb-8 leading-relaxed">
            Upload a clear headshot and our AI will craft a professional, warm, and authentic portrait of you as a master baker in your own shop.
          </p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3 text-amber-900/80 font-medium">
              <svg className="h-5 w-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              Professional Baker Uniform
            </li>
            <li className="flex items-center gap-3 text-amber-900/80 font-medium">
              <svg className="h-5 w-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              Artisanal Bakery Setting
            </li>
            <li className="flex items-center gap-3 text-amber-900/80 font-medium">
              <svg className="h-5 w-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              Holding Your Signature Cake
            </li>
          </ul>
        </div>

        <div className="md:w-1/2 p-8 md:p-12 flex flex-col items-center justify-center bg-white">
          <div 
            onClick={triggerUpload}
            className="w-full aspect-square max-w-[320px] border-4 border-dashed border-amber-200 rounded-3xl flex flex-col items-center justify-center p-8 cursor-pointer hover:border-amber-400 hover:bg-amber-50 transition-all group"
          >
            <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-xl font-bold text-gray-800 mb-2">Drop your photo here</p>
            <p className="text-gray-500 text-sm text-center">Clear, well-lit headshots work best</p>
            
            <button className="mt-8 bg-amber-600 text-white font-bold py-3 px-8 rounded-full shadow-lg group-hover:bg-amber-700 transition-colors">
              Choose Photo
            </button>
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleFileChange} 
              accept="image/*" 
              className="hidden" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageUploader;
