import React from "react";
import JumpDown from "./JumpDown";

const Quals = () => {
  return (
    <div className="mx-auto w-screen h-screen px-8 text-center flex flex-col justify-center lg:px-16 xl:px-32 3xl:max-w-6xl" id="quals">
      <h1 className="text-[#35383d] font-extrabold text-2xl sm:text-4xl lg:text-5xl 2xl:text-6xl">
        What makes me qualified?
      </h1>
      <p className="text-md sm:text-xl lg:text-2xl 2xl:text-3xl">
        <br />I have a passion for computer science and incorporate it into my
        everyday life. Currently, I am taking{" "}
        <strong>AI Cybersecurity and Beyond</strong>.
        <br />
        <br />
        I've participated in many programming competitions differing in genre.
        These include traditional programming competitions like
        <strong> HackerRank</strong>,<strong> ACSL</strong>, and
        cybersecurity competitions like <strong>picoCTF</strong>.
        <br />
        <br />I can communicate with my fellow members and improve based on
        their feedback. I've <strong>worked professionally</strong> and have a strong
        background in <strong>web development</strong>.
      </p>
      <JumpDown id="projects" />
    </div>
  );
};

export default Quals;
