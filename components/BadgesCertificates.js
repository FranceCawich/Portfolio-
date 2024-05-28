import Image from "next/image";
import Heading from "./Heading";
import SectionWrapper from "./SectionWrapper";
import data from "@/data/BadgesCert";

const BadgesCertificates = () => {

    return (
        <SectionWrapper>
            <Heading>Badges & Certificates</Heading>


            {
                data.map((BadgesCert) => (


                    <div className="mt-6 flex gap-x-6 " key={BadgesCert.id}>
                        <div className="relative w-[50px] h-[50px] rounded-full overflow-hidden border dark:border-zinc-700">
                            <Image
                                src={BadgesCert.images}
                                fill
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex-1">
                            <h2 className=" text-black dark:text-white capitalize font-bold text-base">
                                {BadgesCert.CerificateName}
                            </h2>
                            <span className="capitalize text-sm font-bold text-zinc-500">
                                {BadgesCert.company}
                            </span>
                            <div className="flex flex-col items-start gap-y-1">
                                <span className="text-black dark:text-white capitalize text-sm font-bold">
                                    {BadgesCert.date}
                                </span>
                                <a
    href={BadgesCert.link}
    target="_blank"
    rel="noopener noreferrer"
    className="text-black dark:text-white capitalize text-sm font-bold hover:underline"
  >
    {BadgesCert.link}
  </a>

                            </div>
                            {BadgesCert.skills && (
                                <div className="flex gap-2 flex-wrap my-2">
                                    {BadgesCert?.skills?.map((skill) => (
                                        <SkillComponent key={skill.id} skill={skill} />
                                    ))}
                                </div>
                            )}
                            {/* 
                                        {work.options && <div className="mt-2">
                                            {work?.options?.map((option,key) => (
                                                <li key={key}>option</li>
                                                ))}
                                                
                                                </div>} */}
                        </div>
                    </div>

                ))}













        </SectionWrapper>






    );

};

export default BadgesCertificates;