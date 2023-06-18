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
      <h3 className="text-primary">Change Theme</h3>
      <ThemeChanger />
    </div>
  );
}
