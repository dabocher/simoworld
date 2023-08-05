import { ComponentProps } from "react";
import { racing as font } from "@/app/layout";

type InputFieldProps = {
  labelText: string;
  name: string;
  placeholder: string;
} & ComponentProps<"input">;

const InputField = ({
  placeholder,
  labelText,
  name,
  ...props
}: InputFieldProps) => {
  return (
    <div
      className="w-full flex flex-col 
    text-zinc-600"
    >
      <label className={`${font.className} text-2xl`} htmlFor={name}>
        {labelText}
      </label>
      <input
        placeholder={placeholder}
        className="w-full p-4 h-12 rounded-md "
        name={name}
        id={name}
        {...props}
        required
        aria-label={`${name} input`}
      />
    </div>
  );
};

export default InputField;
