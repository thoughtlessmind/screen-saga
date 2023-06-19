"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

export const themes = ["light", "dark", "teal", "tealDark", "indigo"];

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      themes={themes}
      enableSystem
      defaultTheme="system"
      attribute="class"
    >
      {children}
    </ThemeProvider>
  );
}
