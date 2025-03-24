import React from 'react'
import SubmitImage from '../assests/Frame 26.png'
import ExpertImage from '../assests/Frame 27.png'
import AssitantImage from '../assests/Frame 28.png'
import ProgressImage from '../assests/Frame 29.png'
import OneImg from '../assests/OneImg.png'
import TwoImg from '../assests/TwoImg.png'
import ThreeImg from '../assests/ThreeImg.png'
import FourImg from '../assests/FourImg.png'
import Image from 'next/image'
function Work() {
  return (
    <div className='w-[85%] mx-auto mt-[3%]'>
        {/* heading div  */}
        <div>
            <h1 className='text-[36px]'>How Mybabu works?</h1>
        </div>
        {/* grid-4 div  */}
        <div className='grid-cols-4 grid mt-[2%] gap-x-[1%]'>
            {/* Submit your request card  */}
            <div>
                <Image
                src={SubmitImage}
                alt='submit-your-request-image'
                className='w-full'
                />
                <h1 className='flex items-center mt-[4%] gap-x-3 text-[18px] font-medium'> <Image src={OneImg} alt='1' /> Submit your Request:</h1>
                <p className='text-[14px] pl-[16%]'>Fill out simple online form describing your needs.Our Intutive Interface ensures  that you provide all the neccessary details right away.</p>
            </div>
            {/* Expert Matching card  */}
            <div>
                <Image
                src={ExpertImage}
                alt='submit-your-request-image'
                className='w-full'
                />
                <h1 className='flex items-center mt-[4%] gap-x-3 text-[18px] font-medium'> <Image src={TwoImg} alt='2' /> Expert Matching:</h1>
                <p className='text-[14px] pl-[16%]'>Our system automatically connects you with a vetted 'Kagzi Sahayak' who specializes in your required department.</p>
            </div>
            {/* Recive Assistant card  */}
            <div>
                <Image
                src={AssitantImage}
                alt='submit-your-request-image'
                className='w-full'
                />
                <h1 className='flex items-center mt-[4%] gap-x-3 text-[18px] font-medium'> <Image src={ThreeImg} alt='3' />Recieve Assistant:</h1>
                <p className='text-[14px] pl-[16%]'>Work with the assigned expert who will guide you through every step of your paper-work process-from document verification to submission. </p>
            </div>
            {/* Track Progress Card  */}
            <div>
                <Image
                src={ProgressImage}
                alt='submit-your-request-image'
                className='w-full'
                />
                <h1 className='flex items-center mt-[4%] gap-x-3 text-[18px] font-medium'> <Image src={FourImg} alt='4' />Track Your Progress:</h1>
                <p className='text-[14px] pl-[16%]'>Stay updated with the real time tracking on your application's status untill completion.</p>
            </div>
        </div>


    </div>
  )
}

export default Work