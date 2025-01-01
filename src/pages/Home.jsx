import React, { useEffect, useRef } from "react";
import homeMain1 from "../assets/homeMain1.png";
import spiderMain from "../assets/spiderNew.png";
// import spiderMain from "../assets/sp.png";
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
import WhyChooseUs from "../components/WhyChooseUs";

const Home = () => {
  const phoneNumber = "+918408094772";
  const imageRef = useRef(null); // Ref for the image div
  const textRef = useRef(null); // Ref for the image div

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      {
        x: "100vw", // Start off-screen to the right
        scale: 0.5, // Start small
        opacity: 0, // Start fully transparent
      },
      {
        x: 0, // End at the original position
        scale: 1, // End at normal size
        opacity: 1, // End fully visible
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
      <section className="flex w-full md:pb-0 pb-[7rem] ">
        {/* text */}
        <div
          className=" spiimage md:px-28 px-7 md:py-0 py-8 md:w-[62%] gap-5 flex flex-col md:justify-center md:h-[40rem] h-[30rem] "
          style={{
            backgroundImage: `url(${spiderMain})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <p
            className=" home-p md:text-5xl text-xl text-yellow-300 font-semibold "
            ref={textRef}
          >
            THE CONTINENTAL PEST CONTROL NAGPUR
          </p>
          <h1 className=" home-h1 md:text-3xl  md:leading-[5rem]">
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
        <div className="md:relative bg-gradient-to-r  md:w-[38%] from-green-700 to-green-900">
          <div className="md:w-[20rem] md:h-[12rem] w-[10rem] h-[11rem] bg-yellow-300  absolute left-[1.2rem] bottom-[-4rem] md:bottom-0 md:left-[-4rem]"></div>
          <div className="md:w-[20rem] md:h-[21rem] w-[15rem] h-[8rem] bg-yellow-300  absolute right-5 bottom-[-4rem]  md:bottom-0 md:left-[10rem]"></div>

          <div className="box border-4 border-yellow-400 md:w-[13rem] md:h-[10rem] text-center absolute left-[12rem] top-[24.4rem] md:left-[14rem] md:top-9 m-auto md:py-5 p-[0.69rem] rounded-lg shadow-lg">
            <h1 className="md:text-5xl text-xl font-semibold">
              30+<sup className="md:text-2xl align-super">th</sup>
            </h1>
            <p className="md:text-3xl font-semibold">Years of Experience</p>
          </div>
        </div>
        <img
          ref={imageRef} // Attach the ref here
          src={homeMain1}
          alt="homemain1"
          className="md:h-[43rem] h-[22rem] object-cover absolute md:right-[-9rem] md:top-[1.75rem] top-[22rem] "
        />
      </section>

      <AboutCompo />
      <PestProblems />
      <ServicesCompo />
      <Logo />
      <WhyChooseUs />
      <Testimonials />
      <Reviews />
    </div>
  );
};

export default Home;
