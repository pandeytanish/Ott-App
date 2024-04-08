import React from 'react'

function LoginPage() {
    return (
        <>
            <div className="  bg-cover bg-center  bg-[url('https://analyticsindiamag.com/wp-content/uploads/2019/05/apps.55787.9007199266246365.687a10a8-4c4a-4a47-8ec5-a95f70d8852d.jpg')]  ">
            <img className='h-[80px] w-[130px] ml-[170px]' src='https://www.freepnglogos.com/uploads/netflix-logo-text-emblem-31.png'></img>
                <div className='flex h-[105vh] w-full items-center justify-center mb-4 '>


                    <div className='h-[700px] w-[420px] bg-black bg-opacity-70 rounded-md '>
                        <div>
                      <h1 className='text-white  text-4xl font-bold pt-8 pl-10 pb-3'>Sign In</h1>
                      
                      <input className='border-red-700 border-2 rounded-md h-[3.5rem] w-[20rem] my-5 mx-10 pl-[15px] bg-black bg-opacity-70' placeholder='Email or Phone Number'></input>
                      <br></br>
                      <input className='border-red-700  border-2 rounded-md h-[3.5rem] w-[20rem] my-5 mx-10 pl-[15px] bg-black bg-opacity-70' placeholder='Password'></input>
                      <button className='h-[3rem] w-[20rem] rounded-md bg-red-600 hover:bg-red-700 my-5 mx-10 font-semibold text-lg  text-white'>Sign In</button>
                      <p className=' mx-[190px] text-lg text-slate-500 font-semibold'>OR</p>
                      <button className='h-[3rem] w-[20rem] rounded-md bg-zinc-400 bg-opacity-50 hover:bg-zinc-500 hover:bg-opacity-50 my-5 mx-10 font-semibold text-lg text-white'>Sign In With Google</button>
                       <a className=' text-white mx-[140px] hover:text-slate-400  '>Forgot Passoword?</a>
                       <p className='pt-5 pl-10 text-xl mb-2  text-white '><input className='form-checkbox h-[22px] w-[22px] mr-1 mt-' type="checkbox" />  Remember me</p>
                       <p className='pl-10 pt-2 text-base text-white'>New to Netflix? <a href="">Sign up now</a></p>
                       <p className='pl-10 pt-2 text-sm text-white'>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a>Learn more.</a></p>
                       </div>
                      </div>
                </div>

                {/* Login Footer */}
                <div className='h-[280px] w-full bg-black bg-opacity-70  flex  items-center justify-center'>
                    <div className='h-[200px] w-[85%]'>
                <p className='text-white px-14'>Questions? Call 000-800-919-1694</p>
                <div className=' flex justify-between px-5 mr-[250px] text-gray-300'>
                    <ul className='py-10 px-10 leading-loose'>
                        <li>FAQ</li>
                        <li>Cookie Preferences</li>
                        <li>
                            <select className='h-[2rem] w-[8rem] rounded-md bg-black border border-white mt-4 hover:border-2 ' >
                                <option>English</option>
                                <option>Hindi</option>
                            </select>

                        </li>
                    </ul>
                    <ul className='py-10 px-10 leading-loose'>
                        <li>Help Centre</li>
                        <li>Corporate Information</li>
                    </ul>
                    <ul className='py-10 px-10 leading-loose'>
                        <li>Term of Use</li>
                    </ul>
                    <ul className='py-10 px-10'>
                        <li>Privacy</li>
                    </ul>

                </div>
                </div>


                </div>

            </div>

        </>
    )
}

export default LoginPage