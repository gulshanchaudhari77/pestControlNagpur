import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const Reviews = () => {
  const reviews = [
    {
      name: "Gulshan Chauhdari",
      feedback:
        "Excellent service! The team was professional and resolved my pest issue efficiently.",
      rating: 5,
      img: `https://api.dicebear.com/5.x/initials/svg?seed=Gulshan+Chauhdari`,
    },
    {
      name: "Nikhil Harshe",
      feedback:
        "Highly recommended! They provided eco-friendly solutions and great customer support.",
      rating: 4.5,
      img: `https://api.dicebear.com/5.x/initials/svg?seed=Nikhil+Harshe`,
    },
    {
      name: "Aman Gupta",
      feedback:
        "Amazing experience! They were timely, thorough, and affordable. Couldn't be happier!",
      rating: 5,
      img: `https://api.dicebear.com/5.x/initials/svg?seed=Aman+Gupta`,
    },
  ];

  return (
    <section className="bg-gray-100 py-10 px-4 md:px-16">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-green-700 mb-8">
        What Our Customers Say
      </h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {reviews.map((review, index) => (
          <SwiperSlide
            key={index}
            className="bg-white rounded-lg shadow-lg p-5 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center mb-4">
              <img
                src={review.img}
                alt={review.name}
                className="rounded-full h-12 w-12 mr-4"
              />
              <div>
                <h3 className="text-xl font-semibold text-green-800">
                  {review.name}
                </h3>
              </div>
            </div>
            <p className="text-gray-600 mb-4">{review.feedback}</p>
            <div className="flex items-center text-yellow-500">
              {"★".repeat(Math.floor(review.rating))}
              {"☆".repeat(5 - Math.floor(review.rating))}
              <span className="text-gray-500 text-sm ml-2">
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
