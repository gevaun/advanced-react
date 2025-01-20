import { ReactNode, useContext } from "react";
import { MenuContext } from "./Menu";

interface MenuDropdownProps {
    children: ReactNode;
}

export default function MenuDropdown({ children }: MenuDropdownProps) {
    const {isOpen} = useContext(MenuContext);
    return  isOpen ? ( 
        <div className="bg-white border-gray-300  dark:bg-gray-800 absolute w-[108px] flex flex-col border dark:border-gray-700 rounded-lg overflow-hidden mt-1">
            {children}
        </div>) : null
}
