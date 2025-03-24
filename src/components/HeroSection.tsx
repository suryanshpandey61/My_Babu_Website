import React from 'react'
import Image from 'next/image'
import heroSectionUser from '../assests/heroSectionUser.png'
import rentAgreementImg from '../assests/RentAgreementImg.png'
import jobsAvailablebtn from '../assests/jobsAvailablebtn.png'
function HeroSection() {
  return (
    <div className='w-full'>
        <div className='w-[70%] mt-[5%] mx-auto  gap-[20px] text-center '>
              <h1 className='text-[36px] font-semibold text-[#004016]'>
                Your Personal Assistant for Hassle-Free 
                Government Paperwork
              </h1>
              <p className='mt-[2%]'>No more long queries , confusing forms , or endless frustration</p>
              <div className='mt-[4%]'>
                  <button className='bg-[#45BF6F] text-[14px] text-white px-2 py-2 hover:cursor-pointer rounded-md'>Get Started</button>
                  <button className='font-bold px-4'>How It Works</button>
              </div>
              <div className='mx-auto border mt-[6%] text-center flex justify-center'>
                <Image
                src={jobsAvailablebtn}
                alt='Jobs Available btn'
                style={{width:'140px',height:'44px'}}
                className='mt-[5%]'
                />
                <Image 
                src={heroSectionUser} 
                alt="User Image" 
                style={{height:'350px',width:'350px'}}
                className=''
                />
                <Image
                src={rentAgreementImg}
                alt='Rent Aggrement Image'
                style={{height:'255px',width:'265px'}}
                className='mt-[3%] right-[12%] relative'
                />
              </div>
        </div>
    </div>
  )
}

export default HeroSection