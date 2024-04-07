import React from 'react'

function BannerFirst() {
  return (
    <div className="h-[600px] w-full bg-black flex items-center justify-between px-[100px] border-t-8 border-zinc-800">

    <div className='h-[450px] w-[45%]  flex justify-center items-center  text-center '>
      <div>
      <h1 className='text-left text-5xl text-white py-5 font-extrabold '>Enjoy on your TV</h1>
         <p className='text-left text-2xl text-white'>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
      </div>
        

    </div>
    <div className="h-[450px] w-[45%] ">
        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="" />
        

        </div>

</div>
  )
}

export default BannerFirst