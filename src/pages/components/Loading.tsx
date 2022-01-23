import React from "react";

export const Loading = () => {
  return (
    <div>
      <div
        className="spinner-border text-primary position-absolute top-50 start-50"
        style={{ width: "4rem", height: "4rem" }}
        role="status"
      ></div>
    </div>
  );
};
