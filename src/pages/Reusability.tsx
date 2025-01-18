import React from "react";
import Card from "../components/ui/Card";
import Menu from "../components/ui/Menu";
import MenuButton from "../components/ui/MenuButton";
import MenuDropdown from "../components/ui/MenuDropdown";
import Avatar from "../components/ui/Avatar";
import MenuItem from "../components/ui/MenuItem";
import Button from "../components/ui/Button";
import Divider from "../components/ui/Divider";
import Header from "../components/ui/Header";
import { AtSymbolIcon } from "@heroicons/react/24/outline";
import { StopCircleIcon } from "@heroicons/react/24/outline";

// Create the context instance
const ThemeContext = React.createContext("light");

export default function Reusability() {
  const sports = ["Tennis", "Pickleball", "Soccer", "Basketball", "Volleyball"];

  return (
    // Wrap the components that need the context in the provider
    <ThemeContext.Provider value="zinc">
      <div className="flex">
        <div className="container mx-auto grid grid-cols-2 gap-4 rounded-3xl mt-2 mb-2">
          {/* This is a button component that uses the children prop */}
          <Card title="Buttons">
            <Button
              onClick={() => console.log("Logging in...")}
              variant="primary"
              size="md"
            >
              <AtSymbolIcon className="w-4 h-4" />
              Sign in with google
            </Button>
            <Button
              onClick={() => console.log("Yes")}
              variant="secondary"
              size="md"
            >
              <StopCircleIcon className="w-4 h-4" />
              Magic 8 ball
            </Button>
          </Card>

          {/* Avatar Components */}
          <Card title="Avatars">
            <div className="flex flex-row justify-center items-center gap-4">
              <Avatar src="/my-notion-face-portrait-small.png" />
              <Avatar />
              <Avatar>GG</Avatar>
            </div>
          </Card>

          {/* Compound component */}
          <Card title="Menu">
            <div className="flex gap-4">
              <Menu>
                <MenuButton>Sports</MenuButton>
                <MenuDropdown isOpen={false}>
                  {sports.map((sport) => (
                    <MenuItem key={sport}>{sport}</MenuItem>
                  ))}
                </MenuDropdown>
              </Menu>
            </div>
          </Card>

          {/* Context component */}
          <Card title="Context">
            <div className="border rounded-2xl p-4">
              <div>
                <h2>Context</h2>
                <p>In this section we will be testing the context</p>
              </div>
              <div className="container">
                <Header />
                <Button>Switch Theme</Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export { ThemeContext };
