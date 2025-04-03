'use client';
import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full border border-black sm:ml-6">
      <nav className="w-[85%] z-50 mt-[2%] p-[16px] rounded-[30px] h-[66px] items-center shadow-2xl flex justify-between mx-auto bg-white">
        {/* Logo */}
        <div>
          <a href="#hero-section" className="text-xl font-bold text-gray-800">
            <span className="font-bold">My</span><span>babu</span>
          </a>
        </div>

        {/* Hamburger Icon (Visible on Mobile) */}
        <div className="md:hidden flex items-center" onClick={toggleMenu}>
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </div>

        <div className="hidden md:flex gap-x-4 items-center">
          <a href="#services" className="text-gray-800 hover:text-green-600">Services</a>
          <a href="#work" className="text-gray-800 hover:text-green-600">Work</a>
          <a href="#faq" className="text-gray-800 hover:text-green-600">FAQs</a>
          <a href="#contactus" className="text-gray-800 hover:text-green-600">Contact Us</a>
         
        </div>
      

        {/* Navigation Links (Hidden on Mobile) */}
        <div className="hidden md:flex gap-x-4 items-center">
        
          <button className="bg-[#45BF6F] text-white px-4 py-2 rounded-md hover:bg-green-600">
            Get Started
          </button>
        </div>
      </nav>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="md:hidden w-[85%] mx-auto bg-white shadow-md rounded-lg p-4 absolute top-[66px] left-0 right-0 z-40">
          <a href="#services" className="block py-2 text-center text-gray-800 hover:text-green-600">Services</a>
          <a href="#work" className="block py-2 text-gray-800 text-center hover:text-green-600">Work</a>
          <a href="#faq" className="block py-2 text-gray-800 text-center hover:text-green-600">FAQs</a>
          <a href="#contactus" className="block py-2 text-gray-800 text-center hover:text-green-600">Contact Us</a>
          <button className="w-full bg-[#45BF6F] text-white px-4 text-center py-2 rounded-md hover:bg-green-600 mt-2">
            Get Started
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
