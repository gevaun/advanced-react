import React from "react";
import { UserIcon } from "@heroicons/react/24/outline";

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: "sm" | "md" | "lg";
  children?: React.ReactNode;
}

export default function Avatar({
  src,
  alt,
  size = "md",
  children,
}: AvatarProps) {
  const colors = [
    "bg-red-500",
    "bg-green-500",
    "bg-blue-500",
    "bg-yellow-500",
    "bg-purple-500",
  ];
  const color = colors[Math.floor(Math.random() * colors.length)];

  const avatarSize = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  return (
    <>
      {src ? (
        // < className="w-10 h-10 border rounded-full overflow-hidden relative">
        <img
          src={src}
          alt={alt}
          className={`${avatarSize[size]} w-10 h-10 items-center rounded-full border border-gray-200`}
        />
      ) : children ? (
        <div className={`p-2 text-white font-bold ${color} rounded-full w-10 h-10 flex items-center justify-center border-gray-200`}>
          {children}
        </div>
      ) : (
        <div className={`w-10 h-10 rounded-full border ${color} flex items-center justify-center border-gray-200`} title="No user icon">
          <UserIcon className="text-white h-8 w-8 stroke" />
        </div>
      )}
    </>
  );
}
