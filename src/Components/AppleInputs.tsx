type Props = {
  label: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function AppleInput({
  label,
  type = "text",
  value,
  onChange,
}: Props) {
  return (
    <div className="relative">
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder=" "
        required
        className="
          peer w-full rounded-md border border-gray-300
          px-3 pt-5 pb-2 text-sm
          focus:border-gray-500 focus:outline-none
        "
      />
      <label
        className="
          absolute left-3 top-2 text-xs text-gray-500
          peer-placeholder-shown:top-3.5
          peer-placeholder-shown:text-sm
          peer-placeholder-shown:text-gray-400
          transition-all
        "
      >
        {label}
      </label>
    </div>
  );
}
