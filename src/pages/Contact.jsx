import React from 'react';
import Logo from '../components/Logo';
import HeroSection from '../components/HeroSection';

const Contact = () => {
  return (
    <div>
       <HeroSection text={"Contact"} link={"/contact"} heding={"Contact Us"} />

      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 p-8 bg-gray-100">
      {/* Contact Form */}
      <div className="flex-1 bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <form className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="block text-gray-600 mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-yellow-400"
            />
          </div>
          {/* Email Field */}
          <div>
            <label className="block text-gray-600 mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-yellow-400"
            />
          </div>
          {/* Subject Field */}
          <div>
            <label className="block text-gray-600 mb-1">Subject</label>
            <input
              type="text"
              placeholder="Enter the subject"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-yellow-400"
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white font-bold py-2 rounded-md hover:bg-yellow-600"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Map and Social Icons */}
      <div className="flex-1 flex flex-col items-center">
        {/* Map */}
        <div className="w-full h-64 mb-4">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.836522444791!2d144.95592531531738!3d-37.81620897975167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf57785b3dca66ad4!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1601959140421!5m2!1sen!2sau"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
            aria-hidden="false"
            tabIndex="0"
            className="rounded-lg"
          ></iframe>
        </div>
        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a
            href="#"
            className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="#"
            className="p-3 bg-blue-400 text-white rounded-full hover:bg-blue-500"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="#"
            className="p-3 bg-pink-500 text-white rounded-full hover:bg-pink-600"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="#"
            className="p-3 bg-blue-800 text-white rounded-full hover:bg-blue-900"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </div>
    <Logo/>
    </div>

    
  );
};

export default Contact;
