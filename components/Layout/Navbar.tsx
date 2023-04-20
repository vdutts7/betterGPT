import { FC } from "react";
import {
  faTwitter,
  faCreativeCommonsSampling,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

<>
  <FontAwesomeIcon icon={faCreativeCommonsSampling} />
  <FontAwesomeIcon icon={faTwitter} />
</>;

export const Navbar: FC = () => {
  return (
    <div className="flex h-[50px] sm:h-[60px] border-b border-neutral-300 py-2 px-2 sm:px-8 items-center justify-between">
      <div className="font-bold text-3xl flex items-center">
        <a className="ml-2 hover:opacity-50" href="https://vdutts7.com">
          <h1 className="bg-gradient-to-br from-rose-100 to-black-100 text-transparent bg-clip-text">
            Vivek
          </h1>
        </a>
      </div>
      <div className="flex items-center">
        <a
          href="https://twitter.com/vdutts7"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FontAwesomeIcon
            icon={faTwitter}
            className="text-2xl mx-2 hover:text-blue-500"
            style={{ color: "c" }} /* Add style with color property */
          />
        </a>
        <a href="mailto:contact@vdutts7.com" aria-label="Email">
          <FontAwesomeIcon
            icon={faCreativeCommonsSampling}
            className="text-2xl mx-2 hover:text-blue-500"
            style={{ color: "gray" }} /* Add style with color property */
          />
        </a>
      </div>
    </div>
  );
};
