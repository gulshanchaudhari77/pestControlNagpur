import React from "react";
import AboutCompo from "../components/AboutCompo";
import HeroSection from "../components/HeroSection";
import Reviews from "../components/Reviews";
const About = () => {
  return (
    <>
      <HeroSection
        text={"About"}
        link={"/about"}
        heding={"About us"}
      />
      <AboutCompo />

      <Reviews/>
    </>
  );
};

export default About;
