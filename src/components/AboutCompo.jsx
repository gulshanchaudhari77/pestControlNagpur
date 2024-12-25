import React from "react";
import aboutimg from "../assets/about.png"

const AboutCompo = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row py-20 px-6 lg:px-20">
        {/* Image Section */}
        <div className="lg:w-[45%] mb-8 lg:mb-0 rounded-lg overflow-hidden shadow-[0px_0px_2px_rgba(0,0,0,0.3)] hover:shadow-[0px_0px_10px_rgba(0,0,0,0.3)]">
          <img
            src={aboutimg}
            alt="About"
            className="w-[100%] p-7 object-cover rounded-lg transition-transform duration-500 ease-in-out transform hover:rotate-[10deg] hover:scale-105"
          />
        </div>

        {/* Text Section */}
        <div className="lg:w-[55%] lg:pl-12 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            About Us
          </h2>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            THE CONTINENTAL PEST NAGPUR
          </h1>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Welcome to Jay Pest Control, your trusted source for highly
            effective pest control services. Our friendly staff and service
            specialists will provide you with the finest care for your home and
            business needs. Jay Pest Control has been ensuring customer
            satisfaction since 2015. We proudly serve Nagpur City and its
            surrounding areas.
          </p>
          <button className="bg-green-700 text-white text-lg px-6 py-3 rounded-lg hover:bg-green-800 transition duration-300">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutCompo;
