import React, { useEffect, useRef }  from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import image1 from "../assets/servicesNew1.png"; // Replace with your common background image path
import serviimg1 from "../assets/servicesimg1.png";
import serviimg2 from "../assets/servicesimg2.png";
import serviimg3 from "../assets/servicesimg3.png";
import serviimg4 from "../assets/servicesing4.png"; // Fixed typo in image path

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ServicesCompo = () => {

    const boxRefs = useRef([]); // Array of refs for the service boxes
      const sectionRef = useRef(null); // Ref for the whole section
    
      useEffect(() => {
        // Animate the service boxes when the section enters the viewport
        boxRefs.current.forEach((box, index) => {
          gsap.fromTo(
            box,
            { x: index < 2 ? "-100vw" : "100vw", opacity: 0 }, // Start off-screen
            {
              x: 0,
              opacity: 1,
              duration: 1.5, // Animation duration
              ease: "power3.out",
              scrollTrigger: {
                trigger: box, // Trigger animation when each box enters the viewport
                start: "top 80%", // Start when the top of the box reaches 80% of the viewport
                end: "bottom 50%", // End when the bottom of the box reaches 50% of the viewport
                scrub: true, // Smooth synchronization with scroll
                toggleActions: "play none none reverse", // Play on enter, reverse on exit
              },
            }
          );
        });
      }, []);

  return (
    <div>
      {/* Header */}
      <div className="text-green-700 text-center text-5xl font-bold py-10">
        <h1 className="text-green-700">Our Services</h1>
      </div>

      {/* Background Wrapper */}
      <div
        ref={sectionRef} // Attach ref to the entire section
        className="relative bg-cover bg-fixed saturate-50 hover:saturate-100"
        style={{ backgroundImage: `url(${image1})` }}
      >
        {/* Services Section */}
        <div className="flex flex-wrap gap-5 justify-center p-5 sm:p-10 lg:p-20">
          {[
            { img: serviimg3, title: "Fumigation" },
            { img: serviimg1, title: "Pest Control" },
            { img: serviimg2, title: "Sanitization" },
            { img: serviimg4, title: "Disinfection" },
          ].map((service, index) => (
            <div
              key={index}
              ref={(el) => (boxRefs.current[index] = el)} // Assign ref to each box
              className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] flex flex-col justify-start text-center text-black bg-white bg-opacity-50 gap-5 max-w-[18rem] overflow-hidden"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-[200px] sm:h-[250px] md:h-[310.5px] object-cover"
              />
              <div className="absolute bottom-0 w-full bg-white bg-opacity-70 p-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                  {service.title}
                </h1>
                <p className="text-sm sm:text-base md:text-xl">
                  Lorem ipsum dolor sit amet <br /> consectetur adipiscing.
                </p>
                <button className="px-3 sm:px-4 py-2 bg-green-700 text-white rounded-lg mt-3">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesCompo;
