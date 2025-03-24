import React from 'react'

function Navbar() {
  return (
   <div className='w-full'>
     <nav className=' w-[85%] z-50 mt-[2%]  p-[16px] rounded-[30px] h-[66px] items-center shadow-2xl  flex justify-between mx-auto'>
        <div>
            <span className='font-bold'>My</span><span>babu</span>
        </div>
        <div className='gap-x-[16px] flex'>
            <a href="">Services</a>
            <a href="">Work</a>
            <a href="">FAQs</a>
            <a href="">Contact Us</a>
        </div>
        <div>
            <button className='bg-[#45BF6F] text-[14px] text-white px-2 py-2 hover:cursor-pointer rounded-md'>Get Started</button>
        </div>
    </nav>
   </div>
  )
}

export default Navbar