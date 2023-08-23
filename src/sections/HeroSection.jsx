import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  //
  const heroRef = useRef();
  // useEffect(() => {
  //   let deviceHeight = window.innerHeight;
  //   console.log(deviceHeight);
  //   let vh = 100;
  //   let height = `${(vh * deviceHeight) / 100 / 10}`;
  //   console.log(height);
  //   if (deviceHeight > "739") {
  //     heroRef.current.style.height = `${height}rem`;
  //   } else {
  //     heroRef.current.style.height = `${73.9}rem`;
  //   }
  // }, []);
  const heroMouseMove = (e) => {
    gsap.to(".heroCursorEffect", {
      top: `${e.pageY}px`,
      left: `${e.pageX}px`,
      duration: 0.1,
    });
  };

  const heroMouseLeave = () => {
    gsap.to(".heroCursorEffect", {
      top: "50%",
      left: "50%",
      duration: 0.2,
    });
  };
  //
  return (
    <div
      className="heroSection"
      ref={heroRef}
      onMouseMove={heroMouseMove}
      onMouseLeave={heroMouseLeave}
    >
      <div className="heroSection_texts">
        <header className="hSecText_header">
          <span>Mayank Bisht</span>
        </header>
        <div className="hSecText_div1">
          <h1>
            <div>
              <span>Front-end</span>
              <span>Web</span>
            </div>
            <span>Developer</span>
          </h1>
        </div>
        <div className="hSecText_div2">
          <span>Portfolio</span>
        </div>
      </div>

      <div className="heroCursorEffect"></div>
      <div className="heroCircleEffect"></div>
    </div>
  );
};

export default HeroSection;
