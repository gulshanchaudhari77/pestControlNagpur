import React from "react";
import aboutimg from "../assets/about.png"

const AboutCompo = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row py-20 px-6 lg:px-20 ">
        {/* Image Section */}
        <div className="lg:w-[45%] mb-7 lg:mb- flex items-center justify-center rounded-lg overflow-hidden shadow-[0px_0px_2px_rgba(0,0,0,0.3)] hover:shadow-[0px_0px_10px_rgba(0,0,0,0.3)]">
          <img
            src={aboutimg}
            alt="About"
            className="w-[100%] my-5 object-cover rounded-lg transition-transform duration-500 ease-in-out transform hover:rotate-[10deg] hover:scale-105"
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
          Continental Pest Control is one of the best and oldest pest control company in Nagpur, having 30+ years of experience in pest control domain. We have a large customer base of 3 lakhs and provide 100% guarantee to all our customers. We provide both residential and commercial pest control services, offering flexible scheduling and competitive pricing. We specialize in providing effective and eco-friendly solutions for a wide range of pest problems, including termites, mice, bed bugs, cockroaches, mosquitoes, lizards, ants, spiders etc. Our experienced team is committed to ensuring your property remains pest-free with safe and reliable treatments. Contact us today for a free consultation and let us help you protect your premises from unwanted pests.
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
