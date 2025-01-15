// import { useState } from "react";
// import {
//   motion,
//   useMotionValue,
//   useSpring,
//   useTransform,
//   AnimatePresence,
// } from "framer-motion";

// export const AnimatedIcons = ({
//   icons,
// }: {
//   icons: {
//     id: number;
//     name: string;
//     image: string;
//   }[];
// }) => {
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
//   const springConfig = { stiffness: 100, damping: 5 };
//   const x = useMotionValue(0);
//   const rotate = useSpring(
//     useTransform(x, [-100, 100], [-45, 45]),
//     springConfig
//   );
//   const translateX = useSpring(
//     useTransform(x, [-100, 100], [-50, 50]),
//     springConfig
//   );

//   const handleMouseMove = (event: any) => {
//     const halfWidth = event.target.offsetWidth / 2;
//     x.set(event.nativeEvent.offsetX - halfWidth);
//   };
//   return (
//     <div className="flex items-center cursor-default">
//       {icons.map((icon, index) => {
//         return (
//           <div
//             onMouseMove={handleMouseMove}
//             key={icon.name}
//             className="relative group"
//             onMouseEnter={() => setHoveredIndex(index)}
//             onMouseLeave={() => setHoveredIndex(null)}
//             style={{
//               transform: `translateX(-${5 * index + 2}px)`,
//             }}
//           >
//             <AnimatePresence>
//               {hoveredIndex === index && (
//                 <motion.div
//                   initial={{ opacity: 0, y: 20, scale: 0.6 }}
//                   animate={{
//                     opacity: 1,
//                     y: 0,
//                     scale: 1,
//                     transition: {
//                       type: "spring",
//                       stiffness: 260,
//                       damping: 10,
//                     },
//                   }}
//                   exit={{ opacity: 0, y: 20, scale: 0.6 }}
//                   style={{
//                     translateX: translateX,
//                     rotate: rotate,
//                     whiteSpace: "nowrap",
//                   }}
//                   className="absolute -top-10 -left-[70%] translate-x-1/2 flex text-xs flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
//                 >
//                   <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[20%] z-30 bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px " />
//                   <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40%] z-30 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />
//                   <div className="text-white text-xs">{icon.name}</div>
//                 </motion.div>
//               )}
//             </AnimatePresence>

//             <div
//               key={icon.id}
//               // className="border border-white/[0.2] rounded-full bg-black/50 lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center backdrop-blur-sm"
//               className="border border-white/[0.2] rounded-full bg-black/50 w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 flex justify-center items-center backdrop-blur-sm transition-all duration-300"
//             >
//               <img
//                 src={icon.image}
//                 height={40}
//                 width={40}
//                 alt={icon.name}
//                 // className="p-2"
//                 className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 object-contain transition-all duration-300"
//               />
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

import { useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";

export const AnimatedIcons = ({
  icons,
}: {
  icons: {
    id: number;
    name: string;
    image: string;
  }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );

  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <div className="flex items-center cursor-default">
      {icons.map((icon, index) => {
        const isHovered = hoveredIndex === index;

        return (
          <motion.div
            onMouseMove={handleMouseMove}
            key={icon.name}
            className="relative group"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            initial={{ x: -(5 * index + 2) }}
            animate={{
              x: -(5 * index + 2),
              scale: hoveredIndex === null ? 1 : isHovered ? 1.1 : 1,
              opacity: hoveredIndex === null ? 1 : isHovered ? 1 : 0.6,
              transition: {
                duration: 0.2,
                ease: "easeInOut",
              },
            }}
          >
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.6 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      type: "spring",
                      stiffness: 260,
                      damping: 10,
                    },
                  }}
                  exit={{ opacity: 0, y: 20, scale: 0.6 }}
                  style={{
                    translateX: translateX,
                    rotate: rotate,
                    whiteSpace: "nowrap",
                  }}
                  className="absolute -top-10 -left-[70%] translate-x-1/2 flex text-xs flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
                >
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[20%] z-30 bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40%] z-30 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px" />
                  <div className="text-white text-xs">{icon.name}</div>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.div
              key={icon.id}
              className="border border-white/[0.2] rounded-full bg-black/50 w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 flex justify-center items-center backdrop-blur-sm transition-all duration-300"
              whileHover={{
                borderColor: "rgba(255, 255, 255, 0.4)",
                backgroundColor: "rgba(0, 0, 0, 0.6)",
              }}
            >
              <motion.img
                src={icon.image}
                alt={icon.name}
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 object-contain transition-all duration-300"
                animate={{
                  scale: isHovered ? 1 : 1,
                  transition: { duration: 0.2 },
                }}
              />
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
};
