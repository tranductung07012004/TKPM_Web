import React, { useState } from 'react';

export default function SizeSelector() {
  const [selectedSize, setSelectedSize] = useState('M');

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  return (
    <div className="grid grid-cols-6 gap-2">
      {sizes.map(size => (
        <button key={size} className={`py-2 rounded-full text-sm ${selectedSize === size ? 'bg-[#292d32] text-white' : 'border border-[#d9d9d9] text-[#292d32] hover:border-[#b19e8d]'}`} onClick={() => setSelectedSize(size)}>
          {size}
        </button>
      ))}
    </div>
  );
}
