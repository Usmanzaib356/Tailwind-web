import React from 'react'

function Subcribe() {
  return (
    <>
    <div className='w-full px-4 py-16 bg-black text-center text-white'>
         <h1 className='fz'> Join our DeFi Community  </h1>
         <div className='py-4'>
            <input className='sm:p-3 inp rounded-3xl mr-4 text-black' type="email" placeholder='Input your email'  />
            <button className='btnnn'> Sign Up </button>
         </div>
         <div className='flex justify-center  py-2 gap-3  '>
             <input  type='checkbox' className='check' />
             <p className='fzp'> Yes, I agree to receive email communications from Defi. </p>
         </div>
    </div>
    </>
  )
}

export default Subcribe