import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <div className="m-8 text-[#1F509A]">
        <h1 className="text-6xl font-bold">Our Works</h1>
      </div>
      {children}
    </div>
  );
};

export default layout;
