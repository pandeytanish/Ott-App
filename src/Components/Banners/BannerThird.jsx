import React from 'react'

function BannerThird() {
  return (
    <div className='h-[600px] w-full bg-black flex items-center justify-between px-[100px] border-t-8 border-zinc-800'>

    <div className='h-[450px] w-[45%]  flex justify-center items-center  text-center '>
  <div>
  <h1 className='text-left text-5xl text-white py-5 font-extrabold '>Watch everywhere</h1>
     <p className='text-left text-2xl text-white'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
  </div>
</div>
<div className='h-[450px] w-[45%] '>
    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" alt="" />
    </div>

</div>
  )
}

export default BannerThird