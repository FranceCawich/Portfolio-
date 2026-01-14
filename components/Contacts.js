import Heading from "./Heading";
import Link from "next/link";
import data from "@/data/contacts";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaDownload,
  FaWhatsapp,
  FaMedium,
  FaYoutube,
  FaFacebook,
  FaEnvelope,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { LiaCertificateSolid } from "react-icons/lia";

import { FaXTwitter } from "react-icons/fa6";
import SectionWrapper from "./SectionWrapper";

const Contacts = () => {
  return (
    <SectionWrapper>
      <Heading>Connect With Me</Heading>
      <div className="flex flex-wrap items-center gap-4 mt-8">
        {data.map((contact) => (
          <Link
            href={contact.link}
            key={contact.id}
            target="_blank"
            className="flex items-center gap-3 px-5 py-3 rounded-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-violet-600 dark:hover:border-violet-500 hover:text-violet-600 dark:hover:text-violet-400 hover:shadow-md transition-all group"
          >
            {contact.name === "github" && (
              <FaGithub size={20} className="text-zinc-800 dark:text-zinc-200 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors" />
            )}

            {contact.name === "twitter" && (
              <FaXTwitter size={20} className="text-zinc-800 dark:text-zinc-200 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors" />
            )}

            {contact.name === "linkedin" && (
              <FaLinkedin
                size={20}
                className="text-[#0a66c2] group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors"
                style={{ color: '' }} // Override default color on hover via class
              />
            )}

            {contact.name === "youtube" && (
              <FaYoutube size={20} className="text-[#ff0000] group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors" />
            )}

            {contact.name === "facebook" && (
              <FaFacebook
                size={20}
                className="text-[#1877f2] group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors"
              />
            )}

            {contact.name === "medium" && (
              <FaMedium size={20} className="text-zinc-800 dark:text-zinc-200 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors" />
            )}

            {contact.name === "email" && (
              <SiGmail size={20} className="text-red-500 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors" />
            )}

            {contact.name === "outlook" && (
              <FaEnvelope size={20} className="text-blue-500 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors" />
            )}

            {contact.name === "cv" && (
              <FaDownload size={20} className="text-zinc-800 dark:text-zinc-200 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors" />
            )}

            {contact.name === "Whatsapp" && (
              <FaWhatsapp size={20} className="text-[#128C7E] group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors" />
            )}

            {contact.name === "Cerificates" && (
              <LiaCertificateSolid size={22} className="text-zinc-800 dark:text-zinc-200 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors" />
            )}

            <span className="text-sm md:text-base capitalize font-bold text-zinc-700 dark:text-zinc-300 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
              {contact.label}
            </span>
          </Link>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Contacts;
