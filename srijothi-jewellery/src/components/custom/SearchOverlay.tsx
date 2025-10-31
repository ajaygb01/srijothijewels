"use client";

import React, { useState, useEffect, useRef } from 'react';
import Fuse from 'fuse.js';
import productsData from '@/data/products.json';
import Image from 'next/image';
import Link from 'next/link';

// Define the product type
interface Product {
  id: number;
  sku: string;
  name: string;
  description: string;
  category: string;
  price: number;
  image: string;
}

// Define the props for the SearchOverlay component
interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchOverlay: React.FC<SearchOverlayProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Product[]>([]);
  const overlayRef = useRef<HTMLDivElement>(null);

  const fuse = new Fuse(productsData, {
    keys: ['name', 'sku', 'category', 'description'],
    includeScore: true,
    threshold: 0.4,
  });

  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
    } else {
      const searchResults = fuse.search(query).map(result => result.item);
      setResults(searchResults);
    }
  }, [query]);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (overlayRef.current === e.target) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-start pt-20"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-6">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for products..."
          className="w-full p-3 border border-gray-300 rounded-lg mb-4"
          autoFocus
        />
        <div className="max-h-96 overflow-y-auto">
          {results.length > 0 ? (
            results.map((product) => (
              <Link href={`#product-${product.id}`} key={product.id} onClick={onClose}>
                <div className="flex items-center gap-4 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                  <div className="relative w-16 h-16">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded-md"
                      unoptimized
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{product.name}</p>
                    <p className="text-sm text-gray-600">{product.category}</p>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            query.trim() !== '' && <p>No results found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;