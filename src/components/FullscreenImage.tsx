import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface FullscreenImageProps {
  imageUrl: string;
  onClose: () => void;
}

export function FullscreenImage({ imageUrl, onClose }: FullscreenImageProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 bg-black z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute right-4 top-4 p-2 bg-white rounded-full shadow-md z-10"
      >
        <X className="w-6 h-6" />
      </button>
      <img
        src={imageUrl}
        alt="Fullscreen view"
        className="max-w-full max-h-full object-contain"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}