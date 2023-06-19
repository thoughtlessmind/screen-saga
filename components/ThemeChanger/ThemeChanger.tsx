"use client";

import { themes } from "@/src/app/providers";
import { useTheme } from "next-themes";
import { ButtonHTMLAttributes, ReactNode, useEffect, useState } from "react";

const Button = ({
  children,
  ...restProps
}: { children: ReactNode } & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className="rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      {...restProps}
    >
      {children}
    </button>
  );
};

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div>
      <p>The current theme is: {theme}</p>
      <Button onClick={() => setTheme("system")}>System</Button>
      <br />
      {themes.map((theme) => (
        <>
          <Button onClick={() => setTheme(theme)}>{theme} Mode</Button>
          <br />
        </>
      ))}
    </div>
  );
};

export default ThemeChanger;
