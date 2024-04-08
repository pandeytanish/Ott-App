import React from 'react'

function Footer() {
  return (
    <>
    <div className='h-[400px] w-full  bg-black flex items-center justify-center  border-t-8 border-zinc-800'>
      <div className='h-[300px] w-[75%] '> 
      <p className='text-white px-5'>Questions? Call 000-800-919-1694</p>
      <div className='flex justify-between px-5 py-[30px] text-gray-300'>
      <ul className='leading-loose'>
        <li>FAQ</li>
        <li>Investor Relations</li>
        <li>Privacy</li>
        <li>Speed Test</li>
        <select className='h-[2rem] w-[8rem] rounded-md bg-black border border-white mt-4 hover:border-2 text-' >
                                <option>English</option>
                                <option>Hindi</option>
                            </select>
        <li>Netflix India</li>
      </ul>

      <ul className='leading-loose'>
        <li>Help Centre</li>
        <li>Jobs</li>
        <li>Cookie Preferences</li>
        <li>Legal Notices</li>

      </ul>
      <ul className='leading-loose'>
        <li>Account</li>
        <li>Ways to Watch</li>
        <li>Corporate Information</li>
        <li>Only on Netflix</li>

      </ul>
      <ul className='leading-loose'>
        <li>Media Centre</li>
        <li>Terms of Use</li>
        <li>Contact Us</li>
      </ul>
      </div>
      </div>
    </div>
    </>
  )
}

export default Footer