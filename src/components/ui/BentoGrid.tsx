import { Check, Copy, Download } from "lucide-react";
import { cn } from "../../utils/cn";
import MagicButton from "../MagicButton";
import { BackgroundGradientAnimation } from "./GradientBg";
import { useState, useRef } from "react";
import { InfiniteMovingCards } from "./InfiniteCards";
import { saveAs } from "file-saver";
import { skillsList } from "../../data";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);
  const [downloaded, setIsDownloaded] = useState(false);
  const containerRef = useRef<HTMLUListElement>(null);
  const handleCopy = () => {
    navigator.clipboard.writeText("neerajvs31.off@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };
  const handleDownload = () => {
    const pdfUrl = "/Neeraj_SoftwareDeveloper.pdf";
    setIsDownloaded(true);
    saveAs(pdfUrl, "neeraj_resume.pdf");
    setTimeout(() => setIsDownloaded(false), 3000);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input shadow-none justify-between flex flex-col space-y-4 border border-white/[0.1]",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div
        className={`${(id === 6 || id == 2) && "flex justify-center"} h-full`}
      >
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover", "object-center")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={`object-cover object-center w-full h-full ${
                id === 1 && "hidden lg:block"
              }`}
            />
          )}
        </div>
        {id === 6 && <BackgroundGradientAnimation />}
        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          {id === 1 ? (
            <>
              <div className="font-sans font-bold text-lg lg:text-2xl max-w-96 z-10 text-white">
                {title}
              </div>
              <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
                {description}
              </div>
            </>
          ) : (
            <>
              <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
                {description}
              </div>
              <div className="font-sans font-bold text-lg lg:text-2xl max-w-96 z-10 text-white">
                {title}
              </div>
            </>
          )}

          {id == 2 && (
            <div className="flex align-cnter justify-center mt-3 relative">
              <MagicButton
                title={downloaded ? "Downloaded Successfully" : "Download CV"}
                icon={downloaded ? <Check /> : <Download />}
                position="left"
                otherClasses="!bg-[#161a31]"
                handleClick={handleDownload}
              />
            </div>
          )}
          {id === 3 && (
            <div className="flex text-white gap-10 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              <InfiniteMovingCards
                items={skillsList[0]}
                speed="normal"
                direction="right"
                ref={containerRef}
              />
              <InfiniteMovingCards
                items={skillsList[1]}
                speed="normal"
                direction="left"
                ref={containerRef}
              />
            </div>
          )}
          {id == 6 && (
            <div className="mt-5 relative">
              <MagicButton
                title={copied ? "Email Copied" : "Copy my email"}
                icon={copied ? <Check /> : <Copy />}
                position="left"
                otherClasses="!bg-[#161a31]"
                handleClick={handleCopy}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
