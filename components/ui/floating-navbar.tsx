"use client";

import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    //@ts-ignore
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: -100, filter: "blur(10px)" }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0, filter: visible ? "blur(0px)" : "blur(10px)" }}
        transition={{ duration: 0.3, ease: "easeOut", bounce: 0.3 }}
        className={cn(
          "fixed top-10 inset-x-0 mx-auto flex max-w-fit px-10 py-5 items-center justify-center space-x-6",
          "border border-white/20 rounded-xl backdrop-blur-xl shadow-lg z-[5000]",
          "bg-gradient-to-r from-blue-500/10 via-gray-900/30 to-blue-500/10",
          "transition-all duration-500 ease-in-out",
          "hover:shadow-[0px_4px_10px_rgba(0,0,255,0.3)]",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <motion.div
            key={`link=${idx}`}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link
              href={navItem.link}
              className={cn(
                "relative flex items-center space-x-1 px-3 py-2 rounded-lg",
                "text-neutral-600 dark:text-neutral-50",
                "hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300"
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="text-sm font-medium cursor-pointer">{navItem.name}</span>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
