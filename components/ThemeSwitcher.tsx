"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { DEFAULT_THEME, THEME_STORAGE_KEY, themes } from "@/constants/themes";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(DEFAULT_THEME);

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme || DEFAULT_THEME);
  }, []);

  const selectTheme = (value: string) => {
    setTheme(value);
    document.documentElement.dataset.theme = value;
    localStorage.setItem(THEME_STORAGE_KEY, value);
  };

  return (
    <div
      role="radiogroup"
      aria-label="Theme"
      className="flex items-center gap-2 rounded-full bg-brand/10 px-3 py-2"
    >
      {themes.map(({ value, label, color }) => (
        <button
          key={value}
          type="button"
          role="radio"
          aria-checked={theme === value}
          aria-label={`${label} theme`}
          title={label}
          onClick={() => selectTheme(value)}
          style={{ backgroundColor: color }}
          className={cn(
            "size-5 rounded-full border-2 border-white transition-all hover:scale-110",
            theme === value ? "ring-2 ring-offset-1" : "ring-0",
          )}
        />
      ))}
    </div>
  );
};

export default ThemeSwitcher;
