"use client";

interface InputProps {
  type: any;
  value: any;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  textarea?: boolean;
  id: string;
  placeholder?: string;
  big?: boolean;
}

export default function Input({
  type,
  value,
  onChange,
  name,
  textarea,
  id,
  placeholder,
  big,
}: InputProps) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      name={name}
      id={id}
      placeholder={placeholder}
      className={`w-full p-4 font-light bg-white border-2 outline-none text-black rounded-3xl ${
        textarea ? "w-700px h-500px" : "w-full"
      } ${big ? "w-[400px] pb-[6rem]" : ""}`}
    />
  );
}
