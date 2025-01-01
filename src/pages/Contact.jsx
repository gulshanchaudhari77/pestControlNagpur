import React, { useRef } from "react";
import Logo from "../components/Logo";
import HeroSection from "../components/HeroSection";
import emailjs from "@emailjs/browser";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const user_id = "iZjw9qzVfg30cDB4B"; // EmailJS user ID
  const serviceId = "service_71ftivr";
  const templateId = "template_utb7j52";

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, user_id).then(
      (result) => {
        console.log("Email sent successfully:", result.text);
      },
      (error) => {
        console.log("Email sending failed:", error.text);
      }
    );
  };

  const address = encodeURIComponent(
    "Continental Pest Control, F/3, Utkarsh Uttra Apartment, New Colony, New Colony, Nagpur, Maharashtra 440001"
  );

  return (
    <div>
      {/* Hero Section */}
      <HeroSection text="Contact" link="/contact" heading="Contact Us" />

      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 p-8 bg-gray-100">
        {/* Contact Form */}
        <div className="flex-1 w-[40%] bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <form className="space-y-4" ref={form} onSubmit={sendEmail}>
            {/* Name Field */}
            <div>
              <label className="block text-gray-600 mb-1">Name</label>
              <input
                type="text"
                name="user_name"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-yellow-400"
              />
            </div>
            {/* Email Field */}
            <div>
              <label className="block text-gray-600 mb-1">Email</label>
              <input
                type="email"
                name="user_email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-yellow-400"
              />
            </div>
            {/* Contact Field */}
            <div>
              <label className="block text-gray-600 mb-1">Contact No.</label>
              <input
                type="text"
                name="user_contact"
                placeholder="Enter your number"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-yellow-400"
              />
            </div>
            {/* Subject Field */}
            <div>
              <label className="block text-gray-600 mb-1">Subject</label>
              <input
                type="text"
                name="subject"
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

        {/* Map and Contact Info */}
        <div className="w-[60%] h-[30rem] shadow-[0px_0px_2px_rgba(0,0,0,0.3)] bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="Google Map"
            className="absolute inset-0"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            src={`https://maps.google.com/maps?width=100%&height=600&hl=en&q=${address}&ie=UTF8&t=&z=14&iwloc=B&output=embed`}
            style={{}}
          ></iframe>
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md text-black">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-bold  tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
              Continental Pest Control, F/3, Utkarsh Uttra Apartment, 
             New Colony, New Colony, Nagpur, Maharashtra 440001
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-bold  tracking-widest text-xs">
                EMAIL
              </h2>
              <a
                href="mailto:faceit.kdkce@gmail.com"
                className="text-indigo-400 leading-relaxed"
              >
                dummy@gmail.com
              </a>
              <h2 className="title-font font-bold tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">808 720 9336</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Logo */}
      <Logo />
    </div>
  );
};

export default Contact;
