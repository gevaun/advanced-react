import React, { useContext } from "react";
import Button from "./Button";
import { MenuContext } from "./Menu";

interface MenuButtonProps {
  children?: React.ReactNode;
}

export default function MenuButton({ children }: MenuButtonProps) {
  const {handleToggle} = useContext(MenuContext);

  if (!handleToggle) {
    throw new Error("MenuButton must be used within a MenuProvider");
  }

  return (
    <Button
      onClick={handleToggle}
      variant="success"
      className="w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200"
    >
      {children}
    </Button>
  );
}
