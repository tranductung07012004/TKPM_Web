import React from 'react';

export default function RecommendedProducts() {
  const products = [
    {
      id: 1,
      name: 'French Lace',
      category: 'Modern',
      price: 650,
      rating: 4.6,
      badge: 'The Most Rented',
      image: '/placeholder.svg?height=400&width=300',
    },
    {
      id: 2,
      name: 'French Lace',
      category: 'Modern',
      price: 300,
      rating: 4.6,
      badge: 'The Most Rented',
      image: '/placeholder.svg?height=400&width=300',
    },
    {
      id: 3,
      name: 'Sparkling flowers',
      category: 'Romance',
      price: 550,
      rating: 4.9,
      badge: 'The Most Rented',
      image: '/placeholder.svg?height=400&width=300',
    },
    {
      id: 4,
      name: 'Elegant',
      category: 'Paris',
      price: 440,
      rating: 4.7,
      badge: 'Almost Booked',
      image: '/placeholder.svg?height=400&width=300',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map(product => (
        <div key={product.id} className="group relative">
          <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
            <div className="absolute top-2 left-2 z-10 bg-white px-2 py-1 rounded-full text-xs">{product.badge}</div>
            <div className="absolute top-2 right-2 z-10 bg-white rounded-full p-1.5">
              <div className="flex items-center space-x-1">
                <svg className="w-3 h-3 text-[#f4b740]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-xs">{product.rating}</span>
              </div>
            </div>
            <img src={product.image || '/placeholder.svg'} alt={product.name} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 p-2">
              {[1, 2, 3].map(dot => (
                <button key={dot} className="h-2 w-2 rounded-full bg-white opacity-70" />
              ))}
            </div>
          </div>
          <div className="mt-3 flex justify-between">
            <div>
              <h3 className="font-medium">{product.name}</h3>
              <p className="text-sm text-[#868686]">{product.category}</p>
            </div>
            <p className="text-sm font-medium">
              ${product.price} <span className="text-xs text-[#868686]">/Per Day</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
