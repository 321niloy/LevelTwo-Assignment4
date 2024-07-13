import React, { ReactNode } from "react";
import "./width.css";
type WidthLayoutProps = {
  children: ReactNode;
};

const WidthLayout: React.FC<WidthLayoutProps> = ({ children }) => {
  return <div className="width-layout bg-black">{children}</div>;
};

export default WidthLayout;
