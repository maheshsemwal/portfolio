"use client";

import HeroWithImage from "@/components/Home/HeroWithphoto";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects/projects";
import './globals.css'

export default function Page() {
  return (
    <main className="bg-black-100 relative flex  justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="w-screen">
        <FloatingNav navItems={navItems} />
        <HeroWithImage />
        <Projects />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
