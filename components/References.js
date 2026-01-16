"use client";
import Heading from "./Heading";
import SectionWrapper from "./SectionWrapper";
import data from "@/data/references";
import { Mail, Phone, Building2, Briefcase } from "lucide-react";

const References = () => {
    return (
        <SectionWrapper>
            <div>
                <Heading>Collaborations</Heading>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                    {data.map((ref) => (
                        <div
                            key={ref.id}
                            className="group relative bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-8 transition-all hover:border-violet-500/50 hover:shadow-2xl hover:shadow-violet-500/5"
                        >
                            <div className="flex flex-col h-full">
                                <div className="mb-6">
                                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                                        {ref.name}
                                    </h3>
                                    <div className="flex items-center gap-2 text-violet-600 dark:text-violet-400 font-semibold mb-1">
                                        <Briefcase size={16} />
                                        <span>{ref.position}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 text-sm italic">
                                        <Building2 size={16} />
                                        <span>{ref.company}</span>
                                    </div>
                                    {ref.workDescription && (
                                        <p className="mt-4 text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                                            {ref.workDescription}
                                        </p>
                                    )}
                                </div>

                                <div className="mt-auto pt-6 border-t border-zinc-200 dark:border-zinc-800 space-y-3">
                                    <a
                                        href={`mailto:${ref.email}`}
                                        className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors group/link"
                                    >
                                        <div className="w-8 h-8 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center group-hover/link:bg-violet-600/10 transition-colors">
                                            <Mail size={16} />
                                        </div>
                                        <span className="text-sm font-medium">{ref.email}</span>
                                    </a>

                                    {ref.phone && (
                                        <a
                                            href={`tel:${ref.phone}`}
                                            className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors group/link pl-1"
                                        >
                                            <span className="text-sm font-medium">{ref.phone}</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default References;
