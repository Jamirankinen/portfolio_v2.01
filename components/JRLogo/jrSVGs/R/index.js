import React from "react";

const R = (props) => {
  return (
    <svg
      {...props}
      version="1.2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 1000"
      width="1000"
      height="1000"
    >
      <title>R</title>
      <g
        id="Letter R"
        fill="none"
        stroke="currentColor"
        strokeWidth="20"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M300 200 H600 Q750 200 750 400 Q750 520 640 580 L750 800 H600 L520 620 H450 V800 H300 V200 Z 
                 M450 350 H580 Q620 350 620 400 Q620 450 580 470 Q560 480 530 480 H450 V350 Z"
        />
      </g>
      <path id="bounds" fill="none" d="M0 0h1000v1000H0z" />
    </svg>
  );
};

R.propTypes = {};

export default R;
