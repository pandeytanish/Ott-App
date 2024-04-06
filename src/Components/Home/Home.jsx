import React from 'react'
import Nav from '../Navbar/Nav'

function Home() {
  return (
    <>
    <div className="  bg-cover bg-center  bg-[url('https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY-650-80.jpg.webp')] brightness-50">
    <Nav/>
    <div className='flex h-[100vh] w-full items-center justify-center'>
        <div>
        <h1 className= 'text-white font-extrabold text-center my-4 text-5xl'>Unlimited movies, TV shows and more</h1>
        <h3 className='text-white font-normal text-center my-4 text-3xl'>Watch anywhere. Cancel anytime.</h3>
        <p className='text-white font-normal text-center my-4 text-2xl'>Ready to watch? Enter your email to create or restart your membership.</p>
        <div className=' flex justify-center items-center gap-2'>
        <input className='h-[3rem] w-[25rem] items-center bg-[rgba(255,255,255,0.4)] text-m placeholder-white p-2 mr-[2px] rounded-md border-none '  placeholder='Email Address' />
        <button className='h-[3rem] w-[10rem] bg-red-600 hover:bg-red-700 rounded-md items-center text-xl p-2 text-white'>Get Started  </button>
        
        </div>
        

        </div>
    </div>
    
    </div>
    </>
  )
}

export default Home