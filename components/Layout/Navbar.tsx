import { FC } from "react";

<>

</>;

export const Navbar: FC = () => {
  return (
    <div className="flex h-[50px] sm:h-[60px] border-b border-neutral-300 py-2 px-2 sm:px-8 items-center justify-between">
     
      
      <div className="flex items-left">
        <span>
          <img src="https://raw.githubusercontent.com/vdutts7/dump/main/assets/_bettergpt-logo.png" alt="" width="100px" className="h-12"/>
        </span>
        <div className="text-white mt-2 ml-4 font-bold text-lg flex items-center">
          <span className="title-text">BetterGPT ⚡️</span> 
        </div>
      </div>
      
    </div>
  );
};
