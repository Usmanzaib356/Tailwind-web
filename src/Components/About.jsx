import React from 'react'
import Aboutcards from './Aboutcards'

function About() {
  return (
    <>
      <section className='bg-black w-full'>
        <div className='max-w-[1240px] mx-auto px-4 py-16 text-white text-center'>
          <h1 className='fz'> A Growing Protocol Ecosystem </h1>
          <p className='fzp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae repellendus dolores molestias maxime. Eaque et consequuntur tenetur unde eius velit quae quisquam sapiente exercitationem atque.</p>

          {/* cards coontainer */}
          <div className='grid  sm:grid-cols-2  lg:grid-cols-4 gap-4 py-16'>

            <Aboutcards />
          </div>


          <div className=' items-center'>
            <button >
              Use Defi
            </button>
          </div>



        </div>
      </section>
    </>
  )
}

export default About