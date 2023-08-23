import React from "react";
import S2TechBoxes from "../comps/S2TechBoxes";
import Video from "../ui/Video";

const Section2 = () => {
  return (
    <section className="section2">
      <div className="s2_header">
        <h2>
          TECHNOLOGIES I AM <span>FAMILIER WITH</span>
        </h2>
      </div>
      <div className="s2_techBoxes">
        <div className="box1Video">
          <Video src="videos\portfolio_video_2.mp4" />
        </div>
        <S2TechBoxes
          className="box2Html"
          icon="fa-brands fa-html5"
          title="HTML"
          para="HyperText Markup Language ( HTML ) is used to create the structure of a website."
        />
        <S2TechBoxes
          className="box3Css"
          icon="fa-brands fa-css3-alt"
          title="CSS"
          para="Cascading Style Sheets ( CSS ) is used to style elements on a website."
        />
        <S2TechBoxes
          className="box4Bootstrap"
          icon="fa-brands fa-bootstrap"
          title="BOOTSTRAP"
          para="A CSS library makes work easier by using classes for styling elements."
        />
        <S2TechBoxes
          className="box5Javascript"
          icon="fa-brands fa-square-js"
          title="JAVASCRIPT"
          para="JavaScript is used for adding logic to websites and handling dynamic data through APIs."
        />
        <S2TechBoxes
          className="box6React"
          icon="fa-brands fa-react"
          title="REACT JS"
          para="React.js is a JavaScript library for interactive UIs with reusable components, optimising web performance."
        />
      </div>
    </section>
  );
};

export default Section2;
