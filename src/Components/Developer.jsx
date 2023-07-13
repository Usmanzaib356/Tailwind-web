import React from 'react'
import terminal from  "../images/terminal.png"
function Developer() {
  return (
        <>
            <div className='w-full bg-black text-white'>
               <div className='max-w-[1280px] mx-auto  px-4 py-16 flex-wrap gap-6  flex justify-around items-center'>
                    <div >
                        <h1 className='fz'> Superpower off Defi Developers </h1>
                        <p className='fzp'>
                             Lorem ipsum <span className='blue'>dolor</span> , sit amet <span className='blue'>consectetur</span> adipisicing elit. Error molestiae eaque doloribus repudiandae quam dolorem!
                        </p>
                    </div>
                    <div className='flex justify-center '>
                          <img className='max-w-[250px] shadow-lg shadow-cyan-500/50' src={terminal} alt="" />
                    </div>
               </div>
            </div>
        </>
  )
}

export default Developer