"use client";

import Image from "next/image";
import Heading from "./Heading";
import SectionWrapper from "./SectionWrapper";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import data from "@/data/projects";
import Model from "./Model";
import { useState } from "react";

const Projects = () => {
  const [state, setState] = useState(false);
  const [details, setDetails] = useState(null);

  const toggleModel = () => {
    setState(!state);
  };

  return (
    <>
      <Model state={state} details={details} toggleModel={toggleModel} />
      <SectionWrapper>
        <Heading>Projects</Heading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {data.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden transition-all hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/10 cursor-pointer"
              onClick={() => {
                toggleModel();
                setDetails(project);
              }}
            >
              <div className="relative w-full aspect-video overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                <Image
                  src={project.image}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  alt={project.title}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="bg-white/90 dark:bg-zinc-900/90 text-zinc-900 dark:text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    View Details
                  </span>
                </div>
              </div>

              <div className="flex-1 p-5 flex flex-col">
                <div className="flex justify-between items-start gap-4 mb-3">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 leading-tight group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                    {project.title}
                  </h3>
                  <HiMiniArrowTrendingUp className="text-xl text-zinc-400 group-hover:text-violet-600 transition-colors shrink-0" />
                </div>

                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-3 mb-4 flex-1">
                  {project.description}
                </p>

                <div className="flex items-center gap-2 text-sm font-semibold text-violet-600 dark:text-violet-400 group-hover:translate-x-1 transition-transform">
                  Read More <span aria-hidden="true">&rarr;</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
};

export default Projects;
