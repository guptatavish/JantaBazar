import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { Product } from '../data/types';
import { FullscreenImage } from './FullscreenImage';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains('modal-overlay')) {
        onClose();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [onClose]);

  if (isFullscreen) {
    return (
      <FullscreenImage
        imageUrl={product.image}
        onClose={() => setIsFullscreen(false)}
      />
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 modal-overlay">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-2 bg-white rounded-full shadow-md z-10"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={product.image}
            alt={`Product ${product.id}`}
            className="w-full h-64 sm:h-96 object-cover cursor-pointer"
            onClick={() => setIsFullscreen(true)}
          />
        </div>
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <p className="text-gray-500 font-geist-mono">ID: {product.id}</p>
          </div>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-geist-mono">
            {product.category}
          </span>
        </div>
      </div>
    </div>
  );
}