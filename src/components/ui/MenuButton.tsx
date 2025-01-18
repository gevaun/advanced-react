import React from "react";
import Button from "./Button";

interface MenuButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;

}

export default function MenuButton({ onClick, children }: MenuButtonProps) {
  return (
    <Button
      onClick={onClick}
      variant="success"
      className="w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200"
    >
      {children}
    </Button>
  );
}
