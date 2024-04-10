import React from 'react'

function ContentFoot() {
  return (
    <div className='h-[300px] w-full bg-black flex items-start justify-center'>
        <div className='h-[250px] w-[85%]  text-2xl p-10  text-zinc-300'>
        <i class="text-white ml-14 fa-brands fa-facebook"></i>
        <i class="text-white ml-8 fa-brands fa-instagram"></i>
        <i class="text-white ml-8 fa-brands fa-twitter"></i>
        <i class="text-white ml-8 fa-brands fa-youtube"></i>
        <div className='flex gap-10 mt-6 text-base font-thin '>

        <ul className=' px-14 leading-loose '>
            <li>Audio Description</li>
            <li>Investors Relations</li>
            <li>Legal Notices</li>
            <li className='border-2 mt-6 w-26 h-8 text-center  hover:text-white '>Service box</li>
        </ul>
        <ul className=' px-14 leading-loose'>
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Cookie Preferences</li>
            <li></li>
        </ul>
        <ul className=' px-14 leading-loose'>
            <li>Gift Cards</li>
            <li>Terms of Use</li>
            <li>Corporate Information</li>
            <li></li>
        </ul>
        <ul className=' px-14 leading-loose'>
            <li>Media Center</li>
            <li>Privacy</li>
            <li>Contact Us</li>
            <li></li>
        </ul>
        </div>

        </div>

    </div>
  )
}

export default ContentFoot