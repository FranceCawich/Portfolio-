'use client'

import { FaCloudMoon } from "react-icons/fa";
const DarkLight =() => {
    return (
        <div className="fixed top-4 right-4 w-12 h-[18px] rounded-full bg-zinc-700 flex items-center">

            <span className="w-7 h-7 flex items-center justify-center bg-black rounded-full">
                
                <FaCloudMoon className="text-white" size={14}/>
                
                </span>
     
        </div>
    )
    }
    export default DarkLight


