import { motion } from "framer-motion";
export default function LandingText(){
    return (
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 leading-relaxed lg:leading-snug text-center mx-auto "
        >
          Hi, I'm MAHESH
          </motion.h1>
    )   
}