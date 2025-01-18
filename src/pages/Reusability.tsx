import Menu from "../components/ui/Menu";
import MenuButton from "../components/ui/MenuButton";
import MenuDropdown from "../components/ui/MenuDropdown";
import Avatar from "../components/ui/Avatar";
import MenuItem from "../components/ui/MenuItem";
import Button from "../components/ui/Button";
import Divider from "../components/ui/Divider";
import { AtSymbolIcon } from "@heroicons/react/24/outline";
import { ArrowUpRightIcon, StopCircleIcon } from "@heroicons/react/24/outline";

export default function Reusability() {
  const sports = ["Tennis", "Pickleball", "Soccer", "Basketball", "Volleyball"];

  return (
    <>
      <div className="container mx-auto flex flex-col gap-4">
        <div className="text-center p-2 mb-">
          Hello this is my workbook following the Advanced React course in{" "}
          <a
            href="https://scrimba.com/advanced-react-c02h"
            target="_blank"
            className="font-semibold inline-flex gap-1 items-center hover:underline underline-offset-2"
          >
            Scrimba <ArrowUpRightIcon className="w-3" />
          </a>
        </div>

        {/* This is a button componet that uses the children prop */}
        <div className="flex flex-col gap-4 w-1/2 mx-auto">
          <Divider title="Buttons" />
          <div className="flex justify-center items-center gap-4">
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
          </div>
        </div>

        {/* Avatar Components */}
        <div className="flex flex-col gap-4 w-1/2 mx-auto">
          <Divider title="Avatars" />
          <div className="flex flex-row justify-center items-center gap-4">
            <Avatar src="/my-notion-face-portrait-small.png" />
            <Avatar />
            <Avatar>GG</Avatar>
          </div>
        </div>

        {/* Compound component */}
        <div className="w-1/2 flex flex-col gap-4 mx-auto">
          <Divider title="Menu" />
          <div className="flex gap-4">
            <Menu>
              Some text
              <MenuButton>Sports</MenuButton>
              <MenuDropdown isOpen={false}>
                {sports.map((sport) => (
                  <MenuItem key={sport}>{sport}</MenuItem>
                ))}
              </MenuDropdown>
            </Menu>
          </div>
        </div>
      </div>
    </>
  );
}
