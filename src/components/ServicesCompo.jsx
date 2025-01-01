import React, { useEffect, useRef }  from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import image1 from "../assets/servicesNew1.png"; // Replace with your common background image path
import serviimg1 from "../assets/Services-Image-1.png";
import serviimg2 from "../assets/servisecimg2.png";
import serviimg3 from "../assets/Services-Image-3.png";
import serviimg4 from "../assets/Services-Image-4.png"; // Fixed typo in image path
import { useNavigate } from "react-router-dom";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ServicesCompo = () => {
  const navigate = useNavigate();

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
            { img: serviimg1, title: "Rodent Control" , desc:"Eliminate rodents with our expert solutions, ensuring a safe, rodent-free environment." },
            { img: serviimg2, title: "Insect Control" ,desc:"Protect your space with effective insect control for ants, cockroaches, mosquitoes, and more." },
            { img: serviimg3, title: "Termite Control",desc:"Safeguard your property from termites with our advanced detection and treatment methods." },

            { img: serviimg4, title: "Fumigation", desc:"Get highly effective pest control on scheduled day. We always use good quality products." },
          ].map((service, index) => (
            <div
              key={index}
              ref={(el) => (boxRefs.current[index] = el)} // Assign ref to each box
              className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] flex flex-col justify-start text-center text-black bg-white bg-opacity-50 gap-5 max-w-[18rem] overflow-hidden"
            >
              <img
                src={service.img}
                alt={service}
                className="w-full h-[200px] sm:h-[250px] md:h-[310.5px] object-cover"
              />
              <div className="absolute bottom-0 w-full bg-white  p-4">
                <h1 className="  md:text-4xl font-semibold">
                  {service.title}
                </h1>
                <p className="text-0.456rem  md:text-xl">
                  {service.desc}
                </p>
                <button onClick={() => navigate("/contact")} className=" px-3 sm:px-4 py-2 bg-green-700 text-white rounded-lg mt-3">
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
