import React from 'react'

function HeroSection() {
  return (
    <div className=''>
        <div className='w-[762px] gap-[20px] text-center top-[136px] fixed left-[219px]'>
              <h1 className='text-[36px] text-[#004016]'>
                Your Personal Assistant for Hassle-Free 
                Government Paper
              </h1>
              <p className='mt-[2%]'>No more long queries , confusing forms , or endless frustration</p>
              <div className='mt-[4%]'>
                  <button className='bg-[#45BF6F] text-[14px] text-white px-2 py-2 hover:cursor-pointer rounded-md'>Get Started</button>
                  <button className='font-bold px-4'>How It Works</button>
              </div>
        </div>
    </div>
  )
}

export default HeroSection