import { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "success";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
}

// This is a simple button component uses the destructuring of the props object to get:
// children prop,
// variant prop,
// size prop
// and the rest of the props object using the ...rest operator
export default function Button({
  children,
  variant = "primary",
  size = "md",
  ...rest
}: ButtonProps) {
  const color = {
    primary:
      "bg-indigo-600 hover:bg-indigo-500 ring-indigo-600 hover:ring-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
    secondary:
      "bg-gray-600 hover:bg-gray-500 ring-gray-600 hover:ring-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600",
    danger:
      "bg-red-600 hover:bg-red-500 hover:bg-indigo-500 ring-indigo-600focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600",
    success:
      "bg-green-600 hover:bg-green-500 hover:bg-green-500 ring-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600",
  };

  const buttonSize = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-2 text-sm",
    lg: "px-4 py-3 text-lg",
  };

  return (
    <button
      {...rest}
      className={`rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm flex items-center justify-center gap-1 ${color[variant]} shadow-md inset-shadow-sm inset-shadow-white/20 ring inset-ring inset-ring-white/15 ${buttonSize[size]}`}
    >
      {children}
    </button>
  );
}
