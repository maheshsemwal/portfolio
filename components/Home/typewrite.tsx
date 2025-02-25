"use client";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
export function TypeWrite() {
  const words = [
    {
      text: "A",
    },
    {
      text: "Full",
    },
    {
      text: "Stack",
    },
    {
      text: "Web",
    },
    {
      text: "Developer.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
      <TypewriterEffect words={words} className="" />
  );
}
