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
            <article
              key={project.id}
              className="group relative flex flex-col bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden transition-all hover:border-violet-500/50 hover:shadow-xl hover:shadow-violet-500/10 cursor-pointer"
              onClick={() => {
                toggleModel();
                setDetails(project);
              }}
            >
              <div className="relative w-full aspect-video overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                <Image
                  src={project.image}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  alt={project.title}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="bg-white/95 dark:bg-zinc-900/95 text-zinc-900 dark:text-white px-5 py-2 rounded text-sm font-semibold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    View Project
                  </span>
                </div>
              </div>

              <div className="flex-1 p-6 flex flex-col">
                <div className="flex justify-between items-start gap-4 mb-4">
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 leading-snug group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                    {project.title}
                  </h3>
                  <HiMiniArrowTrendingUp className="text-lg text-zinc-300 group-hover:text-violet-600 transition-colors shrink-0 mt-0.5" />
                </div>

                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-3 mb-4 flex-1">
                  {project.description}
                </p>

                <div className="flex items-center gap-2 text-xs font-semibold text-violet-600 dark:text-violet-400 group-hover:translate-x-1 transition-transform uppercase tracking-wide">
                  Learn More <span aria-hidden="true">→</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
};

export default Projects;
