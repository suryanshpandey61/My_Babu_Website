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
                        
                    </div>
            </div>

    </div>
  )
}

export default Footer