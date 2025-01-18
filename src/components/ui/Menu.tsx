import React, { useState } from "react";

export interface MenuProps {
  children: React.ReactNode;
}

export default function Menu({ children }: MenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    console.log(`button clicked ${isOpen}`);
    setIsOpen(!isOpen);
  }

  return (
    <div>
      {React.Children.map(children as React.ReactElement[], (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            isOpen: isOpen as boolean,
            onClick: handleToggle
          });
        }
      })}
    </div>
  );
}

