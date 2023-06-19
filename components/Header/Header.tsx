"use client";

import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { WiDaySunny } from "react-icons/wi";
import { MdDarkMode } from "react-icons/md";
import * as Switch from "@radix-ui/react-switch";
import { useTheme } from "next-themes";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Header = () => {
  const [showScrollShadow, setShowScrollShadow] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, themes } = useTheme();

  const availableThemes = ["system", "teal", "indigo"];

  const handleScroll = () => {
    const positionY = window.scrollY;
    if (positionY > 10) {
      setShowScrollShadow(true);
    } else {
      console.log("inside else", { showScrollShadow });
      setShowScrollShadow(false);
    }
  };

  useEffect(() => {
    if (window) {
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log("== theme", { theme, themes });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDarkTheme = theme?.toLocaleLowerCase().includes("dark");

  const selectedValue = ["system", "light", "dark"].includes(theme ?? "")
    ? "system"
    : isDarkTheme
    ? theme?.toLocaleLowerCase().split("dark")[0]
    : theme;

  const toggleLightDarkTheme = () => {
    console.log("==theme toggleLightDarkTheme", theme);
    if (!theme || theme === "light" || theme === "system") {
      setTheme("dark");
      return;
    }
    if (theme === "system") {
      const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
      setTheme(darkThemeMq ? "dark" : "light");
      return;
    }
    if (theme === "dark") {
      setTheme("light");
      return;
    }
    if (isDarkTheme) {
      setTheme(selectedValue ?? "dark");
      return;
    }
    setTheme(`${selectedValue}Dark`);
  };

  const handleColorSelection = (selectedValue: string) => {
    if (selectedValue === "system") {
      setTheme("system");
      return;
    }
    if (isDarkTheme) {
      const newColorTheme =
        selectedValue === "system" ? "dark" : `${selectedValue}Dark`;
      setTheme(newColorTheme);
      return;
    }
    setTheme(selectedValue);
  };

  console.log(selectedValue);

  return (
    <header
      className={clsx("sticky top-0 flex items-center bg-color-5 px-8 py-4", {
        "shadow-md": showScrollShadow,
      })}
    >
      <h1 className="w-1/4 font-semibold tracking-wide text-color-12">
        Screen Saga
      </h1>
      <div className="w-2/4">
        <Input className="w-full" />
      </div>
      <div className="ml-auto flex w-1/4 items-center gap-1">
        <Switch.Root
          onClick={() => toggleLightDarkTheme()}
          checked={isDarkTheme}
          className="relative h-[25px] w-[42px] cursor-pointer rounded-full bg-color-8  outline-none focus:shadow-[0_0_0_2px] focus:shadow-black data-[state=checked]:bg-black"
        >
          <Switch.Thumb className="block h-[21px] w-[21px] translate-x-0.5 rounded-full bg-white shadow-[0_2px_2px] shadow-blackA7 transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-[19px]" />
        </Switch.Root>
        {isDarkTheme ? <WiDaySunny /> : <MdDarkMode />}
        <Select onValueChange={handleColorSelection} value={selectedValue}>
          <SelectTrigger className="flex w-[180px] items-center gap-2  border-2 border-color-11">
            <div className="h-4 w-4 rounded-md bg-color-12"></div>
            <SelectValue className="text-color-1" placeholder="Color" />
          </SelectTrigger>
          <SelectContent className="bg-whiteA5 dark:bg-blackA4">
            <SelectGroup>
              {availableThemes.map((themeColor) => (
                <SelectItem
                  className="cursor-pointer text-color-9"
                  key={themeColor}
                  value={themeColor}
                >
                  {themeColor}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </header>
  );
};

export default Header;
