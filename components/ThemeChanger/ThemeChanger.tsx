"use client";

import { useTheme } from "next-themes";
import { ButtonHTMLAttributes, ReactNode, useEffect, useState } from "react";

const Button = ({
  children,
  ...restProps
}: { children: ReactNode } & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className="bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-indigo-600 rounded px-2 py-1 text-xs font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
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
      <Button onClick={() => setTheme("light")}>Light Mode</Button>
      <br />
      <Button onClick={() => setTheme("dark")}>Dark Mode</Button>
      <br />
      <Button onClick={() => setTheme("aqua")}>Aqua</Button>
    </div>
  );
};

export default ThemeChanger;
