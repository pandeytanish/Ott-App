import React from 'react'
import UsTvApi from '../Category API/UsTvApi'
import { useState } from 'react';

function UsTv() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const dataLength = UsTvApi.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % dataLength);
  };
  return (
    <div >
<h1 className='text-white font-extrabold text-2xl  ml-14 mt-[50px]'>Only On Netflix</h1>
    <div className='h-[200px] w-[95%] ml-[50px]  flex gap-2 '>
    {UsTvApi.slice(currentIndex, currentIndex + 6).map((value,index) =>
    <div key={index} className='h-[140px] w-[220px]  bg-slate-200 mt-5 rounded-md hover:border-4  hover:border-red-500 '>
      <img className='h-[140px] w-[220px] rounded-md ' src={value.img}/>
    </div>
    )}
    <button className='ml-6 mb-6 text-3xl text-white font-extrabold hover:text-white hover:text-4xl' onClick={nextSlide}>></button>
</div>
</div>
  )
}

export default UsTv