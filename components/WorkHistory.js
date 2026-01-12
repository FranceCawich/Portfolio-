import Image from "next/image";
import Heading from "./Heading";
import SectionWrapper from "./SectionWrapper";
import data from "@/data/work";
import SkillComponent from "./SkillComponent";

const WorkHistory = () => {
  return (
    <SectionWrapper>
      <Heading>Work History</Heading>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {data.map((work) => (
          <div
            key={work.id}
            className="group relative bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 transition-all hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/10"
          >
            <div className="flex items-start gap-5">
              <div className="relative w-16 h-16 shrink-0 rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-700 bg-white">
                <Image
                  src={work.image}
                  fill
                  alt={work.role}
                  className="object-cover p-1"
                />
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 leading-tight mb-1 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                  {work.role}
                </h3>
                <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-1">
                  {work.company}
                </p>
                <div className="flex items-center gap-2 text-xs font-semibold text-zinc-500 dark:text-zinc-500 uppercase tracking-wider mb-3">
                  <span>{work.type}</span>
                  <span className="opacity-50">•</span>
                  <span>{work.date}</span>
                </div>

                {work.skills && (
                  <div className="flex flex-wrap gap-2">
                    {work.skills.map((skill) => (
                      <SkillComponent key={skill.id} skill={skill} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default WorkHistory;
