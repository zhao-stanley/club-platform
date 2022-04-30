import React from "react";
const HeroText = () => {
  return (
    <div className="w-screen h-screen text-center flex flex-col justify-center fadeIn px-8 lg:px-12 2xl:px-44" id="top">
      <h1 className="text-[#35383d] font-extrabold text-5xl anim sm:text-7xl">
        <span>Hello</span> <span>to</span> <span>the</span> <span>senior</span>{" "}
        <span>board!</span>
        {" "}<span>This is my</span> <span>platform and portfolio.</span>
        <br></br>
        <span>
          <a href="#running">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="my-8 mx-auto w-12 h-12 animate-bounce"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#35383d"
              strokeWidth={4}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 13l-5 5m0 0l-5-5m5 5V6"
              />
            </svg>
          </a>
        </span>
      </h1>
    </div>
  );
};

export default HeroText;
