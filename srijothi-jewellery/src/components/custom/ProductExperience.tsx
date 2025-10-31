"use client";

import React, { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Collections from './Collections';
import ProductGallery from './ProductGallery';
import productsData from '@/data/products.json';

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

const ProductExperience = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Set the initial category from the URL hash if it exists
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const category = hash.charAt(0).toUpperCase() + hash.slice(1);
      setSelectedCategory(category);
    }
  }, []);

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
    router.push(`#${category.toLowerCase()}`, { scroll: false });
  };

  const categories = [...new Set(productsData.map((p) => p.category))];

  const filteredProducts =
    selectedCategory === 'All'
      ? productsData
      : productsData.filter((p) => p.category === selectedCategory);

  return (
    <div>
      <Collections
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
      />
      <ProductGallery products={filteredProducts} />
    </div>
  );
};

export default ProductExperience;