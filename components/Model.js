import Image from "next/image";

import { VscEyeClosed } from "react-icons/vsc";
import SkillComponent from "./SkillComponent";
import { TbWorldShare } from "react-icons/tb";


import {
  FaGithub,

} from "react-icons/fa";
import Link from "next/link";

const Model = ({ state, details, toggleModel }) => {
  return state ? (
    <div className="fixed inset-0 w-full h-screen bg-black/40 p-4 backdrop-blur-sm z-[999999] flex items-center justify-center">
      <VscEyeClosed
        className="cursor-pointer text-2xl absolute top-6 right-6 text-white hover:text-zinc-200 transition-colors"
        onClick={toggleModel}
        title="Close"
      />
      <div className="max-w-4xl w-full bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 shadow-2xl max-h-[85vh] overflow-y-auto">
        <div className="flex flex-col lg:flex-row gap-8 p-6 lg:p-8">
          <div className="relative w-full lg:w-[420px] rounded-lg overflow-hidden flex-shrink-0">
            <div className="pt-[56.25%] relative">
              <Image
                src={details.image}
                fill
                className="w-full h-full absolute inset-0 object-cover"
                alt={details.title}
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col">
            <h2 className="text-2xl lg:text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
              {details.title}
            </h2>

            <div className="mb-6">
              <h3 className="text-xs font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-widest mb-3">
                Technologies
              </h3>
              <div className="flex flex-wrap items-center gap-3">
                {details.skills.map((skill) => (
                  <SkillComponent skill={skill} key={skill.id} />
                ))}
              </div>
            </div>

            <p className="text-base leading-relaxed text-zinc-700 dark:text-zinc-300 mb-8 flex-grow">
              {details.description}
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href={details.source_code}
                target="_blank"
                className="flex items-center space-x-2 bg-zinc-900 dark:bg-zinc-800 text-white px-5 py-2.5 rounded hover:bg-zinc-800 dark:hover:bg-zinc-700 transition-colors font-semibold text-sm"
              >
                <FaGithub size={18} />
                <span>Source Code</span>
              </Link>

              <Link
                href={details.demo}
                target="_blank"
                className="flex items-center space-x-2 bg-violet-600 text-white px-5 py-2.5 rounded hover:bg-violet-700 transition-colors font-semibold text-sm"
              >
                <TbWorldShare size={18} />
                <span>Live Demo</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};
export default Model;
