import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  suggestions: string[];
}

export function SearchBar({ searchTerm, onSearchChange, suggestions }: SearchBarProps) {
  return (
    <div className="relative w-full max-w-md mx-auto mb-6">
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search by ID..."
          className="w-full pl-10 pr-4 py-2 border rounded-lg font-geist-mono focus:outline-none focus:ring-2 focus:ring-black"
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
      </div>
      {suggestions.length > 0 && (
        <div className="absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg max-h-48 overflow-y-auto">
          {suggestions.map((id) => (
            <button
              key={id}
              onClick={() => onSearchChange(id)}
              className="w-full px-4 py-2 text-left hover:bg-gray-100 font-geist-mono"
            >
              {id}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}