/* eslint-disable @next/next/no-img-element */
import { workExperience } from "@/data";
import React from "react";
import { Button } from "./ui/MovingBorder";

const MyExperience = () => {
  return (
    <div className="py-20 " id={"experience"}>
      <h1 className="heading">
        My
        <span className="text-purple">Experience</span>
      </h1>
      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card, index) => (
          <Button
            key={index}
            duration={Math.floor(Math.random() * 10000) + 10000}
            className="flex-1 text-white border-neutral-200 dark:border-slate-800"
            borderRadius="1.75rem"
          >
            <div className="flex lg:flex-row  flex-col lg:items-center p-3 py-6 lg:p-1- md:p-5 gap-2">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl font-bold md:text-2xl">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default MyExperience;
