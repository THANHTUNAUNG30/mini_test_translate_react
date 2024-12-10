import React, { useState, useEffect } from 'react';
import './App.css';


const Slideshow = ({ photos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === photos.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(id);
  }, [photos.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="slideshow-container" style={{marginTop:'40px'}}>
      <button className="prev" onClick={goToPrevious}>
        &#10094;
      </button>
      <div className="slideshow-slide">
        <img src={photos[currentIndex]} alt={`Slide ${currentIndex}`} />
      </div>
      <button className="next" onClick={goToNext}>
        &#10095;
      </button>
    </div>
  );
};

export default Slideshow;
