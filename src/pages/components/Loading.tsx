import React from "react";

export const Loading = () => {
  return (
    <div>
      <div
        className="spinner-border text-primary position-absolute"
        style={{
          width: "4rem",
          height: "4rem",
          zIndex: 1000,
          top: "calc(50% - 45px)",
          left: "calc(50% - 45px)",
        }}
        role="status"
      ></div>
    </div>
  );
};
