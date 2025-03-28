import Image from "next/image";
import React from "react";
import documentVerificationImg from "../assests/DocumentAssistantImg.png";
import processConsultatinImg from "../assests/ProcessConsultationImg.png";
import personalizedImg from "../assests/PersonalizedSupportImg.png";
import applicationReview from "../assests/ApplicationReviewImg.png";

function Services() {
  return (
    <div className="lg:w-[85%] w-[90%]  rounded-3xl mx-auto bg-[#182D36] md:mt-[8%] lg:mt-[4%]">
      <div className="lg:w-[85%] w-[95%] mx-auto">
        {/* heading div  */}
        <div className="text-center ">
          <h1 className="text-[36px] pt-[3%] font-medium text-white">
            Services
          </h1>
        </div>
        {/* text div  */}
        <div className="text-center text-white font-normal lg:mt-0 md:mt-[3%] text-[20px]">
          <p>
            Mybabu Offers a range of services tailored to your needs.Our experts
            help you with
          </p>
        </div>
       {/* 4  cards div  */}
        <div className="mx-auto pb-[5%] lg:w-[90%] w-[97%] lg:mt-[2%] mt-[9%]">
          {/* top 2 cards  */}
          <div className="flex  gap-x-4">
            {/* Document assistant card  */}
            <div className="bg-[#FDF2D7] p-3  rounded-xl w-[45%] ">
              <h1 className="text-[16px] font-medium">Document Assistant</h1>
              <p className="text-[14px]">
                Guidance of filling out forms,ensuring all required documents
                are complete, and avoiding common mistakes.
              </p>
              <Image
                src={documentVerificationImg}
                alt="document assistant image"
                className="mx-auto relative top-3"
              />
            </div>
            {/* Process Consultation card  */}
            <div className="bg-[#FDF2D7] p-3 rounded-xl w-[60%]">
              <h1 className="text-[16px] font-medium">Process Consultation</h1>
              <p className="text-[14px]">
                Step by step instructions on navigation government
                procedures,Including,Permits and Registration
              </p>
              <Image
                src={processConsultatinImg}
                alt="process consultation image"
                className="mx-auto relative top-5.5"
              />
            </div>
          </div>
          {/* bottom 2 Cards  */}
          <div className="flex mt-[2%] gap-x-4">
            {/* Application Review card  */}
            <div className="bg-[#FDF2D7] p-3 rounded-xl w-[60%]">
              <h1 className="text-[16px] font-medium">Application Review</h1>
              <p className="text-[14px]">
                Expert verification and corrections of your paperwork to increase the success
                rate of your applications.
              </p>
              <Image
                src={applicationReview}
                alt="process consultation image"
                className="relative lg:top-3 md:top-11"
              />
            </div>
            {/* Personalized Support  card  */}
            <div className="bg-[#FDF2D7] p-3  rounded-xl w-[45%] ">
              <h1 className="text-[16px] font-medium">Personalized Support</h1>
              <p className="text-[14px]">
                 One-one support via chat or in-person (as per location availability)
                 to answer your queries and provide timely assistance.
              </p>
              <Image
                src={personalizedImg}
                alt="document assistant image"
                className="relative lg:w-[150px] md:top-3 md:w-[180px]  lg:left-[57%] rounded-xl lg:top-[11.5%]"
              />
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
