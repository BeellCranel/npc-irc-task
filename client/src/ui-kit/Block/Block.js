import React from "react";
import "./Block.scss";

export const Block = ({ title, subtitle, children }) => {
  return (
    <div className="block">
      <div className="block__title">{title}</div>
      <div className="block__subtitle">{subtitle}</div>
      {children}
    </div>
  );
};
