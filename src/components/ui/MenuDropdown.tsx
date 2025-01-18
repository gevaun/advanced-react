import { ReactNode } from "react";

interface MenuDropdownProps {
    children: ReactNode;
    isOpen: boolean;
}

export default function MenuDropdown({ children, isOpen }: MenuDropdownProps) {
    return  isOpen ? ( 
        <div className="w-[108px] flex flex-col border rounded-lg overflow-hidden mt-1">
            {children}
        </div>) : null
}
