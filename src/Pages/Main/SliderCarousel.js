import React, { useState, useEffect, useRef } from 'react';
import Slide from './Slide';

function SliderCarousel() {
  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    fetch('/data/data.json')
      .then((res) => res.json())
      .then((res) => setCategoryData(res.category));
  }, []);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [positionX, setPositionX] = useState(0);

  const nextSlide = () => {
    let SLIDES = categoryData.length;
    if (currentSlide >= SLIDES - 3) {
      return;
    } else {
      setCurrentSlide(currentSlide + 1);
      setPositionX(positionX - 300);
    }
  };

  const prevSlide = () => {
    if (currentSlide === 0) {
      return;
    } else {
      setCurrentSlide(currentSlide - 1);
      setPositionX(positionX + 300);
    }
  };

  return (
    <div className="container">
      <button className="shop">Shop</button>
      <div
        className="slider-container"
        style={{
          transform: `translateX(${positionX}px)`,
          transition: 'all 0.3s ease-in-out',
        }}
      >
        <Slide data={categoryData} />
      </div>
      <div className="slide-wrap">
        <button
          className={`prev ${currentSlide === 0 ? 'prevd' : 'null'}`}
          onClick={prevSlide}
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button
          className={`next ${currentSlide === 3 ? 'prevd' : 'null'}`}
          onClick={nextSlide}
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}

export default SliderCarousel;
