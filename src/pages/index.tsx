import Navbar from "@/components/Navbar";
import React from "react";
import "../app/globals.css";
import { Poppins } from "next/font/google";
import HeroSection from "@/components/HeroSection";
import Work from "@/components/Work";
import WhoWeAre from "@/components/WhoWeAre";
import Services from "@/components/Services";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import ContactUs from "@/components/ContactUs";

const poppins = Poppins({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
});

function index() {
  return (
    <div className={poppins.className} 
    style={{width:"100vw",border:"16px solid black"}}
    >
      <Navbar/>
      <HeroSection />
     
      <div id="work">
        <Work />
      </div>
      <div id="who-we-are">
        <WhoWeAre />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="faq">
        <Faq />
      </div>
      <div id="contactus">
        <ContactUs/>
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}

export default index;
