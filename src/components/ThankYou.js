import React from "react";
const ThankYou = ({ wave }) => {
  return (
    <div className="w-screen h-[800px] px-8 sm:px-14 text-center flex flex-col justify-center lg:px-24 xl:px-32 ">
      <h1 className="text-[#35383d] font-extrabold text-6xl lg:text-7xl 2xl:text-8xl">
        Thanks for your time!
      </h1>
      <br />
      <p className="text-md sm:text-xl lg:text-2xl 2xl:text-3xl">
        I hope this platform explained why I felt like running for this position
        and demonstrated my skills in a unique way.
        <br />
        <br />
        <strong>#Stanley4CodeClubPrez</strong>
      </p>
      <div className="w-[8.71428571429rem] h-32 mx-auto my-12">
        <img src={wave} className="w-full h-full" alt="Thanks!"></img>
      </div>
      <a href="/#top" className="w-auto mx-auto">
        <div className="buttonshadow flex flex-row justify-center gap-1 items-center bg-gray-300 p-4 max-w-sm 2xl:max-w-md mx-auto rounded-full text-[#35383d] hover:bg-slate-600 transition ease-in-out delay-5 hover:text-slate-200">
          <h1 className=" font-extrabold text-xl 2xl:text-2xl">Take me back to the top!</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="#fbd30e"
            stroke="#35383d"
          >
            <path
              fillRule="evenodd"
              d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </a>
    </div>
  );
};

export default ThankYou;
