import React from "react";

interface TdLayoutProps {
  children: React.ReactNode;
}

const TdLayout = ({ children }: TdLayoutProps) => {
  return (
    <td className="px-5 py-5 border-b border-gray-200 text-sm">
      <div className="flex items-center">{children}</div>
    </td>
  );
};

export default TdLayout;
