"use client";
import React from "react";
import { useTheme } from "../utils/ThemeProvider";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-zinc-800 dark:bg-zinc-800 light:bg-zinc-200 hover:scale-110 transition-transform"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        <FaSun className="text-yellow-400 text-xl" />
      ) : (
        <FaMoon className="text-slate-700 text-xl" />
      )}
    </button>
  );
};

export default ThemeToggle;
