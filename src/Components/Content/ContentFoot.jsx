import React from 'react'

function ContentFoot() {
  return (
    <div className='h-[350px] w-full bg-zinc-900 flex items-end justify-center'>
        <div className='h-[250px] w-[80%]  text-3xl   p-10  text-white'>
        <i class="ml-14 fa-brands fa-facebook"></i>
        <i class="ml-4 fa-brands fa-instagram"></i>
        <i class="ml-4 fa-brands fa-twitter"></i>
        <i class="ml-4 fa-brands fa-youtube"></i>
        <div className='flex gap-10 mt-6 text-base '>

        <ul className=' px-14'>
            <li>Audio Description</li>
            <li>Investors Relations</li>
            <li>Legal Notices</li>
            <li></li>
        </ul>
        <ul className=' px-14'>
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Cookie Preferences</li>
            <li></li>
        </ul>
        <ul className=' px-14'>
            <li>Gift Cards</li>
            <li>Terms of Use</li>
            <li>Corporate Information</li>
            <li></li>
        </ul>
        <ul className=' px-14'>
            <li>Madia Center</li>
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