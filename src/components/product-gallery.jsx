import React, { useState } from 'react';

export default function ProductGallery() {
  const [mainImage, setMainImage] = useState(0);

  const images = ['/placeholder.svg?height=600&width=450', '/placeholder.svg?height=600&width=450', '/placeholder.svg?height=600&width=450', '/placeholder.svg?height=600&width=450'];

  return (
    <div className="space-y-2">
      <div className="relative bg-[#f9f9f9] rounded-lg overflow-hidden aspect-[3/4]">
        <img src={images[mainImage] || '/placeholder.svg'} alt="Eliza Satin wedding dress" className="object-cover w-full h-full" />
      </div>
      <div className="grid grid-cols-4 gap-2">
        {images.map((image, index) => (
          <button key={index} className={`relative aspect-square overflow-hidden rounded-md ${mainImage === index ? 'ring-2 ring-[#b19e8d]' : ''}`} onClick={() => setMainImage(index)}>
            <img src={image || '/placeholder.svg'} alt={`Eliza Satin view ${index + 1}`} className="object-cover w-full h-full" />
          </button>
        ))}
      </div>
    </div>
  );
}
