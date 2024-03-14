import Heading from "./Heading";
import data from "../data/about";
import SectionWrapper from "./SectionWrapper";

const About = () => {
  return (
    <SectionWrapper>
      <Heading>about</Heading>
      <h3 className=" text-xl md:text-2xl font-semibold text-black dark:text-white">
        {data.heading} 👋
      </h3>

      <p className="mt-3 text-base md:text-lg  text-black dark:text-zinc-400 justify-center"> {data.bio}</p>
    </SectionWrapper>
  );
};

export default About;
