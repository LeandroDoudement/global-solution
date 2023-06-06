import React, { useState } from 'react';
import './styles.css';
const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = ['/images/image1.jpg', '/images/image2.jpg', '/images/image3.jpg'];

  const previousImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? images.length - 1 : prevImage - 1
    );
  };

  const nextImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === images.length - 1 ? 0 : prevImage + 1
    );
  };

  return (
    <div className='carrossel'>
      <button className='previous-button' onClick={previousImage}>
        &lt;
      </button>
      <img
        className='carrossel-image'
        src={images[currentImage]}
        alt='Imagem do Carrossel'
      />
      <button className='next-button' onClick={nextImage}>
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
