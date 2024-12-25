import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-10">
      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* 1. Company Information */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">About Us</h3>
          <p className="text-gray-400">
            Continental Pest Control has over 30 years of experience in providing eco-friendly, effective pest control solutions. We are committed to ensuring the safety and satisfaction of our customers in Nagpur and surrounding areas.
          </p>
        </div>

        {/* 2. Contact Information */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Contact Info</h3>
          <ul>
            <li className="text-gray-400 mb-2">
              <strong>Email:</strong> contact@continentalpest.com
            </li>
            <li className="text-gray-400 mb-2">
              <strong>Phone:</strong> +91 123 456 7890
            </li>
            <li className="text-gray-400 mb-2">
              <strong>Address:</strong> 123 Pest Control Street, Nagpur, India
            </li>
          </ul>
        </div>

        {/* 3. Rights Information */}
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 mb-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <p className="text-gray-400">
            © 2024 Continental Pest Control. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
