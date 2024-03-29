import { SiVercel } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="border-t border-t-zinc-100 dark:border-t-zinc-800 mt-10">
      <div className="max-w-screen-xl mx-auto px-4 py-5">
        <p className="text-sm font-semibold text-center text-zinc-800 dark:text-zinc-400">
          Developed by <strong className="font-black">Francis Cawich</strong> powered by<span className="flex items-center justify-center">
            <SiVercel className="inline-block mr-1" /> Vercel
            <TbBrandNextjs className="inline-block mr-1" /> Next.js
          </span> 
  
  
        </p>
      </div>
    </footer>
  );
};

export default Footer;
