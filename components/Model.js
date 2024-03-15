import { VscEyeClosed } from "react-icons/vsc";

const Model = ({state, details,toggleModel}) => {
  return state ? (
    <div className="fixed inset-0 w-full h-screen bg-black/25 p-4 backdrop-blur z-[999999] flex items-center justify-center">
      <VscEyeClosed
     
        className=" cursor-pointer text-[25px] animate-bounce absolute top-6 right-6 text-black dark:text-white"
        onClick={toggleModel}
      />
      <div className="max-w-screen-lg w-full bg-white dark:bg-zinc-900 p-6 rounded-lg corder border-zinc-100 dark:border-zinc-700 max-h-[80vh]">
        adasdadadasdasdasdasdasdasdadasd adasdadadasdasdasdasdasdasdadasd
        adasdadadasdasdasdasdasdasdadasd adasdadadasdasdasdasdasdasdadasd
        adasdadadasdasdasdasdasdasdadasd
      </div>
    </div>
  ) : ("");
};
export default Model;
