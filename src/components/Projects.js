import React from "react";
import ProjectBlock from "./ProjectBlock";

const Projects = ({ ubg, parallax, jcp, sticker, platform }) => {
  return (
    <div className="w-screen h-auto px-8 text-center flex flex-col justify-center pt-[5vh]" id="projects">
      <h1 className="text-[#35383d] font-extrabold text-6xl sm:text-7xl 2xl:text-8xl">Projects</h1>
      <ProjectBlock
        project={"UBG100"}
        media={ubg}
        snippet={"1"}
        link={"https://ubg100.github.io/"}
      >
        A website serving as an online aggregator for some of the most popular and beloved
        games on the internet, all completely for free.
        <br />
        <br />
        Created with <strong>HTML, Javascript, CSS, Node.js, and jQuery</strong>
      </ProjectBlock>
      <ProjectBlock
        project={"Parallax"}
        media={parallax}
        snippet={"2"}
        link={"https://parallaxbot.cf/"}
      >
        A website for Parallax, a verified Discord bot with utility and
        entertainment that served over 300,000 users. Currently being rewritten
        and improved.
        <br />
        <br />
        Website created with <strong>HTML, Javascript, CSS, and jQuery</strong>
        <br />
        Bot created with{" "}
        <strong>Javascript, Node.js, and the discord.js library</strong>
      </ProjectBlock>
      <ProjectBlock
        project={"Portfolio"}
        media={jcp}
        snippet={"3"}
        link={"https://joseph.cf/"}
      >
        A fully responsive website for a musician and my first time using the
        React library.
        <br />
        <br />
        Created with <strong>React, TailwindCSS</strong>
      </ProjectBlock>
      <ProjectBlock
        project={"Stickers"}
        media={sticker}
        snippet={"4"}
        link={"https://joinsaturn.com"}
      >
        A dynamic social media component I created as part of my internship
        project for the company Saturn.
        <br />
        <br />
        Created with <strong>React, dayjs</strong>
      </ProjectBlock>
      <ProjectBlock
        project={"This page :)"}
        media={platform}
        snippet={"5"}
        link={"/#top"}
      >
        I created this fully responsive, single page application as my platform
        and temporary portfolio.
        <br />
        <br />
        Created with <strong>React, TailwindCSS</strong>
      </ProjectBlock>
    </div>
  );
};

export default Projects;
