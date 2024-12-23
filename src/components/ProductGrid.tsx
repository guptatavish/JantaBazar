import React from 'react';
import { Product } from '../data/products';

interface ProductGridProps {
  products: Product[];
  onProductClick: (product: Product) => void;
}

export function ProductGrid({ products, onProductClick }: ProductGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 p-2 sm:p-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
          onClick={() => onProductClick(product)}
        >
          <div className="aspect-square overflow-hidden">
            <img
              src={product.image}
              // alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-2 sm:p-4">
            <p className="font-geist-mono text-xs sm:text-sm text-gray-500">ID: {product.id}</p>
            <span className="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs sm:text-sm font-geist-mono mt-1 sm:mt-2">
              {product.category}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}