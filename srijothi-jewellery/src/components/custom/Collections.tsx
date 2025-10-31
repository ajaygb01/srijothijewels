"use client";

import React from 'react';

// Define the types for the component props
interface CollectionsProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const Collections: React.FC<CollectionsProps> = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div id="collections">
      <h2 className="text-brand-text text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Collections</h2>
      <div className="pb-3">
        <div className="flex border-b border-brand-accent px-4 gap-8">
          {["All", ...categories].map((category) => (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 ${
                selectedCategory === category
                  ? 'border-b-brand-primary text-brand-text'
                  : 'border-b-transparent text-brand-secondary'
              }`}
            >
              <p className="text-sm font-bold leading-normal tracking-[0.015em]">{category}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collections;