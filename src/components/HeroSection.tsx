import React from 'react'
import Image from 'next/image'
import heroSectionUser from '../assests/heroSectionUser.png'
function HeroSection() {
  return (
    <div className='w-full'>
        <div className='w-[90%] gap-[20px] text-center '>
              <h1 className='text-[36px] text-[#004016]'>
                Your Personal Assistant for Hassle-Free 
                Government Paper
              </h1>
              <p className='mt-[2%]'>No more long queries , confusing forms , or endless frustration</p>
              <div className='mt-[4%]'>
                  <button className='bg-[#45BF6F] text-[14px] text-white px-2 py-2 hover:cursor-pointer rounded-md'>Get Started</button>
                  <button className='font-bold px-4'>How It Works</button>
              </div>
              <div>
                <Image src={heroSectionUser} alt="User Image"/>
              </div>
        </div>
    </div>
  )
}

export default HeroSection