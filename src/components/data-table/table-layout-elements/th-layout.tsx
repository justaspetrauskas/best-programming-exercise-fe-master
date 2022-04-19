import React from "react";

interface ThLayoutProps {
  children?: React.ReactNode;
  title: string;
}

const ThLayout = ({ children, title }: ThLayoutProps) => {
  return (
    <th className="px-5 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider bg-[rgba(53,201,221,0.6)] border-[rgba(53,201,221,0.8)] border-b-2">
      {children}
      {title}
    </th>
  );
};

export default ThLayout;
