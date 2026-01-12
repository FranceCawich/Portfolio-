import Heading from "./Heading";
import data from "../data/about";
import SectionWrapper from "./SectionWrapper";
import { BiSolidQuoteLeft } from "react-icons/bi";
import Image from "next/image";

const About = () => {
  return (
    <SectionWrapper>
      <Heading>About Me</Heading>

      <div className="flex flex-col md:flex-row items-center gap-10 mt-10">
        <div className="flex-1 relative p-8 bg-zinc-50 dark:bg-zinc-900 border-l-4 border-violet-600 dark:border-violet-500 rounded-r-xl shadow-sm">
          <BiSolidQuoteLeft className="absolute -top-4 -left-4 text-4xl text-violet-600 dark:text-violet-500 bg-white dark:bg-[#121212] rounded-full p-1" />

          <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
            {data.heading} <span className="inline-block animate-wave">👋</span>
          </h3>

          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 text-justify">
              {data.bio}
            </p>
          </div>
        </div>

        <div className="w-full md:w-5/12 relative aspect-square max-w-[400px]">
          <div className="absolute inset-0 bg-violet-600/10 dark:bg-violet-600/20 rounded-full blur-3xl transform scale-90"></div>
          <div className="relative w-full h-full" style={{ maskImage: 'radial-gradient(circle at center, black 40%, transparent 70%)', WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 70%)' }}>
            <Image
              src="/images/about_avatar_3d.png"
              fill
              className="object-contain relative z-10"
              alt="3D Avatar"
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
