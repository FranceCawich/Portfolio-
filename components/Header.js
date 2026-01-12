"use client";
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsTerminalFill } from "react-icons/bs";
import { IoIosSchool } from "react-icons/io";

import data from "../data/header";
import HeaderInfo from "./HeaderInfo";
import CVDownloadButton from "./CVDownloadButton";
const Header = () => {
  const { image, name, jobTitle, experience, education, address } = data;
  return (
    <header className="flex flex-col md:flex-row items-center gap-10 pb-10 border-b border-zinc-200 dark:border-zinc-800">
      <div className="relative w-[180px] h-[180px] md:w-[200px] md:h-[200px] shrink-0">
        <div className="absolute inset-0 rounded-full border-4 border-violet-100 dark:border-violet-900/30 scale-105"></div>
        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-zinc-900 shadow-xl">
          <Image
            src={image}
            fill
            alt="profile image"
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 border-4 border-white dark:border-zinc-900 rounded-full"></div>
      </div>

      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-black capitalize text-zinc-900 dark:text-white tracking-tight mb-2">
          {name}
        </h1>
        <h3 className="text-lg md:text-xl font-bold uppercase tracking-widest text-violet-600 dark:text-violet-400 mb-6">
          {jobTitle}
        </h3>

        <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-4">
          <div className="flex items-center gap-2 bg-zinc-100 dark:bg-zinc-800 px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-700">
            <FaMapMarkerAlt className="text-violet-600 dark:text-violet-400" size={16} />
            <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">{address}</span>
          </div>

          <div className="flex items-center gap-2 bg-zinc-100 dark:bg-zinc-800 px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-700">
            <BsTerminalFill className="text-violet-600 dark:text-violet-400" size={16} />
            <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">{experience}</span>
          </div>

          <div className="flex items-center gap-2 bg-zinc-100 dark:bg-zinc-800 px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-700">
            <IoIosSchool className="text-violet-600 dark:text-violet-400" size={18} />
            <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">{education}</span>
          </div>
        </div>

        <div className="flex justify-center md:justify-start">
          <CVDownloadButton />
        </div>
      </div>
    </header>
  );
};
export default Header;
