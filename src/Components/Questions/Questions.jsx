import React from 'react'
import { useState } from 'react';
import QuestionApi from './QuestionApi';

function Questions() {
           
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = index => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };
  return (
    <div className='h-[800px] w-full bg-black border-t-8 border-zinc-800'>
        <h1 className='text-white font-bold text-5xl text-center py-4'>Frequently Asked Questions</h1>
    <div>
  <div>
    {QuestionApi.map((api, index) => (
      <div className='flex items-center justify-center' key={index}>
        <div className='h-[80px] w-[80%] py-[30px] '>
        <h2 className='text-white h-[70px] text-2xl bg-zinc-800 text-leftr py-2 px-6  hover:bg-zinc-600 ' onClick={() => handleToggle(index)}>
           {api.question}
           <span className='text-3xl'>{expandedIndex === index ? 'x' : '+'}</span>
        </h2>
        {expandedIndex === index && <p className='text-black h-[50px]  bg-slate-200 text-center py-2 '>{api.answer}</p>}
      </div>
       </div>
    ))}
    
  </div>
    </div>
    <div className=' '>
<p className='text-white text-2xl text-center py-10'>Ready to watch? Enter your email to create or restart your membership.</p>
    <div className=' flex justify-center items-center gap-2'>
        <input className='h-[3rem] w-[25rem] items-center bg-[rgba(255,255,255,0.4)] text-m placeholder-white p-2 mr-[2px] rounded-md border-none '  placeholder='Email Address' />
        <button className='h-[3rem] w-[10rem] bg-red-600 rounded-md items-center text-xl p-2 text-white'>Get Started  </button>
        </div>
        </div>
    </div>
    
  )
}

export default Questions