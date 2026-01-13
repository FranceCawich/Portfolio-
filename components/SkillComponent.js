import classNames from "classnames";
import Image from "next/image";
const SkillComponent = ({ skill }) => {
  return (
    <div className="flex items-center space-x-2 bg-white dark:bg-zinc-800/50 border border-zinc-200/50 dark:border-zinc-700/50 px-3 py-1.5 rounded-full shadow-sm hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/10 transition-all duration-300 transform hover:-translate-y-0.5 group/skill">
      <div className={classNames("relative w-5 h-5 flex-shrink-0 transition-all duration-300 group-hover/skill:scale-125 group-hover/skill:rotate-3", { 'bg-white rounded-full p-0.5 shadow-sm': skill.name === "next" })}>
        <Image src={skill.image} fill className="w-full h-full object-contain filter group-hover/skill:drop-shadow-[0_0_8px_rgba(139,92,246,0.6)]" alt={skill.name} />
      </div>
      <span className="text-zinc-700 dark:text-zinc-300 capitalize text-[10px] font-black tracking-widest group-hover/skill:text-violet-600 dark:group-hover/skill:text-violet-400 transition-colors">
        {skill.name}
      </span>
    </div>
  );
};
export default SkillComponent;
