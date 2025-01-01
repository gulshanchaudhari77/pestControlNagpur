import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import img1 from "../assets/ants.webp";
import img2 from "../assets/cockroaches.webp";
import img3 from "../assets/mosquitoes.webp";
import img4 from "../assets/flies.webp";
import img5 from "../assets/spiders.webp";
import img6 from "../assets/bed-bugs.webp";
import img7 from "../assets/rodents.webp";
import img8 from "../assets/termites.webp";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const PestProblems = () => {
  const pestRefs = useRef([]);

  const pests = [
    { img: img1, text: "Ants" },
    { img: img2, text: "Cockroaches" },
    { img: img3, text: "Mosquitoes" },
    { img: img4, text: "Flies" },
    { img: img5, text: "Spiders" },
    { img: img6, text: "Ticks" },
    { img: img7, text: "Rat" },
    { img: img8, text: "Termites" },
  ];

  useEffect(() => {
    // Apply GSAP ScrollTrigger animations to each pest box
    pestRefs.current.forEach((pestBox) => {
      gsap.fromTo(
        pestBox,
        {
          scale: 0.5, // Start small
          opacity: 0, // Invisible initially
        },
        {
          scale: 1, // End at normal size
          opacity: 1, // Fully visible
          ease: "power3.out",
          scrollTrigger: {
            trigger: pestBox, // Trigger animation when each pest box enters the viewport
            start: "top 80%", // Start when the top of the box reaches 80% of the viewport
            end: "bottom 20%", // End when the bottom of the box reaches 20% of the viewport
            scrub: true, // Smooth synchronization with scroll
            toggleActions: "play none none reverse", // Play on enter, reverse on exit
          },
        }
      );
    });
  }, []);
  

  return (
    <div className="p-8 py-16 bg-gray-100 text-black">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center text-green-700 mb-8">
        Common Pest Problems
      </h2>

      {/* Pest Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {pests.map((pest, index) => (
          <div
            key={index}
            ref={(el) => (pestRefs.current[index] = el)} // Assign reference for scroll-trigger
            className="bg-white shadow-lg rounded-lg p-3 flex gap-3 items-center justify-center"
          >
            <img 
              src={pest.img}
              alt={pest.text}
              className="w-10 h-10 object-contain mb-2"
            />
            <p className="text-lg font-semibold text-center">{pest.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PestProblems;
