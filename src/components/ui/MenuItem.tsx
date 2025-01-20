import React, { useContext } from "react";
import { MenuContext } from "./Menu";

interface MenuItemProps {
  children: React.ReactNode;
}

export default function MenuItem({ children }: MenuItemProps) {
  const { handleToggle } = useContext(MenuContext);

  if (!handleToggle) {
    throw new Error("MenuItem must be used within a MenuProvider");
  }

  return (
    <div
      className="hover:bg-gray-200 dark:hover:bg-gray-600 p-2 cursor-pointer border-b border-gray-200 dark:border-gray-700"
      onClick={handleToggle}
    >
      {children}
    </div>
  );
}
