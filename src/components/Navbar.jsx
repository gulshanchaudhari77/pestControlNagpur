import React, { useState } from "react";
import logo from "../assets/Newlogo.jpg";
import { Link, useNavigate } from "react-router-dom";
import { IoCallOutline } from "react-icons/io5";

const Navbar = () => {
  const navigate = useNavigate();
  const phoneNumber = "+918087209636"

  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu visibility

  <style>
{`
@keyframes rotateAll {
  0% { transform: rotate(0deg); }
  25% { transform: rotate(10deg); }
  50% { transform: rotate(-10deg); }
  75% { transform: rotate(10deg); }
  100% { transform: rotate(0deg); }
}

.group-hover\\:animate-rotate-all:hover {
  animation: rotateAll 0.5s ease-in-out;
}
`}
</style>

  return (
    <div className="bg-green-800 px-5 md:px-28 py-3.5 flex items-center justify-between relative">
      {/* Logo */}
      <div>
        <img
          src={logo}
          alt="logo"
          className="h-12 rounded-lg" // Adjust height as needed
        />
        {/* <h1 className=" text-4xl font-bold leading-[1.4rem] text-green-500">CPC</h1>
        <p className=" text-yellow-400 pl-[0.5rem] ">Nagpur</p> */}
      </div>

      {/* Hamburger Menu for Small Devices */}
      <div className="md:hidden z-50">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Background Blur and Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
          onClick={() => setIsMenuOpen(false)} // Close menu when clicking on the background
        ></div>
      )}

      {/* Navigation Links */}
      <div
        className={`absolute top-16 left-0 w-full bg-green-800 md:hidden transition-all duration-300 ease-in z-50 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-5 p-5 text-lg font-semibold text-white">
          <li
            className="hover:text-gray-200 cursor-pointer"
            onClick={() => {
              navigate("/");
              setIsMenuOpen(false); // Close menu on navigation
            }}
          >
            Home
          </li>
          <li
            className="hover:text-gray-200 cursor-pointer"
            onClick={() => {
              navigate("/about");
              setIsMenuOpen(false);
            }}
          >
            About
          </li>
          <li
            className="hover:text-gray-200 cursor-pointer"
            onClick={() => {
              navigate("/services");
              setIsMenuOpen(false);
            }}
          >
            Services
          </li>
          <li
            className="hover:text-gray-200 cursor-pointer"
            onClick={() => {
              navigate("/contact");
              setIsMenuOpen(false);
            }}
          >
            Contact Us
          </li>
        </ul>
      </div>

      {/* Desktop Navigation (Unchanged) */}
      {/* <div className=""> */}
      <div className="hidden md:flex  w-full justify-end items-center pr-[4rem] gap-24 text-lg font-semibold text-white">
        <Link className="hover:text-gray-200 cursor-pointer" to={"/"}>
          Home
        </Link>
        {/* <Link
            className="hover:text-gray-200 cursor-pointer"
            to={"/"}
          >
            Home
          </Link> */}
        <Link className="hover:text-gray-200 cursor-pointer" to={"/about"}>
          About
        </Link>
        <Link className="hover:text-gray-200 cursor-pointer" to={"/services"}>
          Services
        </Link>
        <Link className="hover:text-gray-200 cursor-pointer" to={"/contact"}>
          Contact us
        </Link>

        <Link
          to="tel:+918408094772"
          className="text-lg bg-green-800 w-[9.4rem] rounded py-2 hover:bg-green-900 text-center flex items-center justify-center gap-2 text-white hover:bottom-5"
        >
          <IoCallOutline     
 />
          <span>+918087209636</span>
        </Link>
      </div>

      {/* </div> */}
    </div>
  );
};

export default Navbar;
