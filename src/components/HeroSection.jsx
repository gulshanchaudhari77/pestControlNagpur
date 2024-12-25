import React from 'react'
import { Link } from "react-router-dom";
import imgcontact from '../assets/HeroSection12.png';

const HeroSection = ({heding, text, link}) => {
  return (
    <div>
        {/* Hero Section */}
      <div className="relative w-full h-72">
        {/* Background Image */}
        <img
          src={imgcontact}
          alt="Contact Background"
          className="w-full h-full object-cover"
        />

        {/* Content on Image */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-start p-14 bg-black bg-opacity-30 text-white">
          <h1 className="text-5xl font-bold">{heding} </h1>
          <div className="mt-2 text-lg">
          <Link to="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link to={link} className="hover:underline">
              {text}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection