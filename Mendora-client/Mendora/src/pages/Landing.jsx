import React from 'react';
import Navbar from '../components/LandingNavbar';
import RotatingText from "../components/Rotatingtext";
import './Landing.css'; // Add this if not already
import LandingFooter from "../components/LandingFooter";





const Landing = () => {
  return (
    <>
      <Navbar />

      <div className="hero">
        <video autoPlay muted loop playsInline className="background-video">
          <source src="/mixkit-green-leaf-of-a-tree-wet-from-the-rain-18311-full-hd.mp4" type="video/mp4" />
        </video>

        {/* Overlay card */}
        <div className="card-overlay">
          <RotatingText staticText="Creative" />
        </div>
      </div>
      <LandingFooter/>
    </>
  );
};

export default Landing;
