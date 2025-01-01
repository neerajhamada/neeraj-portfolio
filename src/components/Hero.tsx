import { Navigation } from "lucide-react";
import { BackgroundBeams } from "./ui/BackgroundBeams";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerate";
import MagicButton from "./MagicButton";
import { FlipWords } from "./ui/FlipWords";

const Hero = () => {
  const words = [
    "Full Stack Developer",
    "Software Developer",
    "Data Science Expert",
    "Automation Tester",
  ];
  return (
    <div className="pt-38 pb-25 ">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="h-[85vh] w-full bg-black-100">
        <div className="flex justify-center relative my-20 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
              strategize first, code next
            </p>

            <TextGenerateEffect
              words="Transforming Concepts into Reality"
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
            />

            <p className="text-white-100 text-center md:tracking-wider p-5 mb-4 md:text-lg lg:text-2xl">
              Hi! I&apos;m Neeraj, a
              {/* <span className="pl-1 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"> */}
              <FlipWords
                className=""
                words={words}
              />
              {/* </span> */}
            </p>

            <a href="#about">
              <MagicButton
                title="Explore my work"
                icon={<Navigation fill="white" />}
                position="right"
              />
            </a>
          </div>
        </div>
        <BackgroundBeams />
      </div>
    </div>
  );
};

export default Hero;
