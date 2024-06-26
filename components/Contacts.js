import Heading from "./Heading";
import Link from "next/link";
import data from "@/data/contacts";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaDownload,
  FaWhatsapp ,
  FaMedium,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { LiaCertificateSolid } from "react-icons/lia";

import { FaXTwitter } from "react-icons/fa6";
import SectionWrapper from "./SectionWrapper";


const Contacts = () => {
  return (
    <SectionWrapper>
      <Heading>Contacts</Heading>
      <div className="flex flex-wrap items-center gap-5 ">
        {data.map((contact) => (
          <Link
            href={contact.link}
            key={contact.id}
            target="_blank"
            className="flex items-center space-x-2 bg-zinc-100 dark:bg-zinc-800 px-3 py-2  hover:text-black dark:hover:text-white"
          >
            {contact.name === "github" && (
              <FaGithub size={20} className="text-black dark:text-white" />
            )}

            {contact.name === "twitter" && (
              <FaXTwitter  size={20} className="text-black dark:text-white" />
            )}

            {contact.name === "linkedin" && (
              <FaLinkedin
                size={20}
                className="text-[#0a66c2] dark:text-white"
              />
            )}

            {contact.name === "youtube" && (
              <FaYoutube size={20} className="text-[#ff0000] dark:text-white" />
            )}

            {contact.name === "facebook" && (
              <FaFacebook
                size={20}
                className="text-[#1877f2] dark:text-white"
              />
            )}

            {contact.name === "medium" && (
              <FaMedium size={20} className="text-black dark:text-white" />
            )}

            {contact.name === "email" && (
              <SiGmail size={20} className="text-red-500 dark:text-white" />
            )}

            {contact.name === "cv" && (
              <FaDownload size={20} className="text-black dark:text-white" />
            )}
   {contact.name === "Whatsapp" && (
              <FaWhatsapp size={20} className="text-[#128C7E] dark:text-white" />
            )}

            {contact.name === "Cerificates" && (
              <LiaCertificateSolid size={20} className="text-black dark:text-white" />
            )}

            <span className=" text-sm md:text-base capitalize text-zinc-700 dark:text-white font-bold">
              {contact.label}
            </span>
          </Link>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Contacts;
