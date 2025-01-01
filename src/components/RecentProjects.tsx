import { ArrowRight } from "lucide-react";
import { projects } from "../data";
import svg from "../assets/bg.png";
import { motion } from "framer-motion";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading text-white">
        A highlights of
        <span className="text-purple"> my projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-2 gap-x-10 gap-y-10 mt-10">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <motion.a
            key={id}
            className={`h-[25rem] sm:h-[30rem] sm:w-[450px] w-[70vw] bg-white/5 rounded-2xl p-6 border border-white/10 group hover:border-white/20 transition-colors ${
              link ? "cursor-pointer" : ""
            }`}
            whileHover={{
              y: -5,
              transition: { duration: 0.2 },
            }}
            {...(link && {
              as: "a",
              href: link,
              target: "_blank",
              rel: "noopener noreferrer",
            })}
          >
            <div className="relative w-full h-[30vh] sm:h-[40vh] mb-4 overflow-hidden rounded-xl">
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
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 transition-transform group-hover:scale-105 duration-300"
              />
            </div>

            <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-white/90 group-hover:text-white transition-colors">
              {title}
            </h1>

            <p className="lg:text-lg lg:font-normal font-light md:text-base text-sm line-clamp-2 mt-2 text-white/70 group-hover:text-white/80 transition-colors">
              {des}
            </p>

            <div className="flex items-center justify-between mt-7 pointer-events-none">
              <div className="flex items-center">
                {iconLists.map((icon, index) => (
                  <div
                    key={icon}
                    className="border border-white/[0.2] rounded-full bg-black/50 lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center backdrop-blur-sm"
                    style={{
                      transform: `translateX(-${5 * index * 2}px)`,
                    }}
                  >
                    <img src={icon} alt={icon} className="p-2" />
                  </div>
                ))}
              </div>
              {link && (
                <div className="flex justify-center items-center">
                  <ArrowRight
                    className="ms-3 transition-transform group-hover:translate-x-1"
                    color="#cbacf9"
                  />
                </div>
              )}
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
