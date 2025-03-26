import React from 'react'
import Image from "next/image";
import topLeft from '../assests/topLeft.png'
import topRight from '../assests/topRight.png'
import bottomleft from '../assests/bottomLeft.png'
import bottomright from '../assests/bottomRight.png'

function ContactUs() {
  return (
    <div>{/* input form div  */}
    <div className="w-[85%] mx-auto bg-[#173E33] mt-[4%] rounded-xl">
      <div className="flex w-[80%] mx-auto justify-between">
      <Image
          src={topLeft}
          alt="top=left-gradient"
          className=""
          />
      <Image
        src={topRight}
        alt="top-right image"
        className=""
        />
      </div>
      {/* heading div  */}
      <div className="w-[70%] mx-auto  text-center">
         
        <h1 className="text-[32px] -mt-2 text-white">
          Have Question or need furthur assistant? Reach out to us-we are here
          to help!
        </h1>
        
      </div>
      <div  className="mt-[2%]">
        <p className="text-[24px] text-white mx-auto text-center">
          Fill out the form below, and out team will respond as soon as
          possible
        </p>
      </div>
       
      
      <div className="w-[99%] justify-center  mt-4 flex gap-x-2 mx-auto">
        <input type="text" placeholder="Email" className="bg-[#48C070] text-[24px] rounded-md p-1 text-white"/>
        <input type="text"  placeholder="Phone Number" className="bg-[#48C070] text-[24px] rounded-md p-1 text-white"/>
       </div>
      

       <div className="w-full ml-[0.5%]   justify-evenly mt-[2%] pb-[5%] flex">
        <Image
        src={bottomleft}
        alt="bottom-left-gradient"
        className="relative -top-[40px]"
        />
        <input type="text" name="" id="" placeholder="Address" className="bg-[#48C070]  w-[66%]  text-[24px] rounded-md p-1 text-white"/>
        <Image
        src={bottomright}
        alt="bottom-right-gradient"
        className="relative -top-[40px]"
        />
       </div>
     
      
     
    </div></div>
  )
}

export default ContactUs