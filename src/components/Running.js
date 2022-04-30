import React from "react";
import JumpTo from "./JumpDown";

const Running = () => {
  return (
    <div className="mx-auto w-screen h-screen px-8 text-center flex flex-col justify-center lg:px-16 xl:px-32 3xl:max-w-6xl" id="running">
      <h1 className="text-[#35383d] font-extrabold text-2xl sm:text-4xl lg:text-5xl 2xl:text-6xl">
        Why am I running?
      </h1>
      <p className="text-md sm:text-xl lg:text-2xl 2xl:text-3xl">
        <br />
        I'm running to better improve the club and provide my own ideas and
        experience to help enhance the process for the younger kids, whether
        they are avid programmers or just getting started.
        <br />
        <br />
        If I am elected, I would work together with the rest of the board to
        brainstorm fun project ideas that have current relevance, so that it
        also has real world applications.
        <br />
        <br />
        I'd also help curate useful resources, such as tutorials, courses, and
        internships for those who are seeking to learn more. Furthermore, I
        would help maintain and update the Code Club website.
      </p>
      <JumpTo id="quals" />
    </div>
  );
};

export default Running;
