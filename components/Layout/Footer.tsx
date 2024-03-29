import { FC } from "react";

export const Footer: FC = () => {
  return <div className="bottom-0 my-auto text-xs w-full p-6">
      <p className="text-center">
        Made by 
        <span className="ml-1">
          <a
            href="https://twitter.com/vdutts7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-300 hover:font-bold"
          >
            @vdutts7. 
          </a>
        </span>
          Access the source code
          <a href="https://github.com/vdutts7/betterGPT" target="_blank" rel="noopener noreferrer" className="text-rose-300  
          hover:font-bold"> here.</a>
      </p>
    </div>;
};



// const Footer = () => {
//   return (
//     <div className="bottom-0 my-auto text-xs w-full bg-black p-6 text-white">
//       <p className="text-center">
//         Scripts, backend, UI made by 
//         <span className="ml-1">
//           <a
//             href="https://twitter.com/vdutts7"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-red-600 hover:font-bold"
//           >
//             @vdutts7.
//           </a>
//         </span>
//           Access the source code
//           <a href="https://github.com/vdutts7/yt-ai-chat" target="_blank" rel="noopener noreferrer" className="text-red-600 
//           hover:font-bold"> here.</a>
//       </p>
//     </div>
// //   );
// };
// export default Footer;
