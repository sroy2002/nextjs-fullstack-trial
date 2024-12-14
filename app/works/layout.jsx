import React from "react";
import ThemeWrapper from "../context/ThemeWrapper";

const layout = ({ children }) => {
  return (
    <ThemeWrapper>
    <div>
      <div className="m-8 ">
        <h1 className="text-6xl font-bold">Our Works</h1>
      </div>
      {children}
    </div>
    </ThemeWrapper>
  );
};

export default layout;
