import React from 'react'

function BannerSecond() {
  return (
    <div className='h-[600px] w-full bg-black flex items-center justify-between px-[100px] border-t-8 border-zinc-800'>


    <div className='h-[450px] w-[45%] '>
        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="" />
        </div>
        <div className='h-[450px] w-[45%]  flex justify-center items-center  text-center '>
      <div>
      <h1 className='text-left text-5xl text-white py-5 font-extrabold '>Download your shows to watch offline</h1>
         <p className='text-left text-2xl text-white'>Save your favourites easily and always have something to watch.</p>
      </div>
        

    </div>

</div>
  )
}

export default BannerSecond