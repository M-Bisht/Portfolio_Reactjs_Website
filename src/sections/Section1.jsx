import React from "react";
import Video from "../ui/Video";

const Section1 = () => {
  return (
    <section className="section1">
      <div className="s1_videoDiv">
        <Video src="videos\portfolio_video_1.mp4" />
      </div>
      <div className="s1_textDiv">
        <h2>About Me</h2>
        <p>
          <span>Hi,</span> <span>I'm</span> <span>Mayank Bisht,</span>{" "}
          <span>a</span> <span>19-year-old</span> <span>Front</span>
          <span>-</span>
          <span>end</span> <span>Web</span> <span>Developer.</span>{" "}
          <span>I</span> <span>finished</span> <span>my</span> <span>10th</span>{" "}
          <span>and</span> <span>12th</span> <span>grades</span> <span>at</span>{" "}
          <span>Sarvodaya</span> <span>Bal</span> <span>Vidyalaya,</span>{" "}
          <span>CBSE.</span> <span>Right</span> <span>now,</span>{" "}
          <span>I'm</span> <span>studying</span> <span>BCA</span>{" "}
          <span>at</span> <span>Manipal</span> <span>University,</span>{" "}
          <span>Jaipur.</span> <span>I</span> <span>love</span>{" "}
          <span>creating</span> <span>cool</span> <span>websites,</span>{" "}
          <span>and</span> <span>I'm</span> <span>always</span>{" "}
          <span>learning</span> <span>new</span> <span>things.</span>{" "}
          <span>My</span> <span>goal</span> <span>is</span> <span>to</span>{" "}
          <span>make</span> <span>websites</span> <span>that</span>{" "}
          <span>people</span> <span>enjoy</span> <span>using.</span>
        </p>
      </div>
    </section>
  );
};

export default Section1;
