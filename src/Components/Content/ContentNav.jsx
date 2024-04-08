import React from 'react'

function ContentNav() {
  return (
    <div className='h-[70px] w-full bg-transparent flex items-center '>
        <img className='h-[55px] w-[90px] ml-14 ' src='https://www.freepnglogos.com/uploads/netflix-logo-text-emblem-31.png'></img>
       <div className='flex space-x-5 justify-between ml-[50px] text-white  '>
        <p className='font-bold hover:text-zinc-400'>Home</p>
        <p className='hover:text-zinc-400 cursor-pointer'>TV shows</p>
        <p className='hover:text-zinc-400 cursor-pointer'>Movies</p>
        <p className='hover:text-zinc-400 cursor-pointer'>New & Popular</p>
        <p className='hover:text-zinc-400 cursor-pointer'>My List</p>
        <p className='hover:text-zinc-400 cursor-pointer'>Browse By Language</p>
       </div>
       <div className='flex space-x-4 items-center justify-between ml-[500px] text-white'>
       <i  class="fa-solid fa-magnifying-glass cursor-pointer text-2xl"></i>
       <p className='cursor-pointer'>Children</p>
       <i class="fa-solid fa-bell cursor-pointer"></i>
       <img className='h-10 w-10 rounded-md cursor-pointer' src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.webp" alt="" />
       </div>
    </div>
  )
}

export default ContentNav