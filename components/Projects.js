import Image from "next/image"
import Heading from "./Heading"
import SectionWrapper from "./SectionWrapper"
import data from "@/data/projects"

const Projects = () => {

    return (

<SectionWrapper>

<Heading>Projects</Heading>

{data.map((project) => (
    <div key={project.id} className="flex flex-wrap gap-5 w-full lg:w-8/12 mb-10">

        <div className="relative w-full md:w-[120px] h-[220px] md:h-20 rounded-lg overflow-hidden">

        <Image src={project.image} fill className="w-full h-full " alt="project image"></Image>
        </div>

        <div className="flex-1">

            <h2 className="text-xl font-bold text-zinc-700 dark:text-zinc-400 leading-[25px]"> {project.title}</h2>
            <p className="text-base font-semibold text-zinc-500 dark:text-zinc-100mt-2">{project.description.lenght > 100 ? <span>{project.description.slice(0,100)}...</span> :project.description}</p>
        </div>

    </div>


))}


</SectionWrapper>

    )
}

export default Projects