import React from "react";
import { ThemeContext } from "../../pages/Reusability";

export default function Header() {

  // We hook into the Context API to get the current theme
  // using the React.useContext hook
  const context = React.useContext(ThemeContext);
  console.log(`contextcontext`)
  return (
    <header className="my-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold">My Workbook</h1>
      </div>
    </header>
  );
}