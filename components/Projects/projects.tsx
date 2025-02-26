import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ThreeDCardDemo } from "../card";
import {Spotlight} from "../ui/Spotlight";
import GridSVG from "@/public/grid.svg";
import Image from "next/image";

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });

  const projectData = [
    {
      title: "Chat App",
      description: "A real-time chat application that enables users to communicate instantly with a sleek and responsive UI. Built using React and TailwindCSS, it provides a seamless messaging experience with an intuitive interface.",
      img: "/p1.png",
      ProjectLink: "https://chat-app-e6fu.onrender.com/",
      TechStack: "React, TailwindCSS",
    },
    {
      title: "Quick Pay",
      description: "A secure and fast digital payment solution that allows users to send and receive payments effortlessly. Built with React and TailwindCSS, it features a modern UI and smooth transaction processing.",
      img: "/p2.png",
      ProjectLink: "https://quick-pay-roan.vercel.app/",
      TechStack: "React, TailwindCSS",
    },
    {
      title: "Blog App",
      description: "A full-fledged blogging platform where users can create, edit, and manage their blog posts. Developed using React, TailwindCSS, and TurboRepo, it ensures optimized performance and a great user experience.",
      img: "/p3.png",
      ProjectLink: "https://github.com/maheshsemwal/Blog-App",
      TechStack: "React, TailwindCSS, TurboRepo",
    },
  ];

  return (
    <section ref={ref} className="relative min-h-screen bg-gray-950 text-white overflow-hidden py-12 px-12 text-center" id="projects">
      
      {/* Background Grid SVG */}
      <div className="absolute inset-0 w-full h-full opacity-10">
        <Image src={GridSVG} alt="Background grid" layout="fill" objectFit="cover" />
      </div>

      {/* Spotlight Effect */}
      <Spotlight className="absolute inset-0 z-0" />

      {/* Animated Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8"
      >
        Projects
      </motion.h1>

      {/* Animated Cards */}
      <div className="grid grid-cols-1 gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-3 w-full px-4 sm:px-8 lg:px-16">
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
          >
            <ThreeDCardDemo project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
