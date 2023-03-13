import React from "react";

const Banner = ({ src }) => {
  return (
    <div className="mx-auto lg:mx-0">
      <img src={src} alt="Banner" className="mx-auto lg:mx-0" />
    </div>
  );
};

export default Banner;
