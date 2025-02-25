import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TypeWrite } from "../ui/typewrite";
import {Spotlight} from "@/components/ui/Spotlight";
import Image from "next/image";
import HeroImage from "@/app/HeroImage.png";
import SocialIcons from "./socialIcons";
import GridSVG from "@/public/grid.svg";

export default function HeroWithImage() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: false });

  return (
    <section
      ref={ref}
      className="relative flex items-center justify-start min-h-screen bg-gray-950 text-white overflow-hidden py-12 px-6 sm:px-16"
    >
      {/* Background Grid SVG */}
      <div className="absolute inset-0 w-full h-full opacity-20">
        <Image src={GridSVG} alt="Background grid" layout="fill" objectFit="cover" />
      </div>

      {/* Background Image with Gradient Overlay */}
      <div className="absolute right-0 top-0 h-full w-1/2 hidden sm:block">
        <div className="relative w-full h-full scale-100">
          <Image
            src={HeroImage}
            alt="Portrait of Mahesh Semwal"
            layout="fill"
            objectFit="cover"
            className="opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-gray-950 via-transparent to-transparent"></div>
        </div>
      </div>

      {/* Spotlight Effect */}
      <Spotlight className="absolute inset-0 z-0" />

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="z-10 text-left text-white max-w-2xl"
      >
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold leading-tight whitespace-nowrap max-w-[90%]">
          Mahesh Semwal
        </h1>
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-green-400 ml-2 text-2xl sm:text-3xl"
        >
          <TypeWrite />
        </motion.span>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg sm:text-xl text-gray-300 mt-4 max-w-lg"
        >
          Passionate about building scalable solutions, AI, and innovative web applications.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-6"
        >
          <SocialIcons />
        </motion.div>
      </motion.div>
    </section>
  );
}
