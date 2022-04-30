import React from "react";
const ProjectBlock = ({ project, media, snippet, children, link }) => {
  return (
    <div className="my-12 flex flex-col justify-center gap-y-6 max-w-[75vw] mx-auto 3xl:max-w-[1334px]">
      <a href={link} target="_blank" rel="noreferrer">
        <div className="flex flex-row items-center gap-4 justify-center">
          <h1 className="text-[#35383d] font-extrabold text-4xl sm:text-5xl 3xl:text-6xl">
            {project}
          </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
            />
          </svg>
        </div>
      </a>

      <video
        autoPlay
        muted
        className="flex rounded-xl videoshadow mx-auto"
        controlsList="nodownload noplaybackrate"
        disablePictureInPicture
        controls
        loop
      >
        <source src={media}></source>
      </video>
      <p className="text-md sm:text-xl xl:text-2xl 2xl:text-3xl">
        {children}
        <br />
        <br />
        <a href={"/snippets/" + snippet + ".txt"} target="_blank" rel="noreferrer">
          <code>{"</>"} View Code Snippet</code>
        </a>
      </p>
    </div>
  );
};

export default ProjectBlock;
