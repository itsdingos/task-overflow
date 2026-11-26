'use client';

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="rounded-full size-8 bg-primary overflow-hidden cursor-pointer theme-colors"
    >
      <div className={`relative size-full transition-transform duration-500 ease-out origin-bottom theme-toggle-icon`}>
        <Sun size={20} className="absolute inset-0 m-auto transition-colors duration-500" />
        <Moon size={20} className="absolute inset-0 m-auto translate-y-8 rotate-180 transition-colors duration-500"/>
      </div>
    </button>
  );
}