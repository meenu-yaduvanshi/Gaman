import React, { useState } from 'react';
import '../style/reviewSlide.css'
import Card from './Card';


const ReviewSlideshow = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className='container'>
      <a className="prev" onClick={prevSlide}>&#10094;</a>
      
      <Card slide={slides[currentIndex]} key={currentIndex} />
     
      <a className="next" onClick={nextSlide}>&#10095;</a>
    </div>
  );
};

export default ReviewSlideshow;