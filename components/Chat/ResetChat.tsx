import { FC } from "react";

interface Props {
  onReset: () => void;
}

export const ResetChat: FC<Props> = ({ onReset }) => {
  return (
    <div className="text-xs sm:text-sm text-neutral-900 font-semibold rounded-lg px-1 py-0.5 sm:px-4 sm:py-2 bg-neutral-200 hover:bg-neutral-300 focus:outline-none focus:ring-1 focus:ring-neutral-300">
      <button
        type="button"
        onClick={() => onReset()}
        style={{ width: "33.33%", height: "10px" }}
      >
        Reset
      </button>

      <div className="flex flex-row items-center"></div>
    </div>
  );
};
