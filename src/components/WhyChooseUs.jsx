import React from "react";
import { RiTeamFill } from "react-icons/ri";
import { GiRecycle } from "react-icons/gi";
import { FaMoneyBillWave, FaClock } from "react-icons/fa";
import whychooseusimg from "../assets/whywechooseimg.png";

const WhyChooseUs = () => {
  const content = [
    {
      heading: "Expert Team",
      description: "Our skilled professionals ensure the highest level of service.",
      icon: <RiTeamFill className="text-green-800 text-4xl" />, // Correctly using the icon
    },
    {
      heading: "Eco-Friendly Solutions",
      description: "We use safe and sustainable methods for pest control.",
      icon: <GiRecycle className="text-green-800 text-4xl" />,
    },
    {
      heading: "Affordable Pricing",
      description: "Get the best services at competitive rates with no hidden charges.",
      icon: <FaMoneyBillWave className="text-green-800 text-4xl" />,
    },
    {
      heading: "24/7 Support",
      description: "Our team is available around the clock to assist you anytime.",
      icon: <FaClock className="text-green-800 text-4xl" />,
    },
  ];

  return (
    <section className="bg-gray-100 py-12 px-5 md:px-20">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-green-700 mb-10">
        Why Choose Us
      </h2>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
        {/* Left Side Divs */}
        <div className="flex flex-col gap-8 w-full lg:w-1/3">
          {content.slice(0, 2).map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4  rounded-lg shadow-lg p-4 bg-white"
            >
              <div className="w-16 h-16 flex items-center justify-center">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-green-800 mb-2">
                  {item.heading}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Middle Image */}
        <div className="w-full lg:w-1/3 flex justify-center">
          <img
            src={whychooseusimg}
            alt="Central"
            className="w-72 h-72 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side Divs */}
        <div className="flex flex-col gap-8 w-full lg:w-1/3">
          {content.slice(2).map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 h-32 rounded-lg shadow-lg p-4 bg-white"
            >
              <div className="w-16 h-16 flex items-center justify-center">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-green-800 mb-2">
                  {item.heading}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
