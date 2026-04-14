"use client";

import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

export default function Button({
  children,
  onClick,
  className = "",
}: ButtonProps) {
  const baseClass =
    "bg-linear-to-r from-gray-200 via-gray-300 to-gray-400 text-black font-bold py-3 px-6 rounded-full hover:text-white transition-all duration-300 text-lg sm:text-xl w-full sm:w-auto";

  return (
    <button className={`${baseClass} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}
