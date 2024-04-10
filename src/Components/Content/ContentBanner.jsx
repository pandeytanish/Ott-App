import React from 'react'
import ContentNav from './ContentNav'
import Popular from './Categories/Popular'
import India from './Categories/India'
import OnlyNetflix from './Categories/OnlyNetflix'
import UsTv from './Categories/UsTv'
import Comedy from './Categories/Comedy'
import Crime from './Categories/Crime'
import IndiaCrime from './Categories/IndiaCrime'
import Hindi from './Categories/Hindi'
import Hollywood from './Categories/Hollywood'
import Horro from './Categories/Horro'
import Lestyear from './Categories/LestYear'
import NewReleases from './Categories/NewReleases'
import ContentFoot from './ContentFoot'

function ContentBanner() {
  return (
    <>
     
        <div className='h-full w-full bg-black '>
          <div className="h-[880px] w-full bg-cover bg-[url('https://occ-0-6245-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABQYZjgI7-_7XV53UgeXt9LOW8TLjGGnJOsLU3S2oYnbO2YNUquxOKdyZFo9HTRYKQ6O3zlxgGAfuR0jLtjsNj1DFiQxtX1Qlj-MX.webp?r=d90')]">
            <ContentNav />
            <div className='mr-6'>
              <img className='h-[250px] w-[500px] ml-[70px] mt-[120px]' src="https://occ-0-6245-2186.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABSazyOyiRcIWcMe6arz20Tw32FO_h6KFS8U4j4eqkZIxorrpFoeS1zg6lQHoFLJm8fMwMW7Y-MAuUBSUNN0GljRKVLVFr1iu9KwVJcn31tCLaYn3xihvWg_tPnJSstkecucOsAAwWrCLhHgT--KuwxEXnMcl191eSost0zV17Spi3Wrkvw5ZNQ.webp?r=f8c" />
              <h1 className='text-white font-bold pt-2 text-lg pl-[70px] '>Sara Ali Khan, Vijay Varma, Sanjay Kapoor and Karisma Kapoor join <br></br> Pankaj Tripathi in this quirky Delhi club.</h1>
              <div className='flex gap-4 ml-16 mt-20'>
                <button className='h-[45px] w-[7rem] rounded-md bg-white hover:bg-opacity-70 text-black'><i class="fa-solid fa-play"></i> Play</button>
                <button className='h-[45px] w-[11rem] rounded-md bg-zinc-500 bg-opacity-90 hover:bg-opacity-50 text-white'><i class="fa-solid fa-circle-info"></i> More Info</button>
              </div>
              <Popular />
            </div>
          </div>
          <India />
          <Comedy />
          <Crime />
          <Hindi />
          <Hollywood />
          <Horro />
          <IndiaCrime />
          <Lestyear />
          <NewReleases />
          <OnlyNetflix />
          <UsTv />
          <ContentFoot/>
        </div>
    </>
  )
}

export default ContentBanner