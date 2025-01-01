import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

import img1 from "../assets/bajaj1.webp";
import img2 from "../assets/cpoint.jpg";
import img3 from "../assets/dlf.png";
import img4 from "../assets/krishm logor.png";
import img5 from "../assets/haldiram.svg";
import img6 from "../assets/train.webp";
import img7 from "../assets/sprs1.png";

const Logo = () => {
  const logos = [
    { src: img1, name: "bajaj1" },
    { src: img2, name: "C Point" },
    { src: img3, name: "DLF" },
    { src: img5, name: "Haldiram" },
    { src: img6, name: "Train" },
    { src: img7, name: "Pallonji" },
  ];

  return (
    <div className="w-full h-full text-center">
      <h1 className="text-3xl font-bold my-6 text-black py-3 pb-5">Our Partners</h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay]}
        // modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index} className=" h-full flex items-baseline justify-center px-[3.5rem] pb-[1.5rem]  ">
            <img
              src={logo.src}
              alt={logo.name}
              width={300}
              className="  object-contain  transition-transform duration-300 hover:scale-105"
            />
            {/* <p className="mt-1 text-sm font-semibold text-black">{logo.name}</p> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Logo;
