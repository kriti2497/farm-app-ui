"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

import ArrowImg from "../../public/shape.svg";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [openHamburger, setOpenHamburger] = useState(false);

  const handleOpen = () => {
    setOpenHamburger(!openHamburger);
  };
  return (
    <div className="fixed w-full z-20">
      <div className="md:my-[12px] bg-white md:w-[98%] mx-auto z-10">
        <div className="px-12 py-6 md:py-8 flex justify-between items-center ">
          <div className="hidden md:flex gap-4 text-sm font-normal">
            <Link href="#">About</Link>
            <Link href="#">News</Link>
            <Link href="#">Services</Link>
            <Link href="#">Our Team</Link>
            <Link href="#">Make Enquiry</Link>
          </div>
          <div>
            <button className="bg-button flex gap-4 items-center text-black py-2 px-4 text-sm font-normal border-black border">
              Contact Us
              <Image src={ArrowImg} alt="arrow" />
            </button>
          </div>
          <div
            onClick={handleOpen}
            className={`hamburger p-3 bg-hamburger-gray md:hidden cursor-pointer ${
              openHamburger ? "open" : ""
            }`}
          >
            <span className="w-5 h-[2px] block bg-black transition-all duration-300 ease-in-out mb-1"></span>
            <span className="w-5 h-[2px] block bg-black transition-all duration-300 ease-in-out mb-1"></span>
            <span className="w-5 h-[2px] block bg-black transition-all duration-300 ease-in-out"></span>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {openHamburger && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: {
                duration: 0.5,
              },
            }}
            className={`md:hidden absolute w-full bg-hamburger-gray text-black text-sm font-normal justify-center items-center flex-col gap-2 flex`}
          >
            <Link href="#" className="p-2">
              About
            </Link>
            <Link href="#" className="p-2">
              News
            </Link>
            <Link href="#" className="p-2">
              Services
            </Link>
            <Link href="#" className="p-2">
              Our Team
            </Link>
            <Link href="#" className="p-2">
              Make Enquiry
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
