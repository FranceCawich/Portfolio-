import Image from "next/image";
import Heading from "./Heading";
import SectionWrapper from "./SectionWrapper";
import data from "@/data/BadgesCert";
import SkillComponent from "./SkillComponent";
import { BsBoxArrowUpRight } from "react-icons/bs";

const BadgesCertificates = () => {
    return (
        <SectionWrapper>
            <Heading>Badges & Certificates</Heading>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                {data.map((cert) => (
                    <div
                        key={cert.id}
                        className="group relative bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 transition-all hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/10"
                    >
                        <div className="flex items-start gap-5">
                            <div className="relative w-16 h-16 shrink-0 rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-700 bg-white">
                                <Image
                                    src={cert.images}
                                    fill
                                    alt={cert.CerificateName}
                                    className="object-cover p-1"
                                />
                            </div>

                            <div className="flex-1 min-w-0">
                                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 leading-tight mb-1 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                                    {cert.CerificateName}
                                </h3>
                                <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-1">
                                    {cert.company}
                                </p>
                                <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-500 uppercase tracking-wider mb-3">
                                    {cert.date}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {cert.skills?.map((skill) => (
                                        <SkillComponent key={skill.id} skill={skill} />
                                    ))}
                                </div>

                                <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 transition-colors"
                                >
                                    View Certificate
                                    <BsBoxArrowUpRight className="text-xs" />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default BadgesCertificates;