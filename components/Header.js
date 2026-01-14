"use client";
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsTerminalFill } from "react-icons/bs";
import { IoIosSchool } from "react-icons/io";
import { motion } from "framer-motion";

import data from "../data/header";
import CVDownloadButton from "./CVDownloadButton";

const Header = () => {
  const { image, name, jobTitle, experience, education, address } = data;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -6 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.8, ease: "backOut" },
    },
  };

  return (
    <motion.header
      className="flex flex-col md:flex-row items-center gap-12 py-12 border-b border-purple-500/10"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="relative w-[200px] h-[200px] md:w-[240px] md:h-[240px] shrink-0"
        variants={imageVariants}
      >
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-purple-600 to-pink-500 rotate-6 opacity-30 blur-2xl"></div>
        <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
          <Image
            src={image}
            fill
            alt="profile image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 border-4 border-slate-950 rounded-full shadow-lg z-10"></div>
      </motion.div>

      <div className="flex-1 text-center md:text-left">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter mb-4 leading-tight"
          variants={itemVariants}
        >
          Francis <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Cawich</span>
        </motion.h1>

        <motion.h3
          className="text-xl md:text-2xl font-bold uppercase tracking-[0.2em] text-purple-400 mb-8 opacity-90"
          variants={itemVariants}
        >
          {jobTitle}
        </motion.h3>

        <motion.div
          className="flex flex-wrap justify-center md:justify-start gap-3 mb-8"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="flex items-center gap-2 bg-slate-900/50 backdrop-blur px-5 py-2.5 rounded-full border border-purple-500/20 text-slate-300">
            <FaMapMarkerAlt className="text-purple-400" size={18} />
            <span className="text-sm font-bold uppercase tracking-wide">{address}</span>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center gap-2 bg-slate-900/50 backdrop-blur px-5 py-2.5 rounded-full border border-purple-500/20 text-slate-300">
            <BsTerminalFill className="text-purple-400" size={18} />
            <span className="text-sm font-bold uppercase tracking-wide">{experience}</span>
          </motion.div>

          <div className="flex flex-col gap-3">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-center gap-2 bg-slate-900/50 backdrop-blur px-5 py-2.5 rounded-full border border-purple-500/20 text-slate-300 w-fit mx-auto md:mx-0"
              >
                <IoIosSchool className="text-purple-400 shrink-0" size={20} />
                <span className="text-xs md:text-sm font-bold uppercase tracking-wide">
                  {edu.degree} {edu.period && `(${edu.period})`} - {edu.institution}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center md:justify-start"
          variants={itemVariants}
        >
          <CVDownloadButton />
        </motion.div>
      </div>
    </motion.header>
  );
};
export default Header;

