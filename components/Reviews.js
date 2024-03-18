import Heading from "./Heading";
import SectionWrapper from "./SectionWrapper";

const Reviews = () => {
  return (
    <SectionWrapper>
      <Heading> Testimonials about Nextjs and Tailwind css</Heading>

      <h1 className="text-3xl md:text-5xl font-bold capitalize mt-5">
        What{" "}
        <strong className="text-violet-600  dark:text-zinc-400 ">
          {" "}
          People Say
        </strong>
        <p className="text-lg font-medium w-full lg:w-6/12 mb-10 mt-5">
          {" "}
          I craft more than just products; I mold experiences, evoke emotions,
          and shape stories with every creation.
        </p>
      </h1>
    </SectionWrapper>
  );
};

export default Reviews;
