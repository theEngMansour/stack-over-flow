import { Input } from "@/components/ui/input";
import Image from "next/image";

const GlobalSearch = () => {
  return (
    // eslint-disable-next-line tailwindcss/no-custom-classname
    <div className="relative w-full max-lg:hidden lg:w-[500px]">
      <div className="background-light800_darkgradient relative flex min-h-[56px] grow items-center gap-1 rounded-xl px-4">
        <Image
          src="/icons/search.svg"
          width={24}
          height={24}
          className="cursor-pointer"
          alt="search"
        />
        <Input
          type="text"
          placeholder="search"
          className="paragraph-regular no-focus background-light800_darkgradien placeholder border-none shadow-none outline-none"
        />
      </div>
    </div>
  );
};

export default GlobalSearch;
