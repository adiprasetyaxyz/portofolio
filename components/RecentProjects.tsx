import { projects } from "@/data";
import React from "react";

export const RecentProjects = () => {
  return (
    <div className="py-20 ">
      <h1 className="heading">
        A Small Selection of <br />
        <span className="text-purple">Recent Projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-16 p-4 mt-10">
        {projects.map(({ title, id, des, img, iconLists, link }) => (
          <div key={id}>{title}</div>
        ))}
      </div>
    </div>
  );
};
