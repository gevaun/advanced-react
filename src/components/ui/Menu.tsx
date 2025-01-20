import React, { useState } from "react";

export interface MenuProps {
  children: React.ReactNode;
}

interface MenuContextType {
  isOpen: boolean;
  handleToggle: () => void;
}

const MenuContext = React.createContext<MenuContextType>({
  isOpen: true,
  handleToggle: () => {},
});

export default function Menu({ children }: MenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    console.log(`button clicked ${isOpen}`);
    setIsOpen(!isOpen);
  }

  return (
    <MenuContext.Provider value={{ isOpen, handleToggle }}>
      <div>{children}</div>
    </MenuContext.Provider>
  );
}

export { MenuContext };
