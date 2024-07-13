"use client";

import React, { useState } from "react";

import ArrowImg from "../../public/shape.svg";
import Image from "next/image";

const Header = () => {
  const [openHamburger, setOpenHamburger] = useState(false);

  const handleOpen = () => {
    setOpenHamburger(!openHamburger);
  };
  return (
    <div className="fixed w-full">
      <div className="md:my-[12px] bg-white md:w-[98%] mx-auto">
        <div className="px-12 py-6 md:py-8 flex justify-between items-center ">
          <div className="hidden md:flex gap-4 text-sm font-normal">
            <span>About</span>
            <span>News</span>
            <span>Services</span>
            <span>Our Team</span>
            <span>Make Enquiry</span>
          </div>
          <div>
            <button className="bg-button flex gap-4 items-center text-black py-2 px-4 text-sm font-normal border-black border">
              Contact Us
              <Image src={ArrowImg} alt="arrow" />
            </button>
          </div>
          <a
            onClick={handleOpen}
            className={`hamburger p-3 bg-hamburger-gray md:hidden ${
              openHamburger ? "open" : ""
            }`}
          >
            <span className="w-5 h-[2px] block bg-black transition-all duration-300 ease-in-out mb-1"></span>
            <span className="w-5 h-[2px] block bg-black transition-all duration-300 ease-in-out mb-1"></span>
            <span className="w-5 h-[2px] block bg-black transition-all duration-300 ease-in-out"></span>
          </a>
        </div>
        <div
          className={`md:hidden absolute w-full bg-hamburger-gray text-black justify-center items-center flex-col gap-2 ${
            openHamburger ? "flex" : "hidden"
          }`}
        >
          <div className="p-2">About</div>
          <div className="p-2">News</div>
          <div className="p-2">Services</div>
          <div className="p-2">Our Team</div>
          <div className="p-2">Make Enquiry</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
