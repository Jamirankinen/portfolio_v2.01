import React from "react";

const J = (props) => {
  return (
    <svg
      {...props}
      version="1.2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 1000"
      width="1000"
      height="1000"
    >
      <title>J</title>
      <g
        id="Letter J"
        fill="none"
        stroke="currentColor"
        strokeWidth="20"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M600 200 H700 V650 Q700 800 550 800 H400 V650 H525 Q600 650 600 575 V200 Z" />
      </g>
      <path id="bounds" fill="none" d="M0 0h1000v1000H0z" />
    </svg>
  );
};

J.propTypes = {};

export default J;
