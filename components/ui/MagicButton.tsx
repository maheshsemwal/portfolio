"use client";
import React from "react";

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button
      className={`relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none ${otherClasses}`}
      onClick={handleClick}
    >
      {/* Animated gradient border */}
      <span className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,#FF6FD8_0%,#2D5BE3_50%,#FF6FD8_100%)] animate-[spin_2s_linear_infinite]"></span>
      
      {/* Button content */}
      <span className="relative inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-[#0A0F1A] px-7 text-sm font-medium gap-2 text-white backdrop-blur-3xl">
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;
