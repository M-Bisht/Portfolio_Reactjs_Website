import React from "react";
import Video from "../ui/Video";

const Section3 = () => {
  return (
    <div className="section3">
      <div className="s3Text">
        <h2>
          <span>P</span>
          <span>R</span>
          <span>O</span>
          <span>J</span>
          <span>E</span>
          <span>C</span>
          <span>T</span>
          <span>S</span>
        </h2>
      </div>
      <div className="s3Projects">
        <div className="project project1">
          <Video src="videos\TheRootNetwork Video.mp4" />
        </div>
        <div className="project project2">
          <Video src="videos\Portfolio Video.mp4" />
        </div>
      </div>
    </div>
  );
};

export default Section3;
