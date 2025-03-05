import React, { useState } from 'react';

export default function ColorSelector() {
  const [selectedColor, setSelectedColor] = useState('white');

  const colors = [
    { id: 'white', name: 'White', color: '#ffffff', border: true },
    { id: 'golden', name: 'Golden', color: '#f4b740' },
    { id: 'black', name: 'Black', color: '#000000' },
    { id: 'pink', name: 'Pink', color: '#fec4f1' },
  ];

  return (
    <div className="flex space-x-2">
      {colors.map(color => (
        <button key={color.id} className={`relative group ${selectedColor === color.id ? 'ring-1 ring-offset-2 ring-[#b19e8d]' : ''}`} onClick={() => setSelectedColor(color.id)}>
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${color.border ? 'border border-[#d9d9d9]' : ''}`} style={{ backgroundColor: color.color }} />
          <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">{color.name}</span>
        </button>
      ))}
    </div>
  );
}
