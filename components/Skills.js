import Heading from "./Heading";
import SectionWrapper from "./SectionWrapper";
import data from "@/data/skills";
import Image from "next/image";

const Skills = () => {
  const categories = [
    {
      title: "Frontend Development",
      skills: data.filter(s => [1, 2, 4, 5, 7, 8, 10, 13, 16, 18, 41].includes(s.id)) // HTML, CSS, Bootstrap, Tailwind, JS, TS, React, Next, Vue, Angular, Flutter
    },
    {
      title: "Backend & Databases",
      skills: data.filter(s => [20, 22, 24, 42, 19, 23, 25, 26, 38].includes(s.id)) // Node, Express, PHP, FastAPI, C++, Mongo, MySQL, Postgres, MariaDB
    },
    {
      title: "AI & Machine Learning",
      skills: data.filter(s => [36, 37, 39, 40, 43, 44].includes(s.id)) // DL, Python, PyTorch, TF, Colab, CUDA
    },
    {
      title: "Tools & DevOps",
      skills: data.filter(s => [33, 34, 35, 45].includes(s.id)) // AWS, Docker, Git, Kotlin(put here or mobile? kept here for now as mixed)
    }
  ];

  return (
    <SectionWrapper>
      <Heading>Technical Skills</Heading>

      <div className="space-y-12 mt-10">
        {categories.map((category, index) => (
          <div key={index}>
            <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-200 mb-6 border-b border-zinc-200 dark:border-zinc-800 pb-2 inline-block">
              {category.title}
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {category.skills.map((skill) => (
                <div
                  key={skill.id}
                  className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-4 flex items-center gap-4 transition-all hover:border-violet-600 dark:hover:border-violet-500 hover:shadow-lg hover:bg-white dark:hover:bg-black group"
                >
                  <div className="relative w-10 h-10 shrink-0">
                    <Image
                      src={skill.image}
                      fill
                      className="object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-300"
                      alt={skill.name}
                    />
                  </div>
                  <span className="font-semibold text-zinc-700 dark:text-zinc-300 group-hover:text-violet-600 dark:group-hover:text-violet-400 capitalize whitespace-nowrap overflow-hidden text-ellipsis">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
