import React from 'react';

const BridalImage = ({ src, alt = "Image", className = "" }) => {
  return (
    // Container với kích thước cố định (ở đây dùng chiều cao 300px) và overflow-hidden
    <div className="w-full h-[500px] overflow-hidden">
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover rounded-tl-[80px] rounded-tr-[80px] ${className}`}
      />
    </div>
  );
};

export default BridalImage;
