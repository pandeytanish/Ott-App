import React, { useState } from 'react';
import popularApi from '../Category API/PopularApi';

function Popular() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const dataLength = popularApi.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % dataLength);
  };

  return (
    <>
      <div>
        <h1 className='text-white font-extrabold text-2xl ml-14 mt-[50px]'>
          Popular On Netflix
        </h1>
        <div className='h-[200px] w-[95%] ml-[50px] flex gap-2  '>
          {popularApi.slice(currentIndex, currentIndex + 6).map((value, index) => (
            <div key={index} className='h-[140px] w-[220px]  bg-slate-200 mt-5 rounded-md hover:border-4  hover:border-red-500'>
              <img className='h-[140px] w-[220px] rounded-md ' src={value.img} alt={`Popular ${index}`} />
              {/* <i className='hidden' class="fa-solid fa-circle-play "></i>
              <i class="fa-solid fa-circle-plus"></i>
              <i class="fa-regular fa-thumbs-up"></i>
              <i class="fa-regular fa-circle-chevron-down"></i> */}
            </div>
          ))}
          <button className='ml-6 mb-6 text-3xl text-white font-extrabold hover:text-white hover:text-4xl' onClick={nextSlide}>></button>
        </div>
      </div>
    </>
  );
}

export default Popular;
