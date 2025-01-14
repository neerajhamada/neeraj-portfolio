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
    <div
      // className="pt-38 pb-25 "
      className="pt-16 sm:pt-24 md:pt-26 pb-10 sm:pb-16 md:pb-18"
    >
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          // className="h-[80vh] w-[50vw] top-10 left-full"
          className="h-[60vh] sm:h-[70vh] md:h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight
          // className="left-80 top-28 h-[80vh] w-[50vw]"
          className="left-1/2 sm:left-60 md:left-80 top-28 h-[60vh] sm:h-[70vh] md:h-[80vh] w-[50vw]"
          fill="blue"
        />
      </div>

      <div className="h-[65vh] md:h-[75vh] lg:h-[85vh] w-full bg-black-100">
        <div className="flex justify-center relative my-20 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
              strategize first, code next
            </p>

            <TextGenerateEffect
              words="Transforming Concepts into Reality"
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
            />

            <div className="text-white-100 text-center md:tracking-wider p-5 mb-4 md:text-lg lg:text-2xl">
              Hi! I&apos;m Neeraj, a
              {/* <span className="pl-1 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"> */}
              <FlipWords className="" words={words} />
              {/* </span> */}
            </div>

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

// import { Navigation } from "lucide-react";
// import { BackgroundBeams } from "./ui/BackgroundBeams";
// import { Spotlight } from "./ui/Spotlight";
// import { TextGenerateEffect } from "./ui/TextGenerate";
// import MagicButton from "./MagicButton";
// import { FlipWords } from "./ui/FlipWords";

// const Hero = () => {
//   const words = [
//     "Full Stack Developer",
//     "Software Developer",
//     "Data Science Expert",
//     "Automation Tester",
//   ];

//   return (
//     <div className="relative pt-16 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20">
//       <div className="absolute inset-0 overflow-hidden">
//         <Spotlight
//           className="-top-40 left-0 sm:-left-10 md:-left-32 md:-top-20 h-screen"
//           fill="white"
//         />
//         <Spotlight
//           className="h-[60vh] sm:h-[70vh] md:h-[80vh] w-[50vw] top-10 left-full"
//           fill="purple"
//         />
//         <Spotlight
//           className="left-1/2 sm:left-60 md:left-80 top-28 h-[60vh] sm:h-[70vh] md:h-[80vh] w-[50vw]"
//           fill="blue"
//         />
//       </div>

//       <div className="min-h-[85vh] w-full bg-black-100 relative">
//         <div className="flex justify-center items-center px-4 sm:px-6 lg:px-8 relative z-10 h-full py-12 sm:py-16 md:py-20">
//           <div className="w-full max-w-[95vw] sm:max-w-xl md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
//             <p className="uppercase tracking-widest text-[10px] sm:text-xs text-center text-blue-100 max-w-[280px] sm:max-w-[320px] md:max-w-[400px]">
//               strategize first, code next
//             </p>

//             <TextGenerateEffect
//               words="Transforming Concepts into Reality"
//               className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-4 sm:mt-6"
//             />

//             <div className="text-white-100 text-center tracking-wide sm:tracking-wider p-3 sm:p-4 md:p-5 my-4 sm:my-6 text-base sm:text-lg md:text-xl lg:text-2xl">
//               Hi! I&apos;m Neeraj, a
//               <FlipWords
//                 className="ml-1"
//                 words={words}
//               />
//             </div>

//             <a
//               href="#about"
//               className="mt-4 sm:mt-6 md:mt-8"
//             >
//               <MagicButton
//                 title="Explore my work"
//                 icon={<Navigation className="w-4 h-4 sm:w-5 sm:h-5" fill="white" />}
//                 position="right"
//               />
//             </a>
//           </div>
//         </div>
//         <BackgroundBeams />
//       </div>
//     </div>
//   );
// };

// export default Hero;
