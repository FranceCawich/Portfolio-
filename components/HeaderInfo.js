const HeaderInfo = ({Icon , title}) => {
    return (
        <div className="flex items-center space-x-2">
       {Icon}
   
        <span className="text-zinc-900  dark:text-zinc-400 capitalize text-base font-semibold">
          {title}
        </span>
      </div>
    );
    }

export default HeaderInfo;