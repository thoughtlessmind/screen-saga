import { FaBeer } from "react-icons/fa";
import { ThemeChanger } from "@/components/ThemeChanger";

export default function Home() {
  return (
    <div>
      <FaBeer />
      <main className="flex h-6 flex-col items-center justify-between p-24">
        This thing is under construction, check this space soon to find out
        something interesting.
      </main>
      <h3 className="text-gray">Radix Test</h3>
      <h3 className="text-3xl font-bold text-color-9">Radix Test new theme</h3>
      <h3 className="text-primary dark:text-red-500">Change Theme</h3>
      <ThemeChanger />
    </div>
  );
}
