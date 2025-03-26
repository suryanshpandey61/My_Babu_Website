import React from 'react'
import ReactanlgeImg from '../assests/Rectangle 27.png'
import Image from 'next/image'
function Footer() {
  return (
    <div className='w-full'>
 
            <div className='w-[85%] mx-auto mt-[6%] flex justify-between'>
                    {/* left img div  */}
                    <div>
                        <Image
                        src={ReactanlgeImg}
                        alt='rectangle-image'
                        />
                    </div>
                    <div className='flex w-[50%] justify-evenly'> 
                            {/* 1 col  */}
                            <div className='flex flex-col'> 
                                <h1 className='leading-[28px]'>Quick Links</h1>
                                <a href="">Home</a>
                                <a href="">About Us</a>
                                <a href="">Services</a>
                                <a href="">How it Works</a>
                                <a href="">Contact Us</a>
                            </div>
                            {/* 2 col  */}
                            <div className='flex flex-col'>
                                    <h1>Socials</h1>
                                    <a href="">X</a>
                                    <a href="">Linked In</a>
                                    <a href="">Facebook</a>
                                    <a href="">Instagram</a>
                            </div>
                            {/* 3 col  */}
                            <div className='flex flex-col'>
                                <h1>Legal</h1>
                                <h2>Privacy Policy</h2>
                                <h2>Terms & Conditions</h2>
                            </div>
                    </div>
            </div>

    </div>
  )
}

export default Footer