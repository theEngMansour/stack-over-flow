"use client";
import Image from "next/image";
import { Input } from "@/components/ui/input";

interface LocalSearchbarProps {
  route?: string;
  iconPosition?: string;
  imgSrc?: string;
  placeholder?: string;
  otherClasses?: string;
}

function LocalSearchbar({
  route,
  iconPosition,
  imgSrc,
  placeholder,
  otherClasses,
}: LocalSearchbarProps) {
  return (
    <div
      className={`background-light800_darkgradient flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4 ${otherClasses}`}
    >
      {iconPosition === "left" && (
        <Image
          src="/icons/search.svg"
          width={24}
          height={24}
          className="cursor-pointer"
          alt="search"
        />
      )}
      <Input
        type="text"
        placeholder={placeholder}
        value=""
        onChange={(e) => {}}
        className="paragraph-regular no-focus background-light800_darkgradien placeholder border-none shadow-none outline-none"
      />
      {iconPosition === "right" && (
        <Image
          src="/icons/search.svg"
          alt="search icon"
          width={24}
          height={24}
          className="cursor-pointer"
        />
      )}
    </div>
  );
}

export default LocalSearchbar;
