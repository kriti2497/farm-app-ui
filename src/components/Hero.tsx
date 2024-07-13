"use client";

import React, { useEffect, useState } from "react";

import HeroBg1 from "../../public/hero-bg.png";
import HeroBg2 from "../../public/hero-bg-2.jpg";
import HeroBg3 from "../../public/hero-bg-3.jpg";
import HeroBg4 from "../../public/hero-bg-4.jpg";
import HeroBg5 from "../../public/hero-bg-5.jpg";
import Image from "next/image";

const Hero = () => {
  const imageArray = [
    HeroBg1,
    HeroBg2,
    HeroBg3,
    HeroBg4,
    HeroBg5,

    // "bg-farm-bg-1",
    // "bg-farm-bg-2",
    // "bg-farm-bg-3",
    // "bg-farm-bg-4",
    // "bg-farm-bg-5",

    // "url('../../public/hero-bg.png')",
    // "url('../../public/hero-bg-2.jpg')",
    // "url('../../public/hero-bg-3.jpg')",
    // "url('../../public/hero-bg-4.jpg')",
    // "url('../../public/hero-bg-5.jpg')",
  ];
  const [imgActiveIndex, setImgActiveIndex] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      setImgActiveIndex((imgActiveIndex + 1) % imageArray.length);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [imgActiveIndex]);

  return (
    <div
      className={`relative w-full h-[100vh] bg-no-repeat bg-cover flex items-start justify-center flex-col`}
    >
      <Image
        src={imageArray[imgActiveIndex]}
        width={0}
        height={0}
        sizes="100vh"
        className="w-full h-full bg-cover absolute -z-10"
        alt="img"
      />
      <p className="text-base text-white font-normal w-full md:w-3/4 pl-[10%] pb-3">
        Welcome To TenTwenty Farms
      </p>
      <h1 className="text-6xl text-white font-normal w-full md:w-3/4 pl-[10%] capitalize">
        From our Farms to your hands
      </h1>

      <div className="absolute bottom-0 left-0">
        <Image
          height={100}
          width={100}
          className="bg-cover"
          src={imageArray[(imgActiveIndex + 1) % imageArray.length]}
          alt="thumbnail"
        />
      </div>
    </div>
  );
};

export default Hero;
