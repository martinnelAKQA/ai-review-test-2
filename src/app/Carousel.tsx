'use client'

import React, { useState } from 'react';

const ImageCarousel: React.FC<{ images: string[] }> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative">
      <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} className="w-full h-64 object-cover" />
      <button onClick={goToPreviousImage} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded">
        Previous
      </button>
      <button onClick={goToNextImage} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded">
        Next
      </button>
    </div>
  );
};

export default ImageCarousel;
