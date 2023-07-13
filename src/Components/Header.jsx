import React, { useState } from 'react'
// import {AiOutLineMenu,AiOutLineClose} from "react-icons/ai"
function Header() {
  const [nav, setNav] = useState(false)

  const handleNav = (e) => {
    e.preventDefault()
    setNav(!nav)
    
  }
  return (
    <>
      <div className='w-full h-[90px] bg-black'>
        <div className='max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full'>
          <div className='text-[#00d8ff]'>
            <h1 className='fz'>DEFI</h1>
          </div>
          <div className='hidden md:flex'>
            <ul className='flex text-white items-center gap-5'>
              <li><a href="">Plateform</a></li>
              <li><a href="">Developers</a></li>
              <li><a href="">Community</a></li>
              <li><a href="">About</a></li>
              <button className='ml-4' >
                Use Defi
              </button>
            </ul>

          </div>
          {/*  toggler button */}
          <div className='block md:hidden' onClick={handleNav} >


            {nav ? (<a href="" className='text-white'>
                <svg className="w-6 h-6  dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
              </a>)
              : (<a className='text-white'>
                <svg className="w-6 h-6  dark:text-white" ariahdden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.75 4H19M7.75 4a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 4h2.25m13.5 6H19m-2.25 0a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 10h11.25m-4.5 6H19M7.75 16a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 16h2.25" />
                </svg>
              </a>)}



          </div>
          {/* Mobile menu */}
          <div className={nav ? 'w-full bg-black text-white absolute top-[90px] left-0  flex justify-center text-center  md:hidden ' : "absolute left-[-100%]"}>
            <ul className=' flex flex-col gap-5'>
              <li><a href="" className='sm:text-2xl fz'>Plateform</a></li>
              <li><a href="" className='sm:text-2xl fz'>Developers</a></li>
              <li><a href="" className='sm:text-2xl fz'>Community</a></li>
              <li><a href="" className='sm:text-2xl fz'>About</a></li>
              <button className='m-7' >
                Use Defi
              </button>
            </ul>

          </div>


        </div>
      </div>
    </>
  )
}

export default Header