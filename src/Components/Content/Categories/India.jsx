import React, { useState, useRef } from 'react';
import IndiaApi from '../Category API/IndiaApi';

function India() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const dataLength = IndiaApi.length;
  const isDragging = useRef(false);
  const startX = useRef(0);
  const offset = useRef(0);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.clientX;
  };

  const handleMouseMove = (e) => {
    if (isDragging.current) {
      offset.current = e.clientX - startX.current;
      if (offset.current > 100) {
        prevSlide();
        startX.current = e.clientX;
      } else if (offset.current < -100) {
        nextSlide();
        startX.current = e.clientX;
      }
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % dataLength);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + dataLength) % dataLength);
  };

  return (
    <div 
      className='cursor-pointer'
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <h1 className='text-white font-extrabold text-2xl ml-14 mt-[40px]'>
        Made In India
      </h1>
      <div className='h-[200px] w-[95%] ml-[50px] flex gap-2'>
        <button 
          className='ml-2 mb-6 text-3xl text-white font-extrabold hover:text-white hover:text-4xl' 
          onClick={prevSlide}
        >
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        {IndiaApi.slice(currentIndex, currentIndex + 6).map((value, index) =>
          <div 
            key={index} 
            className='h-[140px] w-[260px] bg-slate-200 mt-5 rounded-md hover:border-4 hover:border-red-500'
          >
            <img 
              className='h-[140px] w-[260px] rounded-md' 
              src={value.img} 
              alt={`Popular ${index}`} 
            />
          </div>
        )}
        <button 
          className='ml-6 mb-6 text-3xl text-white font-extrabold hover:text-white hover:text-4xl' 
          onClick={nextSlide}
        >
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}

export default India;
