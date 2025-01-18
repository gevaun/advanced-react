import React from "react";

interface MenuItemProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export default function MenuItem({ children, onClick }: MenuItemProps) {
  return (
    <div
      className="hover:bg-gray-200 dark:hover:bg-gray-600 p-2 cursor-pointer border-b border-gray-200 dark:border-gray-700"
      onClick={onClick}
    >
      {children}
    </div>
  );
}
