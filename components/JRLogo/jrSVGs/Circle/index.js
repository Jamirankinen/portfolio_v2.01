import React from "react";

const Circle = (props) => {
  return (
    <svg
      {...props}
      version="1.2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 1000"
      width="1000"
      height="1000"
    >
      <title>Circle</title>
      <circle
        cx="500"
        cy="500"
        r="400"
        fill="none"
        stroke="currentColor"
        strokeWidth="10"
      />
      <path id="bounds" fill="none" d="M0 0h1000v1000H0z" />
    </svg>
  );
};


export default Circle;
