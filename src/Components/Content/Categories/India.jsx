import React, { useState, useRef } from 'react';
import IndiaApi from '../Category API/IndiaApi';

function India() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const currentTranslate = useRef(0);
  const prevTranslate = useRef(0);

  const handleWheel = (event) => {
    if (event.deltaY > 0 && currentIndex < IndiaApi.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      event.stopPropagation(); // Stop the event from propagating
    } else if (event.deltaY < 0 && currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
      event.stopPropagation(); // Stop the event from propagating
    }
  };

  const setPositionByIndex = () => {
    currentTranslate.current = currentIndex * -260; // Width of the slide (adjust as needed)
    prevTranslate.current = currentTranslate.current;
    setSliderPosition();
  };

  const setSliderPosition = () => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(${currentTranslate.current}px)`;
    }
  };

  React.useEffect(() => {
    setPositionByIndex();
  }, [currentIndex]);

  return (
    <div
      className='slider-container'
      style={{ overflow: 'hidden' }}
      onWheel={handleWheel}
    >
      <h1 className='text-white font-extrabold text-2xl ml-14 mt-[40px]'>
        Made In India
      </h1>
      <div
        ref={sliderRef}
        className='slider-content flex transition-transform duration-300 ease-out'
        style={{ display: 'flex', cursor: 'grab', overflow: 'hidden' }}
      >
        {IndiaApi.map((value, index) => (
          <div
            key={index}
            className='h-[140px] w-[260px] bg-slate-200 mt-5 rounded-md hover:border-4 hover:border-red-500'
            style={{ flexShrink: 0, width: '260px' }} // Adjust width to match the slide width
          >
            <img
              className='h-[140px] w-[260px] rounded-md'
              src={value.img}
              alt={`Popular ${index}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default India;
