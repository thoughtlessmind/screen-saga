"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      themes={["light", "dark", "aqua"]}
      enableSystem
      defaultTheme="system"
    >
      {children}
    </ThemeProvider>
  );
}
