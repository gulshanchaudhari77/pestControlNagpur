import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PestInformation from "./components/PestInformation";
import img from './assets/loadingimg.gif'

function App() {
  const [showSplash, setShowSplash] = useState(true); // State for splash screen
  const [fadeOut, setFadeOut] = useState(false); // State for fade-out animation

  useEffect(() => {
    // Trigger fade-out after 5 seconds
    const timer = setTimeout(() => {
      setFadeOut(true); // Start fade-out
      // Wait for the fade-out animation to complete
      setTimeout(() => {
        setShowSplash(false);
      }, 300); // Match this delay with the CSS animation duration
    }, 500); // Splash screen visible for 4 seconds

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  if (showSplash) {
    // Render the splash screen with smooth transition
    return (
      <div
        className={`flex items-center justify-center h-screen bg-white transition-opacity duration-1000 ${
          fadeOut ? "opacity-0" : "opacity-100"
        }`}
      >
        <img
          src={img} // Replace with your logo path
          alt="Logo"
          className="w-90 h-90 bg-white"
        />
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="servicesInfo/:pestName" element={<PestInformation />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
