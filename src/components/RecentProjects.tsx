// import { ArrowRight } from "lucide-react";
// import { motion } from "framer-motion";
// import { projects } from "../data";
// import svg from "../../public/bg.png";
// import { AnimatedIcons } from "./ui/AnimatedTooltip";

// const RecentProjects = () => {
//   return (
//     <div className="py-20" id="projects">
//       <h1 className="heading text-white">
//         A highlights of
//         <span className="text-purple"> my projects</span>
//       </h1>
//       <div className="flex flex-wrap items-center justify-center p-2 gap-x-10 gap-y-10 mt-10">
//         {projects.map(({ id, title, des, img, iconLists, link }) => (
//           <motion.a
//             key={id}
//             className={`h-[25rem] sm:h-[30rem] sm:w-[450px] w-[70vw] bg-white/5 rounded-2xl p-6 border border-white/10 group hover:border-white/20 transition-colors ${
//               link ? "cursor-pointer" : ""
//             }`}
//             whileHover={{
//               y: -5,
//               transition: { duration: 0.2 },
//             }}
//             {...(link && {
//               as: "a",
//               href: link,
//               target: "_blank",
//               rel: "noopener noreferrer",
//             })}
//           >
//             <div className="relative w-full h-[30vh] sm:h-[40vh] mb-4 overflow-hidden rounded-xl">
//               <div className="absolute inset-0 bg-[#13162d]">
//                 <img
//                   src={svg}
//                   alt="bg-img"
//                   className="w-full h-full object-cover opacity-50"
//                 />
//               </div>
//               <img
//                 src={img}
//                 alt={title}
//                 className="absolute bottom-0 left-1/2 transform -translate-x-1/2 transition-transform group-hover:scale-105 duration-300"
//               />
//             </div>

//             <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-white/90 group-hover:text-white transition-colors">
//               {title}
//             </h1>

//             <p className="lg:text-lg lg:font-normal font-light md:text-base text-sm line-clamp-2 mt-2 text-white/70 group-hover:text-white/80 transition-colors">
//               {des}
//             </p>

//             <div className="flex items-center justify-between mt-7">
//               <AnimatedIcons icons={iconLists} />{" "}
//               {link && (
//                 <div className="flex justify-center items-center">
//                   <ArrowRight
//                     className="ms-3 transition-transform group-hover:translate-x-1"
//                     color="#cbacf9"
//                   />
//                 </div>
//               )}
//             </div>
//           </motion.a>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RecentProjects;

// import { ArrowRight } from "lucide-react";
// import { motion } from "framer-motion";
// import { projects } from "../data";
// import svg from "../../public/bg.png";
// import { AnimatedIcons } from "./ui/AnimatedTooltip";

// const RecentProjects = () => {
//   return (
//     <div className="py-20" id="projects">
//       <h1 className="heading text-white">
//         A highlights of
//         <span className="text-purple"> my projects</span>
//       </h1>
//       <div className="flex flex-wrap items-center justify-center p-2 gap-x-10 gap-y-10 mt-10">
//         {projects.map(({ id, title, des, img, iconLists, link }) => (
//           <motion.div
//             key={id}
//             className={`h-[25rem] sm:h-[30rem] sm:w-[450px] w-[70vw] bg-white/5 rounded-2xl p-6 border border-white/10 group hover:border-white/20 transition-colors relative`}
//           >
//             {/* Clickable anchor content */}
//             <motion.a
//               className="block w-full h-full"
//               whileHover={{
//                 y: -5,
//                 transition: { duration: 0.2 },
//               }}
//               {...(link && {
//                 href: link,
//                 target: "_blank",
//                 rel: "noopener noreferrer",
//               })}
//             >
//               <div className="relative w-full h-[30vh] sm:h-[40vh] mb-4 overflow-hidden rounded-xl">
//                 <div className="absolute inset-0 bg-[#13162d]">
//                   <img
//                     src={svg}
//                     alt="bg-img"
//                     className="w-full h-full object-cover opacity-50"
//                   />
//                 </div>
//                 <img
//                   src={img}
//                   alt={title}
//                   className="absolute bottom-0 left-1/2 transform -translate-x-1/2 transition-transform group-hover:scale-105 duration-300"
//                 />
//               </div>

//               <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-white/90 group-hover:text-white transition-colors">
//                 {title}
//               </h1>

//               <p className="lg:text-lg lg:font-normal font-light md:text-base text-sm line-clamp-2 mt-2 text-white/70 group-hover:text-white/80 transition-colors">
//                 {des}
//               </p>

//               {link && (
//                 <div className="flex justify-end items-center mt-4">
//                   <ArrowRight
//                     className="ms-3 transition-transform group-hover:translate-x-1"
//                     color="#cbacf9"
//                   />
//                 </div>
//               )}
//             </motion.a>

//             <div className="flex items-center absolute bottom-7 md:bottom-8 z-20">
//               <AnimatedIcons icons={iconLists} />
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RecentProjects;

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "../data";
import svg from "../../public/bg.png";
import { AnimatedIcons } from "./ui/AnimatedTooltip";

