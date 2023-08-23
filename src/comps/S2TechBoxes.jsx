import React from "react";

const S2TechBoxes = ({ className, icon, title, para }) => {
  return (
    <div className={className}>
      <i className={icon} />
      <h3>{title}</h3>
      <p>{para}</p>
    </div>
  );
};

export default S2TechBoxes;
