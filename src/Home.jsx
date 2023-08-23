import React, { useEffect } from "react";
import GsapAnimation from "./GsapAnimation";
import HeroSection from "./sections/HeroSection";
import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";
import Section3 from "./sections/Section3";
import Section4 from "./sections/Section4";
import Footer from "./sections/Footer";

const Home = () => {
  useEffect(() => {
    GsapAnimation();
  }, []);
  return (
    <div className="container">
      <HeroSection />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </div>
  );
};

export default Home;
