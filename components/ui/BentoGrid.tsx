"use client";

import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";
import { div } from "three/webgpu";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from "../../data/confetti.json";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";

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
  header,
  icon,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id: number;
  img?: string;
  imgClassName?: string;
  titleClassName: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("adiprasetyawanxyz@icloud.com");
    setCopied(true);
  };
  return (
    <div
      className={cn(
        "row-span-1 border border-white/[0.2] relative overflow-hidden rounded-2xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none   justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(2,0,36)",
        backgroundColor:
          "linear-gradient(256deg, rgba(2,0,36,1) 0%, rgba(9,38,121,1) 46%, rgba(0,212,255,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center h-full"} `}>
        <div className="h-full w-full absolute">
          {img && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover", "objecct-center")}
            ></img>
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={spareImg}
              alt={spareImg}
              className={"object-cover object-center h-full w-full"}
            ></img>
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            {/* <div className="absolute z-50 flex items-center justify-center text-white font-bold"></div> */}
          </BackgroundGradientAnimation>
        )}
        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight text-[#c1c2d3] md:text-xs lg:text-base z-10 text-sm  dark:text-neutral-300">
            {description}
          </div>
          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10 dark:text-neutral-200 mb-2 mt-2">
            {title}
          </div>

          {id === 2 && <GlobeDemo />}
          {id === 3 && (
            <div className="flex gap-1 lg-gap w-fit absolute -right-3 lg:-right-2">
              <div className="flex flex-col gap-3 lg:gap-2">
                {["React Js", "Next Js", "Javascript"].map((item) => (
                  <span
                    key={item}
                    className="py-2 lg:py4 lg:px-3 opacity-50 text-xs  lg:opacity-100 rounded-lg lg:text-base text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}

                <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]"></span>
              </div>

              <div className="flex flex-col gap-3 lg:gap-2">
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]"></span>
                {["React Js", "Next Js", "Javascript"].map((item) => (
                  <span
                    key={item}
                    className="py-2 lg:py4 lg:px-3 opacity-50 text-xs  lg:opacity-100 rounded-lg lg:text-base text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
          {id === 6 && (
            <div className="mt-5 relative">
              <div className="absolute -bottom-5 right-0">
                <Lottie
                  options={{
                    loop: copied,
                    autoplay: copied,
                    animationData,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYmid slice",
                    },
                  }}
                />
              </div>
              <MagicButton
                title={copied ? "Email copied" : "Copy my email"}
                icon={<IoCopyOutline className="text-2xl" />}
                position="left"
                otherClasses={"!bg-[#161a31]"}
                handleClick={handleCopy}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
