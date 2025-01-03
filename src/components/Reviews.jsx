import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { ReviewData } from "../Data/ReviewData";

const Reviews = () => {
  const [data] = useState(ReviewData);

  // Log the entire data array
  console.log("ReviewData:", data);

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
        {data.map((review, index) => (
          <SwiperSlide
            key={index}
            className="bg-white rounded-lg shadow-lg p-5 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div className="flex items-center mb-4">
              <img
                src={review.img}
                alt={review.username}
                className="rounded-full h-12 w-12 mr-4"
              />
              <div>
                <h3 className="text-xl font-semibold text-green-800">
                  {review.username}
                </h3>
              </div>
            </div>
            <ReviewText review={review.review} />
            <div className="flex items-center text-yellow-500 mt-4">
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

const ReviewText = ({ review }) => {
  const [showFull, setShowFull] = useState(false);
  const maxLength = 100; // Maximum characters before truncation

  return (
    <div>
      {review.length > maxLength && !showFull ? (
        <p className="text-gray-600">
          {review.substring(0, maxLength)}...
          <button
            onClick={() => setShowFull(true)}
            className="text-blue-500 underline ml-2"
          >
            See More
          </button>
        </p>
      ) : (
        <p className="text-gray-600">
          {review}
          {review.length > maxLength && (
            <button
              onClick={() => setShowFull(false)}
              className="text-blue-500 underline ml-2"
            >
              See Less
            </button>
          )}
        </p>
      )}
    </div>
  );
};

export default Reviews;
