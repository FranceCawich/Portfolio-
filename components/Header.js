"use client ";
import Image from "next/image";
import data from "../data/header";
import { SiGooglemaps } from "react-icons/si";
import HeaderInfo from "./HeaderInfo";

import { VscTerminalBash } from "react-icons/vsc";
const Header = () => {
  const { image, name, jobTitle, address, experience, education } = data;
  return (
    <div className="flex  items-center gap-x-8">
      <div className="w-[150px] h-[150px] relative rounded-full overflow-hidden">
        <Image
          src={image}
          fill
          alt="profile image"
          className="w-full h-full object-cover hover:scale-125 hover:rotate-12 transition-all duration-500"
        />
      </div>
      <div>
        <h1 className="text-5xl font-black  capitalize text-violet-700 dark:text-white ">
          {name}
        </h1>
        <h3 className="mt-2 text-xl font-bold capitalize dark:text-zinc-400">
          {" "}
          {jobTitle}
        </h3>

        <div className="felx items-center gap-x-4 mt-2">
          <HeaderInfo
            Icon={
              <SiGooglemaps
                className=" text-violet-700 dark:text-zinc-400"
                size={16}
              />
            }
            title={address}
          />

          <HeaderInfo
            Icon={
              <VscTerminalBash
                className=" text-violet-700 dark:text-zinc-400"
                size={16}
              />
            }
            title={experience}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
