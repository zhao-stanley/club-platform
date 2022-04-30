import "./index.css";
//Components
import GithubCorner from "./components/GithubCorner";
import HeroText from "./components/HeroText";
import Running from "./components/Running";
import Quals from "./components/Quals";
import Projects from "./components/Projects";
import ThankYou from './components/ThankYou';
//Media Imports
import ubg from "./media/ubg.mp4";
import parallax from "./media/parallax.mp4";
import jcp from "./media/jcp.mp4";
import sticker from "./media/sticker.mp4";
import platform from "./media/platform.mp4";
import wave from "./media/wave.gif";

//add code snippets for remaining projects and implement desktop view

const App = () => {
  return (
    <>
      <GithubCorner />
      <HeroText />
      <Running />
      <Quals />
      <Projects
        ubg={ubg}
        parallax={parallax}
        jcp={jcp}
        sticker={sticker}
        platform={platform}
      />
      <ThankYou   wave={wave}  />
    </>
  );
};

export default App;

/*
<div className="bg-[var(--yellow)] font-[Poppins] flex items-center mx-auto justify-center content-center w-screen h-screen">
      <div className="relative flex">
        <h1>Welcome to my portfolio.</h1>
      </div>
    </div>
*/
