"use client";
import { motion } from "framer-motion";
import { FaLocationArrow } from "react-icons/fa";
import { Spotlight } from "./ui/Spotlight";
import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";

const Footer = () => {
  return (
    <footer
      className="relative min-h-screen bg-gray-950 text-white overflow-hidden py-16 px-8 md:py-20 md:px-16 mb-[100px] md:mb-5 pb-10"
      id="contact"
    >
      <div>
        <Spotlight className="h-screen opacity-50" fill="grey" />
        <Spotlight className="left-full h-[80vh] opacity-40" fill="violet" />
        <Spotlight className="left-80 h-[80vh] w-[50vw] opacity-30" fill="#87CEEB" />
      </div>

      <div className="w-full absolute left-0 -bottom-72 min-h-96 opacity-50">
  <img
    src="/footer-grid.svg"
    alt="grid"
    className="w-full h-full object-cover pointer-events-none"
  />
</div>


      <div className="flex flex-col items-center text-center">
        <motion.h1
          className="heading lg:max-w-[45vw] text-3xl md:text-4xl font-bold"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Ready to take <span className="text-purple-500">your</span> digital
          presence to the next level?
        </motion.h1>
        <motion.p
          className="text-gray-300 md:mt-8 my-5 text-lg md:text-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </motion.p>

        <motion.a
          href="mailto:maheshsemwal04@gmail.com"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
        >
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
            // otherClasses="px-8 py-4 mt-6 text-lg w-full md:w-60"
          />
        </motion.a>
      </div>

      <motion.div
        className="flex flex-col md:flex-row justify-between items-center mt-16 border-t border-gray-700 pt-6 w-full"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
      >
        <p className="text-gray-400 text-sm md:text-base">
          Copyright © 2024 Mahesh Semwal. All rights reserved.
        </p>

        <div className="flex items-center gap-6 mt-4 md:mt-0 z-10">
          {socialMedia.map((info, index) => (
            <motion.div
              key={info.id}
              className="w-12 h-12 cursor-pointer flex justify-center items-center bg-gray-800 hover:bg-gray-700 transition-all duration-300 rounded-xl border border-gray-600 shadow-md hover:scale-110"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: 0.3 + index * 0.1,
                ease: "easeOut",
              }}
            >
              <a href={info.href} target="_blank">
                <img src={info.img} alt="icons" width={24} height={24} />
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
