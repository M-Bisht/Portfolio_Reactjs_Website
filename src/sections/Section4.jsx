import React from "react";
import ContactForm from "../comps/ContactForm";
import ContactInfo from "../comps/ContactInfo";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const Section4 = () => {
  //
  const s4MouseMove = (e) => {
    gsap.to(".s4CursorEffect", {
      top: `${e.screenY}px`,
      left: `${e.screenX}px`,
      duration: 0.1,
    });
  };

  const s4MouseLeave = () => {
    gsap.to(".s4CursorEffect", {
      top: "50%",
      left: "50%",
      duration: 0.2,
    });
  };
  //
  return (
    <div
      className="section4"
      onMouseMove={s4MouseMove}
      onMouseLeave={s4MouseLeave}
    >
      <h2 className="s4H2">Contact Me</h2>
      <div className="s4FormContainer">
        <ContactForm />
        <ContactInfo />
      </div>
      <div className="s4CursorEffect"></div>
    </div>
  );
};

export default Section4;