const RecentProjects = () => {
  return (
    <div className="py-12 sm:py-16 lg:py-20" id="projects">
      {/* Responsive heading with better spacing */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-white mb-8 sm:mb-12">
        A highlights of
        <span className="text-purple"> my projects</span>
      </h1>

      {/* Responsive grid with better spacing and sizing */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <motion.div
            key={id}
            className="bg-white/5 rounded-2xl border border-white/10 group hover:border-white/20 transition-colors relative h-full"
          >
            {/* Project card content wrapped in anchor if link exists */}
            <motion.a
              className="block p-4 sm:p-6 h-full"
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
              {...(link && {
                href: link,
                target: "_blank",
                rel: "noopener noreferrer",
              })}
            >
              {/* Image container with responsive height */}
              <div className="relative w-full aspect-[4/3] mb-4 sm:mb-6 overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-[#13162d]">
                  <img
                    src={svg}
                    alt="bg-img"
                    className="w-full h-full object-cover opacity-50"
                  />
                </div>
                <img
                  src={img}
                  alt={title}
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 transition-transform group-hover:scale-105 duration-300 w-auto h-auto max-w-full max-h-full"
                />
              </div>

              {/* Title with responsive font sizes */}
              <h2 className="text-xl sm:text-2xl font-bold text-white/90 group-hover:text-white transition-colors line-clamp-1 mb-2 sm:mb-3">
                {title}
              </h2>

              {/* Description with responsive text */}
              <p className="text-sm sm:text-base text-white/70 group-hover:text-white/80 transition-colors line-clamp-2 mb-4">
                {des}
              </p>

              {/* Icons and arrow container */}
              <div className="flex items-center justify-between mt-auto pt-4 sm:pt-6">
                <div
                  className="flex-shrink-0 "
                  onClick={e => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                >
                  <AnimatedIcons icons={iconLists} />
                </div>

                {link && (
                  <div className="flex items-center justify-center ml-4">
                    <ArrowRight
                      className="transition-transform group-hover:translate-x-1 w-5 h-5 sm:w-6 sm:h-6"
                      color="#cbacf9"
                    />
                  </div>
                )}
              </div>
            </motion.a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;

// import { ArrowRight } from "lucide-react";
// import { motion } from "framer-motion";
// import { projects } from "../data";
// import svg from "../../public/bg.png";
// import { AnimatedIcons } from "./ui/AnimatedTooltip";

// const RecentProjects = () => {
//   return (
//     <div className="py-12 sm:py-16 lg:py-20" id="projects">
//       {/* Responsive heading with better spacing */}
//       <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-white mb-8 sm:mb-12">
//         A highlights of
//         <span className="text-purple"> my projects</span>
//       </h1>

//       {/* Responsive grid with better spacing and sizing */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
//         {projects.map(({ id, title, des, img, iconLists, link }) => (
//           <motion.div
//             key={id}
//             className="bg-white/5 rounded-2xl border border-white/10 group hover:border-white/20 transition-colors relative"
//           >
//             {/* Clickable anchor content */}
//             <motion.a
//               className="block p-4 sm:p-6 h-full"
//               whileHover={{
//                 y: -5,
//                 transition: { duration: 0.2 },
//               }}
//               {...(link && {
//                 href: link,
//                 target: "_blank",
//                 rel: "noopener noreferrer",
//               })}
//             >
//               {/* Image container with responsive height */}
//               <div className="relative w-full aspect-[4/3] mb-4 sm:mb-6 overflow-hidden rounded-xl">
//                 <div className="absolute inset-0 bg-[#13162d]">
//                   <img
//                     src={svg}
//                     alt="bg-img"
//                     className="w-full h-full object-cover opacity-50"
//                   />
//                 </div>
//                 <img
//                   src={img}
//                   alt={title}
//                   className="absolute bottom-0 left-1/2 transform -translate-x-1/2 transition-transform group-hover:scale-105 duration-300 w-auto h-auto max-w-full max-h-full"
//                 />
//               </div>

//               {/* Title with responsive font sizes */}
//               <h2 className="text-xl sm:text-2xl font-bold text-white/90 group-hover:text-white transition-colors line-clamp-1 mb-2 sm:mb-3">
//                 {title}
//               </h2>

//               {/* Description with responsive text */}
//               <p className="text-sm sm:text-base text-white/70 group-hover:text-white/80 transition-colors line-clamp-2 mb-4">
//                 {des}
//               </p>

//               {/* Arrow for the link, always clickable */}
//               {link && (
//                 <div className="flex justify-end items-center mt-4 sm:mt-6">
//                   <ArrowRight
//                     className="ms-3 transition-transform group-hover:translate-x-1 w-5 h-5 sm:w-6 sm:h-6"
//                     color="#cbacf9"
//                   />
//                 </div>
//               )}
//             </motion.a>

//             {/* Icons Section (outside motion.a, absolute positioning) */}
//             <div className="absolute bottom-7 sm:bottom-8 z-20">
//               <AnimatedIcons icons={iconLists} />
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RecentProjects;
