"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

import HeroBg1 from "../../public/hero-bg.png";
import HeroBg2 from "../../public/hero-bg-2.jpg";
import HeroBg3 from "../../public/hero-bg-3.jpg";
import HeroBg4 from "../../public/hero-bg-4.jpg";
import HeroBg5 from "../../public/hero-bg-5.jpg";
import Image from "next/image";

const Hero = () => {
  const imageArray = [HeroBg1, HeroBg2, HeroBg3, HeroBg4, HeroBg5];
  const [imgActiveIndex, setImgActiveIndex] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      navigateNext();
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [imgActiveIndex]);

  const navigateNext = () => {
    setImgActiveIndex((imgActiveIndex + 1) % imageArray.length);
  };

  return (
    <div
      className={`relative w-full h-[100vh] flex items-start justify-center flex-col overflow-hidden`}
    >
      <AnimatePresence>
        <motion.div
          key={imgActiveIndex}
          initial={{ height: "0" }}
          animate={{ height: "100vh" }}
          exit={{ height: "101vh" }}
          transition={{
            height: {
              bounce: 0,
              duration: 1.5,
            },
          }}
          className="w-full h-full absolute -z-10"
        >
          <Image
            src={imageArray[imgActiveIndex]}
            width={0}
            height={0}
            sizes="100vh"
            className="w-full h-full object-cover"
            alt="img"
          />
        </motion.div>
      </AnimatePresence>
      <p className="text-base text-white font-normal w-full md:w-3/4 pl-[10%] pb-3">
        Welcome To TenTwenty Farms
      </p>
      <h1 className="text-6xl text-white font-normal w-full md:w-3/4 pl-[10%] capitalize">
        From our Farms to your hands
      </h1>

      <div className="absolute bottom-[5%] left-[10%]">
        <div
          className="border border-gray-500 p-4 relative cursor-pointer"
          onClick={navigateNext}
        >
          <Image
            height={0}
            width={0}
            sizes="100vh"
            className="w-24 h-24 object-cover"
            src={imageArray[(imgActiveIndex + 1) % imageArray.length]}
            alt="thumbnail"
          />
          <span className="text-white text-sm font-normal absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            Next
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
