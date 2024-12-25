import React from "react";
import { Link } from "react-router-dom";

import imgcontact from "../assets/servicesimg1.png";

import Reviews from "../components/Reviews";
import ServicesCompo from "../components/ServicesCompo";
import HeroSection from '../components/HeroSection';



const Services = () => {
  

  return (
    <>
        <HeroSection text={"Services"} link={"/services"} heding={"Our Services"} />

        <ServicesCompo/>
      
        <Reviews />
    </>
  );
};

export default Services;
