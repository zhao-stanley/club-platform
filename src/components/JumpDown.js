import React from "react";

const JumpDown = ({ id }) => {
  return (
    <a href={'/#' + id} className="w-auto mx-auto">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="my-8 mx-auto w-12 h-12 animate-bounce"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#35383d"
        strokeWidth={1}
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </a>
  );
}

export default JumpDown;
