import React from "react";
import img1 from "../assets/ants.webp";
import img2 from "../assets/cockroaches.webp";
import img3 from "../assets/mosquitoes.webp";
import img4 from "../assets/flies.webp";
import img5 from "../assets/spiders.webp";
import img6 from "../assets/bed-bugs.webp";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const Reviews = () => {
  const reviews = [
    {
      name: "Gulshan chauhdari",
      feedback:
        "Excellent service! The team was professional and resolved my pest issue efficiently.",
      rating: 5,
      img: `https://api.dicebear.com/5.x/initials/svg?seed='Gulshan chauhdari'`,
    },
    {
      name: "Nikhil Harshe",
      feedback:
        "Highly recommended! They provided eco-friendly solutions and great customer support.",
      rating: 4.5,
      img: `https://api.dicebear.com/5.x/initials/svg?seed='Nikhil Harshe'`,
    },
    {
      name: "Aman Gupta",
      feedback:
        "Amazing experience! They were timely, thorough, and affordable. Couldn't be happier!",
      rating: 5,
      img: `https://api.dicebear.com/5.x/initials/svg?seed='Aman Gupta'`,
    },
    {
      name: "Gulshan chauhdari",
      feedback:
        "Excellent service! The team was professional and resolved my pest issue efficiently.",
      rating: 5,
      img: `https://api.dicebear.com/5.x/initials/svg?seed='Gulshan chauhdari'`,
    },
    {
      name: "Nikhil Harshe",
      feedback:
        "Highly recommended! They provided eco-friendly solutions and great customer support.",
      rating: 4.5,
      img: `https://api.dicebear.com/5.x/initials/svg?seed='Nikhil Harshe'`,
    },
    {
      name: "Aman Gupta",
      feedback:
        "Amazing experience! They were timely, thorough, and affordable. Couldn't be happier!",
      rating: 5,
      img: `https://api.dicebear.com/5.x/initials/svg?seed='Aman Gupta'`,
    },
  ];

  return (
    <section className="bg-gray-100 py-10 px-44">
      <h2 className="text-center text-4xl font-bold text-green-700 mb-10">
        What Our Customers Say
      </h2>
      {/* <div className="flex flex-wrap gap-8 justify-center"></div> */}

      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 3000,
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
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper px-16"
      >
        {reviews.map((review, index) => (
          <SwiperSlide
            key={index}
            className="w-[22rem] bg-white rounded-lg shadow-lg p-5 hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-green-800 mb-3">
              {review.name}
            </h3>
            <p className="text-gray-600 mb-5">{review.feedback}</p>
            <div className="flex items-center gap-2">
              <img
                src={review.img}
                alt=""
                className="rounded-full h-10 w-10 "
              />
              <span className="text-yellow-500 text-lg">
                {"★".repeat(Math.floor(review.rating))}
              </span>
              <span className="text-gray-500 text-sm">
                ({review.rating} / 5)
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Reviews;
