import React, { useState } from 'react';
import popularApi from '../Category API/PopularApi';

function Popular() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const dataLength = popularApi.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % dataLength);
  };
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1) % dataLength);
  };

  return (
    <>
      <div>
        <h1 className='text-white font-extrabold text-2xl ml-14 mt-[50px]'>
          Popular On Netflix
        </h1>
        <div className='h-[200px] w-[95%] ml-[50px] flex gap-2  '>
        <button className='ml-2  mb-6 text-3xl text-white font-extrabold hover:text-white hover:text-4xl' onClick={prevSlide}> <i class="fa-solid fa-chevron-left"></i> </button>
          {popularApi.slice(currentIndex, currentIndex + 6).map((value, index) => (
            <div key={index} className='h-[140px] w-[260px]   bg-slate-200 mt-5 rounded-md hover:border-4  hover:border-red-500'>
              <img className='h-[140px] w-[260px] rounded-md  ' src={value.img} alt={`Popular ${index}`} />
            </div>
          ))}
          <button className='ml-6 mb-6 text-3xl text-white font-extrabold hover:text-white hover:text-4xl' onClick={nextSlide}><i class="fa-solid fa-chevron-right"></i></button>
        </div>
      </div>
    </>
  );
}

export default Popular;
