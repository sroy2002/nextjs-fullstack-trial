"use client";

import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("light");
  const toggle = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div className={` ${mode==="light" ? "bg-blue-300" : "bg-blue-900"} transition-all ease-in-out duration-1000`}>{children}</div>
    </ThemeContext.Provider>
  );
};
