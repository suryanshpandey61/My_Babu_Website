import React from 'react'
import ReactanlgeImg from '../assests/Rectangle 27.png'
import Image from 'next/image'
function Footer() {
  return (
    <div className='w-full'>
 
            <div className='w-[85%]'>
                    {/* left img div  */}
                    <div>
                        <Image
                        src={ReactanlgeImg}
                        alt='rectangle-image'
                        />
                    </div>
                    <div> 
                            {/* 1 col  */}
                            <div>
                                <h1>Quick Links</h1>
                                <a href="">Home</a>
                                <a href="">About Us</a>
                                <a href="">Services</a>
                                <a href="">How it Works</a>
                                <a href="">Contact Us</a>
                            </div>
                    </div>
            </div>

    </div>
  )
}

export default Footer