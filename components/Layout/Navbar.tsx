import { FC } from "react";
import {
  faTwitter,
  faCreativeCommonsSampling,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MarkGithubIcon } from '@primer/octicons-react';  
import { IconBrandTwitter } from "@tabler/icons-react";

<>
  <FontAwesomeIcon icon={faCreativeCommonsSampling} />
  <FontAwesomeIcon icon={faTwitter} />
</>;

export const Navbar: FC = () => {
  return (
    <div className="flex h-[50px] sm:h-[60px] border-b border-neutral-300 py-2 px-2 sm:px-8 items-center justify-between">
     
      
      <div className="flex items-left">
        <a href="https://yt-chat-mkbhd.vercel.app">
          <img src="https://raw.githubusercontent.com/vdutts7/dump/main/assets/_bettergpt-logo.png" alt="" width="100px" className="h-12"/>
        </a>
        <div className="text-white mt-2 ml-4 font-bold text-lg flex items-center">
          <span className="title-text">MKBHD ⚡️</span>  
          <span className="mx-2"> | </span>
          <span className="mx-2">AI Chatbot</span>
        </div>
      </div>

      
      <div className="flex items-right text-white ">
        <div className="flex items-center">     
         <a href="https://github.com/vdutts7/betterGPT" target="_blank" rel="noreferrer">
           <MarkGithubIcon className="h-7 w-7 hover:text-rose-600" />   
         </a>
         <a href="https://twitter.com/vdutts7" target="_blank" rel="noreferrer">
            <IconBrandTwitter className="h-7 w-7 mx-2 hover:text-rose-600"/>
         </a>
        </div>          
      </div>
      
    </div>
  );
};
