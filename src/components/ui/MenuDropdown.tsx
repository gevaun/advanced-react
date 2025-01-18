import { ReactNode } from "react";

interface MenuDropdownProps {
    children: ReactNode;
    isOpen: boolean;
}

export default function MenuDropdown({ children, isOpen }: MenuDropdownProps) {
    return  isOpen ? ( 
        <div className="bg-white border-gray-300  dark:bg-gray-800 absolute w-[108px] flex flex-col border dark:border-gray-700 rounded-lg overflow-hidden mt-1">
            {children}
        </div>) : null
}
