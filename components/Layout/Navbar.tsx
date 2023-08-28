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
      <div className="font-bold text-3xl flex items-center">
        <img
            src="https://raw.githubusercontent.com/vdutts7/dump/main/assets/_bettergpt-logo.png"
            alt=""
            width="100px"
            // style={{ marginLeft: "100px", marginTop: "-110px" }}
          />
          <a className="ml-2 hover:opacity-50" href="https://vd7.io">
            {/* <h1 className="bg-gradient-to-br from-rose-100 to-black-100 text-transparent bg-clip-text">
              vdutts7
            </h1> */}
          </a>
      </div>

      
      <div className="flex items-right text-white ">
        <div className="flex items-center">     
         <a href="https://github.com/vdutts7/yt-chat-mkbhd" target="_blank" rel="noreferrer">
           <MarkGithubIcon className="h-7 w-7 hover:text-red-600" />   
         </a>
         <a href="https://twitter.com/vdutts7" target="_blank" rel="noreferrer">
            <IconBrandTwitter className="h-7 w-7 mx-2 hover:text-red-600"/>
         </a>
        </div>          
      </div>
      
    </div>
  );
};
