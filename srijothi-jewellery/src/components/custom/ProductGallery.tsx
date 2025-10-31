"use client";

import React from 'react';
import Image from 'next/image';

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

// Define the props for the ProductGallery component
interface ProductGalleryProps {
  products: Product[];
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ products }) => {
  const WHATSAPP_BASE_URL = "https://wa.me/91XXXXXXXXXX"; // Placeholder number

  const getWhatsAppLink = (product: Product) => {
    const text = `Hi Srijothi Jewellery, I'm interested in ${product.name} (SKU: ${product.sku})`;
    return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div>
      <h2 className="text-brand-text text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Product Gallery</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col gap-3 pb-3">
            <div className="w-full aspect-square relative">
              <Image
                src={product.image}
                alt={product.name}
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
                unoptimized // Since the images are from external URLs
              />
            </div>
            <div>
              <p className="text-brand-text text-base font-medium leading-normal">{product.name}</p>
              <p className="text-brand-secondary text-sm font-normal leading-normal">{product.description}</p>
            </div>
            <a href={getWhatsAppLink(product)} target="_blank" rel="noopener noreferrer" className="mt-auto">
              <button className="w-full flex items-center justify-center gap-2 h-10 px-4 bg-brand-primary text-brand-text text-sm font-bold rounded-lg">
                 Enquire on WhatsApp
              </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;