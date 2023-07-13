import React from 'react'
import video from "../images/video.mp4"
function Hero() {
  return (
    <>

      <div className='w-full h-[90vh] top-[90px] '>
        <video className='object-cover h-full w-full absolute -z-10' src={video} autoPlay loop muted />
        <div className=' flex flex-col  justify-center items-center w-full h-[90%] text-center text-white '>
          <h1 className='fz' >Decentralized</h1>
          <h1 className='py-2 pdm fz'>  <span className='blue'>Trading</span> Protocol</h1>
          <p className='sm:text-xl pdm py-4 fzp '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, veritatis?</p>
          <div className=''>
            <button className='m-2 '>
              use Defi
            </button>
            <button className='m-2'>
              FAQ
            </button>
          </div>
        </div>
        <div>
          <p className='text-center text-white sm:text-2xl sm:font-bold fz '> Total Volume Scured @420000 </p>

        </div>
      </div>


    </>
  )
}

export default Hero