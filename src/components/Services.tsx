import React from "react";

function Services() {
  return (
    <div className="w-[85%] mx-auto bg-[#182D36] mt-[4%]">
      <div className="w-[80%] mx-auto">
        {/* heading div  */}
        <div className="text-center">
          <h1 className="text-[36px] font-medium text-white">Services</h1>
        </div>
        {/* text div  */}
        <div className="text-center text-white font-normal text-[20px]">
          <p>
            Mybabu Offers a range of services tailored to your needs.Our experts
            help you with
          </p>
        </div>
        <div>
            {/* Document assistant card  */}
            <div>
                <h1>Document Assistant</h1>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
