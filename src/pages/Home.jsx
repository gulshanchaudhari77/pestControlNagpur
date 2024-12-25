import React, { useEffect, useRef } from "react";
import homeMain1 from "../assets/homeMain1.png";
import spiderMain from "../assets/sp.png";
import About from "./About";
import { gsap } from "gsap";
import Logo from "../components/Logo";
import PestProblems from "../components/PestProblems";
import Testimonials from "../components/Testimonials";
import { useGSAP } from "@gsap/react";
import Reviews from "../components/Reviews";
import { Link } from "react-router-dom";
import ServicesCompo from "../components/ServicesCompo";
import AboutCompo from "../components/AboutCompo";

const Home = () => {
  const phoneNumber = "+918408094772";
  const imageRef = useRef(null); // Ref for the image div
  const textRef = useRef(null); // Ref for the image div

  

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      {
        x: "100vw",  // Start off-screen to the right
        scale: 0.5,  // Start small
        opacity: 0,  // Start fully transparent
      },
      {
        x: 0,        // End at the original position
        scale: 1,    // End at normal size
        opacity: 1,  // End fully visible
        duration: 3, // Smooth animation over 2 seconds
        ease: "power4.out", // Smooth easing with deceleration
      }
      

      
    );

    gsap.fromTo(
      textRef.current,
      { scale: 0, opacity: 0 }, // Start fully zoomed out and transparent
      { scale: 1, opacity: 1, duration: 2, ease: "power2.out", delay: 0.5 } // Zoom in with a slight delay
    );

    
  }, []);
  

  return (
    <div className="text-white">
      {/* section 1 */}
      <section className="section flex relative">
        {/* text */}
        <div
          className="px-28 w-[62%] gap-5 flex flex-col justify-center h-[40rem]"
          style={{
            backgroundImage: `url(${spiderMain})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <p className=" home-p text-yellow-300">THE CONTINENTAL PEST NAGPUR</p>
          <h1 className=" home-h1 text-7xl font-semibold leading-[5rem]" ref={textRef}>
            Safeguarding Your Home & Health
          </h1>
          <p>
            Say Goodbye to Pests with Expert, Eco-Friendly Solutions - 30+ Years
            of Trust
          </p>
          <Link
            to="tel:+918408094772"
            className="text-lg bg-green-800 w-[9.4rem] rounded py-2 hover:bg-green-900 text-center"
          >
            Call for Booking
          </Link>
        </div>

        {/* image */}
        <div
          className="relative bg-gradient-to-r w-[38%] from-green-700 to-green-900"
        >
          <div className="w-[20rem] bg-yellow-300 h-[12rem] absolute bottom-0 left-[-4rem]"></div>
          <div className="w-[20rem] bg-yellow-300 h-[21rem] absolute bottom-0 left-[10rem]"></div>

          <div className="box border-2 border-yellow-400 w-[13rem] h-[10rem] text-center absolute left-[14rem] top-9 m-auto py-5 rounded-lg shadow-lg">
            <h1 className="text-5xl font-semibold">
              30<sup className="text-2xl align-super">th</sup>
            </h1>
            <p className="text-3xl font-semibold">Years of Experience</p>
          </div>
        </div>
        <img           ref={imageRef} // Attach the ref here

          src={homeMain1}
          alt="homemain1"
          className="h-[43rem] w- absolute right-[-9rem] top-[-3rem]"
        />
      </section>

      <AboutCompo />
      <PestProblems />
      <ServicesCompo />
      <Logo />
      <Testimonials />
      <Reviews/>
    </div>
  );
};

export default Home;
