"use client";

interface InputProps {
  type: any;
  value: any;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  textarea?: boolean;
  id: string;
  placehoder?: string;
  big?: boolean;
}

export default function Input({
  type,
  value,
  onChange,
  name,
  textarea,
  id,
  placehoder,
  big,
}: InputProps) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      name={name}
      id={id}
      placeholder={placehoder}
      className={`w-full p-4 pt-6 font-light bg-white border-2 outline-none text-black ${
        big ? "w-[400px] pb-[6rem]" : ""
      }`}
    />
  );
}
