import React, { useState, useMemo } from 'react';
import { ShoppingBag } from 'lucide-react';
import { products, Product } from './data/products';
import { ProductGrid } from './components/ProductGrid';
import { ProductModal } from './components/ProductModal';
import { CategoryFilter } from './components/CategoryFilter';
import { SearchBar } from './components/SearchBar';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = useMemo(() => {
    let filtered = selectedCategory === 'All'
      ? products
      : products.filter(product => product.category === selectedCategory);

    if (searchTerm) {
      filtered = filtered.filter(product => 
        product.id.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [selectedCategory, searchTerm]);

  const suggestions = useMemo(() => {
    if (!searchTerm) return [];
    return products
      .map(p => p.id)
      .filter(id => id.toLowerCase().includes(searchTerm.toLowerCase()))
      .slice(0, 5);
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="w-8 h-8" />
              <h1 className="text-2xl font-geist-mono font-bold">Janta Bazar</h1>
            </div>
          </div>
          <div className="mt-4">
            <SearchBar
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              suggestions={suggestions}
            />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto">
        <CategoryFilter
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        <ProductGrid
          products={filteredProducts}
          onProductClick={setSelectedProduct}
        />
      </main>

      <footer className="bg-white mt-12 py-6 text-center font-geist-mono text-gray-600">
        <p>Developed by Janta Bazar</p>
      </footer>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}

export default App;