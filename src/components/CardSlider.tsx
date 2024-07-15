"use client";

// Import Swiper styles
import "swiper/css";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";

const CardSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderImages = [
    {
      img: "https://images.unsplash.com/photo-1720649870436-5e772e52b830?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      mainText: "Slide 1",
      subText: "Sub text lorem ipsum 1",
    },
    {
      img: "https://images.unsplash.com/photo-1720706405494-e552f264dd8d?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      mainText: "Slide 2",
      subText: "Sub text lorem ipsum 2",
    },
    {
      img: "https://images.unsplash.com/photo-1720629949851-c866f31476bc?q=80&w=2016&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      mainText: "Slide 3",
      subText: "Sub text lorem ipsum 3",
    },
    {
      img: "https://images.unsplash.com/photo-1720789051356-563d1931eec6?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      mainText: "Slide 4",
      subText: "Sub text lorem ipsum 4",
    },
    {
      img: "https://images.unsplash.com/photo-1720766255393-60ca5199def4?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      mainText: "Slide 5",
      subText: "Sub text lorem ipsum 5",
    },
    {
      img: "https://images.unsplash.com/photo-1720670364327-d969eb1094c3?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      mainText: "Slide 6",
      subText: "Sub text lorem ipsum 6",
    },
  ];
  return (
    <div className="my-10 overflow-visible">
      <div className="flex flex-col items-center mb-10 gap-10">
        <h1 className="text-2xl font-normal">Quality Products</h1>
        <p className="text-sm font-normal w-3/4 md:w-1/2 text-center text-subtext">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={35}
        grabCursor={true}
        initialSlide={1}
        className="gap-52"
        // loop={true}
        // centeredSlidesBounds={true}
        onActiveIndexChange={(val) => setActiveIndex(val.activeIndex)}
      >
        {sliderImages.map((each, index) => (
          <SwiperSlide
            key={each.mainText}
            className={`${activeIndex === index && "active-slide"} ${
              activeIndex - 1 === index && "previous-slide"
            } ${activeIndex + 1 === index && "next-slide"} slider`}
          >
            <Image
              src={each.img}
              width={0}
              height={0}
              sizes="100vh"
              className=" w-full h-[200px] md:h-[500px] object-cover"
              alt="img"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex flex-col items-center mt-6">
        <h1 className="text-lg">{sliderImages[activeIndex].mainText}</h1>
        <p className="text-sm text-subtext">
          {sliderImages[activeIndex].subText}
        </p>
      </div>
    </div>
  );
};

export default CardSlider;
