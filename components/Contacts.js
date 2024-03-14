import Heading from "./Heading";
import Link from "next/link";
import data from "@/data/contacts";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaDownload,
  FaMedium,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";


const Contacts = () => {
  return (
    <section className="border-t border-zinc-100 dark:border-zinc-800">
      <Heading>Contacts</Heading>
      <div className="flex flex-wrap items-center gap-5">
        {data.map((contact) => (
          <Link
            href={contact.link}
            key={contact.id}
            target="_blank"
            className="flex items-center space-x-2 bg-zinc-100 dark:bg-zinc-800 px-3 py-2"
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

            <span className="text-base capitalize text-zinc-700 dark:text-white font-bold">
              {contact.label}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Contacts;
