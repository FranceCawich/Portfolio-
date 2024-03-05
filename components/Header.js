"use client ";
import Image from "next/image";
import data from "../data/header";
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

        <h1 className="text-5xl font-black  capitalize text-violet-700 ">{name}</h1>
      </div>
    </div>
  );
};

export default Header;
