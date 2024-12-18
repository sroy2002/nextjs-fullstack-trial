import React from "react";
import ThemeWrapper from "../Components/ThemeWrapper";
import { ThemeProvider } from "@/context/ThemeContext";

const layout = ({ children }) => {
  return (
    <ThemeProvider>

    <ThemeWrapper>
    <div>
      <div className="m-8 ">
        <h1 className="text-6xl font-bold">Our Works</h1>
      </div>
      {children}
    </div>
    </ThemeWrapper>
    </ThemeProvider>
  );
};

export default layout;
