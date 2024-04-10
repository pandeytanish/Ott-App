import React from 'react'
import Login from '../Login/Login'

import { Link } from 'react-router-dom'

function Nav() {
  return (
    
   <div className=" flex items-center justify-between px-[150px] h-[100px] w-full bg-transparent  ">
<img className='h-[80px] w-[130px]' src='https://www.freepnglogos.com/uploads/netflix-logo-text-emblem-31.png'></img>
<div className=' flex gap-5 '>
<select className=' text-center rounded-md py-2  w-[10rem] bg-black text-white border-none font-bold '  >
<option >English</option>
<option >Hindi</option>
</select>
<Link to={'Login'}>
<button className='bg-red-600 py-2  rounded-md w-[5rem] text-white font-bold hover:bg-red-700'>Sign Up</button> </Link>
</div>


</div>
  )
}

export default Nav