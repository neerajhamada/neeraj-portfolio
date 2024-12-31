// import { cn } from "../../utils/cn";
// import React, { useEffect, useState } from "react";

// export const InfiniteMovingCards = ({
//   items,
//   direction = "left",
//   speed = "fast",
//   pauseOnHover = true,
//   className,
// }
// : {
//   items: {
//     id: number;
//     name: string;
//   }[];
//   direction?: "left" | "right";
//   speed?: "fast" | "normal" | "slow";
//   pauseOnHover?: boolean;
//   className?: string;
// }) => {
//   const containerRef = React.useRef<HTMLDivElement>(null);
//   const scrollerRef = React.useRef<HTMLUListElement>(null);

//   useEffect(() => {
//     addAnimation();
//   }, []);
//   const [start, setStart] = useState(false);
//   function addAnimation() {
//     if (containerRef.current && scrollerRef.current) {
//       const scrollerContent = Array.from(scrollerRef.current.children);

//       scrollerContent.forEach((item) => {
//         const duplicatedItem = item.cloneNode(true);
//         if (scrollerRef.current) {
//           scrollerRef.current.appendChild(duplicatedItem);
//         }
//       });

//       getDirection();
//       getSpeed();
//       setStart(true);
//     }
//   }
//   const getDirection = () => {
//     if (containerRef.current) {
//       if (direction === "left") {
//         containerRef.current.style.setProperty(
//           "--animation-direction",
//           "forwards"
//         );
//       } else {
//         containerRef.current.style.setProperty(
//           "--animation-direction",
//           "reverse"
//         );
//       }
//     }
//   };
//   const getSpeed = () => {
//     if (containerRef.current) {
//       if (speed === "fast") {
//         containerRef.current.style.setProperty("--animation-duration", "20s");
//       } else if (speed === "normal") {
//         containerRef.current.style.setProperty("--animation-duration", "40s");
//       } else {
//         containerRef.current.style.setProperty("--animation-duration", "80s");
//       }
//     }
//   };
//   return (
//     <div
//       ref={containerRef}
//       className="flex text-white gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2"
//     >
//       <ul
//         ref={scrollerRef}
//         className={cn(
//           "flex flex-col gap-3 lg:gap-8",
//           start && "animate-scroll ",
//           pauseOnHover && "hover:[animation-play-state:paused]"
//         )}
//       >
//         {items.map((item, idx) => (
//           <li
//             className="py-2 lg:py-4 lg:px-3 px-2 text-xs lg:text-base opacity-80 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
//             key={idx}
//           >
//            {item.name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

import { cn } from "../../utils/cn";
import React, { useEffect, useState, forwardRef, useImperativeHandle } from "react";

export const InfiniteMovingCards = forwardRef(function InfiniteMovingCards(
  {
    items,
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
  }: {
    items: {
      id: number;
      name: string;
    }[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
  },
  ref: React.Ref<HTMLUListElement>
) {
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  const [start, setStart] = useState(false);

  useImperativeHandle(ref, () => scrollerRef.current as HTMLUListElement);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (scrollerRef.current) {
      scrollerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (scrollerRef.current) {
      const duration =
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
      scrollerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  return (
    <ul
      ref={scrollerRef}
      className={cn(
        "flex flex-col gap-3 md:gap-3 lg:gap-8",
        start && "animate-scroll",
        pauseOnHover && "hover:[animation-play-state:paused]",
        className
      )}
    >
      {items.map((item) => (
        <li
          className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
          key={item.id}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
});
