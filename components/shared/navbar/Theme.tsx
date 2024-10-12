"use client";
import Image from "next/image";
import { useTheme } from "@/context/ThemeProvider";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { themes } from "@/constants";

const Theme = () => {
  const { mode, setMode } = useTheme();
  return (
    <Menubar className="relative border-none  shadow-none">
      <MenubarMenu>
        <MenubarTrigger className="focus:bg-white data-[state=open]:bg-light-900 dark:focus:bg-dark-200 dark:data-[state=open]:bg-dark-200">
          {mode === "light" ? (
            <Image
              src="/icons/sun.svg"
              className="active-theme"
              width={20}
              height={20}
              alt="sun"
            />
          ) : (
            <Image
              src="/icons/moon.svg"
              className="active-theme"
              width={20}
              height={20}
              alt="moon"
            />
          )}
        </MenubarTrigger>
        <MenubarContent
          className="absolute -right-12 mt-3 min-w-[120px]
         rounded border bg-white py-2 dark:border-dark-400 dark:bg-dark-300"
        >
          {themes.map((theme) => (
            <MenubarItem
              key={theme.value}
              className="flex items-center gap-4 px-2.5 py-2 dark:focus:bg-dark-400"
              onClick={() => {
                setMode(theme.value);
                if (theme.value !== "system") {
                  localStorage.theme = theme.value;
                } else {
                  localStorage.removeItem("theme");
                }
              }}
            >
              <Image
                src={theme.icon}
                className={`${mode === theme.value && "active-theme"}`}
                width={16}
                height={16}
                alt={theme.value}
              />
              <p
                className={`body-semibold text-light-500 ${mode === theme.value ? "text-primary-500" : "text-dark100_light900"}`}
              >
                {theme.label}
              </p>
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default Theme;
