interface Props {
  apiKey: string;
  onChange: (apiKey: string) => void;
}

export const APIKeyInput: React.FC<Props> = ({ apiKey, onChange }) => {
  return (
    <input
    className="min-h-[44px] w-400 rounded-md border border-zinc-300 px-3 py-2 text-sm placeholder:text-white-400 focus:outline-none focus:ring-2 focus:ring-zinc-400 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-700 dark:text-zinc-50 dark:focus:ring-zinc-400 dark:focus:ring-offset-zinc-900 col-span-3 bg-zinc-800"
    type="password"
      placeholder="OpenAI API Key"
      value={apiKey}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
