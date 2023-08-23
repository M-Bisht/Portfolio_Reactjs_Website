import React from "react";

const Video = ({ src, className }) => {
  return <video autoPlay muted loop src={src} className={className}></video>;
};

export default Video;
