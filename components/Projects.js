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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
          {data.map((project) => (
            <article
              key={project.id}
              className="group relative flex flex-col bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200/50 dark:border-zinc-800/50 rounded-2xl overflow-hidden transition-all duration-500 hover:border-violet-500/50 hover:shadow-[0_20px_50px_rgba(139,92,246,0.15)] cursor-pointer"
              onClick={() => {
                toggleModel();
                setDetails(project);
              }}
            >
              {/* Image Container with Glow Effect */}
              <div className="relative w-full aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  alt={project.title}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Action Button - Floating */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <span className="bg-white/95 dark:bg-zinc-900/95 text-zinc-900 dark:text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-2xl backdrop-blur-md border border-white/20 dark:border-zinc-800/50 flex items-center gap-2">
                    View Case Study <HiMiniArrowTrendingUp className="text-violet-500" />
                  </span>
                </div>

                {/* Top Right Tag */}
                <div className="absolute top-4 right-4">
                  <div className="bg-zinc-900/60 backdrop-blur-md text-white/90 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/10">
                    Project {project.id}
                  </div>
                </div>
              </div>

              {/* Content Area */}
              <div className="flex-1 p-8 flex flex-col">
                <div className="flex justify-between items-start gap-4 mb-3">
                  <h3 className="text-xl font-extrabold text-zinc-900 dark:text-zinc-100 leading-tight group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>

                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-loose line-clamp-2 mb-6 flex-1">
                  {project.description}
                </p>

                {/* Skills Preview */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.skills.slice(0, 4).map((skill) => (
                    <div
                      key={skill.id}
                      className="relative w-6 h-6 rounded-full overflow-hidden bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700"
                      title={skill.name}
                    >
                      <Image src={skill.image} fill className="object-cover p-1" alt={skill.name} />
                    </div>
                  ))}
                  {project.skills.length > 4 && (
                    <div className="w-6 h-6 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-[10px] font-bold text-zinc-500">
                      +{project.skills.length - 4}
                    </div>
                  )}
                </div>

                <div className="group/btn flex items-center gap-2 text-sm font-bold text-violet-600 dark:text-violet-400">
                  <span className="relative">
                    Learn More
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-600 dark:bg-violet-400 transition-all duration-300 group-hover/btn:w-full"></span>
                  </span>
                  <span className="transform transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                </div>
              </div>

              {/* Decorative accent */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-violet-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </article>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
};

export default Projects;
