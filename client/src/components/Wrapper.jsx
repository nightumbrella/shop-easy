import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div className="max-w-screen-[1920px] w-full mx-auto">{children}</div>
  );
};

export default Wrapper;
