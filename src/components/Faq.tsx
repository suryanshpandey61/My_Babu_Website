import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import topLeft from '../assests/topLeft.png'
import topRight from '../assests/topRight.png'
import bottomleft from '../assests/bottomLeft.png'
import bottomright from '../assests/bottomRight.png'

function Faq() {
  return (
    <div className="w-[100%] mt-[4%] flex flex-col items-center justify-center">
      <div className="text-[36px] font-semibold">
        Frequently Asked Questions
      </div>
      <div className="w-[60%] mt-[2%]">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="bg-[#C5ECFA] rounded-xl p-2">
            <AccordionTrigger className="text-[20px] text-[#004016]">
              What is MyBabu?
            </AccordionTrigger>
            <AccordionContent className="text-[16px] text-[#173048]">
              MyBabu is an online platform that connects you with experts to
              help you complete government paperwork accurately and efficiently
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-2"
            className="bg-[#C5ECFA] rounded-xl p-2 mt-[2%]"
          >
            <AccordionTrigger className="text-[20px] text-[#004016]">
              Who are the babus
            </AccordionTrigger>
            <AccordionContent className="text-[16px] text-[#173048]">
              They are experienced professionals with a deep understanding of
              various government procedures. They are not government employees
              but trusted freelancers dedicated to making the process easier for
              you.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-3"
            className="bg-[#C5ECFA] rounded-xl p-2 mt-[2%]"
          >
            <AccordionTrigger className="text-[20px] text-[#004016]">
              How do I get started
            </AccordionTrigger>
            <AccordionContent className="text-[16px] text-[#173048]">
              Simply sign up on our platform, submit your request, and get
              matched with the right expert who can guide you through the
              process
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-4"
            className="bg-[#C5ECFA] rounded-xl p-2 mt-[2%]"
          >
            <AccordionTrigger className="text-[20px] text-[#004016]">
              Is my data secure?
            </AccordionTrigger>
            <AccordionContent className="text-[16px] text-[#173048]">
              Absolutely. We take your privacy and data security very seriously,
              employing robust security measures to protect your information
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      {/* input form div  */}
      <div className="w-[85%]  mx-auto bg-[#173E33] mt-[4%] rounded-xl">
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
        <form action="" className="w-[59%] mx-auto ">
            {/* email &  phone number input  */}
          <div className="flex gap-x-2 mt-[4%]">
            <div className="bg-[#48C070] rounded-xl w-[48%]">
              <input type="text" placeholder="Email" className="text-white p-1 text-[24px] pl-2 font-medium" />
            </div>
            <div className="bg-[#48C070] rounded-xl w-[48%]">
              <input type="text" placeholder="Phone Number" className="text-white p-1 text-[24px] pl-2 font-medium"/>
            </div>
          </div>
        
        </form>
        <div className="flex pb-[5%] w-full">
         <Image
          src={bottomleft}
          alt="bottom-left"
          className=""
          />
          <div className="bg-[#48C070] rounded-xl  mt-[2%]">
            <input type="text" placeholder="Address"  className="text-white p-4 text-[24px] pl-2 font-medium"/>
          </div>
          <Image
          src={bottomright}
          alt="bottom-right"
          className=""
          />
         </div>
      </div>
    </div>
  );
}

export default Faq;
