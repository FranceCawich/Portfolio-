import Image from "next/image";
import Heading from "./Heading";
import SectionWrapper from "./SectionWrapper";
import data from "@/data/work";
import SkillComponent from "./SkillComponent";

const WorkHistory = () => {
  return (
    <SectionWrapper>
      <div id="work-history">
        <Heading>Work History</Heading>

        <div className="relative mt-12 pl-8 md:pl-12 border-l-2 border-zinc-200 dark:border-zinc-800 space-y-12">
          {data.map((work, index) => (
            <div key={work.id} className="relative">
              {/* Timeline Dot */}
              <div className="absolute -left-[41px] md:-left-[53px] top-0 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-violet-500 ring-4 ring-white dark:ring-zinc-950 z-10" />
                <div className="absolute w-8 h-8 rounded-full bg-violet-500/20 animate-ping" />
              </div>

              {/* Work Card */}
              <div className="group relative bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 md:p-8 transition-all hover:border-violet-500/50 hover:shadow-xl hover:shadow-violet-500/5">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Company Logo */}
                  <div className="relative w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white group-hover:scale-105 transition-transform duration-300">
                    <Image
                      src={work.image}
                      fill
                      alt={work.role}
                      className="object-cover p-2"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                          {work.role}
                        </h3>
                        <p className="text-base font-semibold text-violet-600 dark:text-violet-400">
                          {work.company}
                        </p>
                      </div>
                      <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-zinc-200/50 dark:bg-zinc-800/50 text-zinc-600 dark:text-zinc-400">
                        {work.date}
                      </div>
                    </div>

                    <p className="text-xs font-bold text-zinc-500 dark:text-zinc-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                      {work.type}
                    </p>

                    {work.skills && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {work.skills.map((skill) => (
                          <SkillComponent key={skill.id} skill={skill} />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default WorkHistory;
