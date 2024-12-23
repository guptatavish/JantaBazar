import React from 'react';
import { products } from '../data/products';

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  const categories = ['All', ...new Set(products.map(product => product.category))];

  return (
    <div className="flex flex-wrap gap-2 p-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-full font-geist-mono text-sm transition-colors
            ${selectedCategory === category
              ? 'bg-black text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}