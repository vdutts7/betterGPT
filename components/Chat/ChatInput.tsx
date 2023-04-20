import { Message } from "@/types";
import { IconArrowUp } from "@tabler/icons-react";
import { FC, KeyboardEvent, useEffect, useRef, useState } from "react";

interface Props {
  onSend: (message: Message) => void;
}

export const ChatInput: FC<Props> = ({ onSend }) => {
  const [content, setContent] = useState<string>();

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (value.length > 4000) {
      alert("Message limit is 4000 characters");
      return;
    }

    setContent(value);
  };

  const handleSend = () => {
    if (!content) {
      alert("Please enter a message");
      return;
    }
    onSend({ role: "user", content });
    setContent("");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  useEffect(() => {
    if (textareaRef && textareaRef.current) {
      textareaRef.current.style.height = "inherit";
      textareaRef.current.style.height = `${textareaRef.current?.scrollHeight}px`;
    }
  }, [content]);

  return (
    <div className="relative h-full">
      <textarea
        ref={textareaRef}
        className="min-h-[44px] w-full rounded-md border border-zinc-300 px-3 py-2 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-400 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-700 dark:text-zinc-50 dark:focus:ring-zinc-400 dark:focus:ring-offset-zinc-900 col-span-3 bg-zinc-800"
        style={{ resize: "none" }}
        placeholder="Send a message..."
        value={content}
        rows={1}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />

      <button onClick={() => handleSend()}>
        <IconArrowUp className="absolute right-2 bottom-3 h-8 w-8 hover:cursor-pointer rounded-full p-1 bg-gradient-to-br from-rose-300 to-gray-300  text-black hover:opacity-80" />
      </button>
    </div>
  );
};
