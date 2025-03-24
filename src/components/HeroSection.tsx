import React from 'react'
import Image from 'next/image'
import heroSectionUser from '../assests/heroSectionUser.png'
import rentAgreementImg from '../assests/rentAgreementImg.png'
import jobsAvailablebtn from '../assests/jobsAvailablebtn.png'
import dottedLineImg from '../assests/dottedLineImg.png'
import online from '../assests/onlineApplicationImg.png'
import call from '../assests/call.png'
import graph from '../assests/graph.png'
function HeroSection() {
  return (
    <div className='w-full'>
        <div className='w-[70%]  mt-[5%] mx-auto  gap-[20px] text-center '>
              <h1 className='text-[36px] font-semibold text-[#004016]'>
                Your Personal Assistant for Hassle-Free 
                Government Paperwork
              </h1>
              <p className='mt-[2%]'>No more long queries , confusing forms , or endless frustration</p>
              <div className='mt-[4%]'>
                  <button className='bg-[#45BF6F] text-[14px] text-white px-2 py-2 hover:cursor-pointer rounded-md'>Get Started</button>
                  <button className='font-bold px-4'>How It Works</button>
              </div>
              <div className='mx-auto  mt-[6%] text-center flex justify-center'>
                <Image
                src={jobsAvailablebtn}
                alt='Jobs Available btn'
                style={{width:'140px',height:'44px'}}
                className='mt-[8%] left-[18%] relative'
                />
                <Image
                src={dottedLineImg}
                alt='dooted-line-image'
                className='absolute mt-[2.5%]'
                />
                <Image 
                src={heroSectionUser} 
                alt="User Image" 
                style={{height:'410px',width:'410px'}}
                className='relative  -right-[4%]'
                />
                <Image
                src={rentAgreementImg}
                alt='Rent Aggrement Image'
                style={{height:'300px',width:'300px'}}
                className='mt-[3%] right-[9.5%] relative'
                />
              </div>
        </div>
        <div className='w-[85%] mt-[5%] mx-auto flex gap-x-[10px]'>
           <button className='flex bg-[#EFEFEF] text-[12px] text-[#004016] p-2 gap-x-[10px] rounded-xl items-center'><Image style={{height:'24px',width:'24px'}} src={online} alt='online-img'/>Online Application</button>
           <button className='flex bg-[#EFEFEF] text-[12px] text-[#004016] p-2 gap-x-[10px] rounded-xl items-center'><Image style={{height:'24px',width:'24px'}} src={call} alt='online-img'/>24/7 Support</button>
           <button className='flex bg-[#EFEFEF] text-[12px] text-[#004016] p-2 gap-x-[10px] rounded-xl items-center'><Image style={{height:'24px',width:'24px'}} src={graph} alt='online-img'/>Expedicted Processing</button>
        </div>
    </div>
  )
}

export default HeroSection