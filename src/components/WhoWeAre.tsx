import React from 'react'
import whoWeAreImg from '../assests/whoWeAreImg.png'
import Image from 'next/image'
function WhoWeAre() {
  return (
    <div className='w-[85%] mx-auto mt-[5%]'>

          <div>
            <h1 className='text-[36px] font-semibold'>Who We Are ?</h1>
          </div>
          <div className='flex items-center gap-x-5'>
            <Image
            src={whoWeAreImg}
            alt='Who We are Image'
            style={{height:'480px',width:'400px'}}
            />
            <p className='text-[20px]'>
              At my babu , we believe that dealing with the government paperwork should not be a hassle
              .Founded with vision of simplifying bureaucracy for every Indian Citizen,our plateform 
              bridges the gap between you and experts who specialize in government processes. Our trusted
              network of kagzi shayak(paperwork assistant) are here to guide you every step of the way.
            </p>
          </div>

    </div>
  )
}

export default WhoWeAre