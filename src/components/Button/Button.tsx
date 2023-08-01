import Link from "next/link";
import { racing as font } from "@/app/layout";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  isDisabled?: boolean;
  type?: "button" | "submit";
  url: string;
}

const Button = ({ text, onClick, isDisabled, type, url }: ButtonProps) => {
  return (
    <Link href={url}>
      <button
        type={type}
        disabled={isDisabled}
        className={`${font.className} transition-all duration-1000 disabled:opacity-75  text-4xl text-center rounded-lg border border-transparent px-4 py-2 bg-blue-600 font-medium text-white hover:bg-blue-800 hover:scale-[1.015] hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 uppercase mb-2 w-full shadow-2xl sm:text-5xl`}
      >
        {text}
      </button>
    </Link>
  );
};

export default Button;
