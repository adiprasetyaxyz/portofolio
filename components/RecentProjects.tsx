/* eslint-disable @next/next/no-img-element */
import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa";
import { HoverEffect } from "./ui/CardHover";

export const RecentProjects = () => {
  return (
    <div className="py-20 ">
      <h1 className="heading">
        A Small Selection of <br />
        <span className="text-purple">Recent Projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-16 p-4 mt-10">
        <HoverEffect items={projects} />
      </div>
    </div>
  );
};
