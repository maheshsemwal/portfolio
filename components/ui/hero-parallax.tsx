"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
export const HeroParallax = ({
  project,
}: {
    project: {
        title: string;
      thumbnail: string;
      link: string;
      techStack: { name: string }[];
      description: string;
    }[];
}) => {
  const firstRow = project.slice(0, 5);
  const secondRow = project.slice(5, 10);
  const thirdRow = project.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((project) => (
            <ProjectCard
              project={project}
              translate={translateX}
              key={project.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((project) => (
            <ProjectCard
            project={project}
              translate={translateXReverse}
              key={project.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((project) => (
            <ProjectCard
            project={project}
              translate={translateX}
              key={project.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
        Check out <br /> My Recent Projects
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
        We build beautiful products with the latest technologies and frameworks.
        We are a team of passionate developers and designers that love to build
        amazing products.
      </p>
    </div>
  );
};

export const ProjectCard = ({
    project,
    translate,
  }: {
      project: {
        title: string;
      thumbnail: string;
      link: string;
      techStack: { name: string }[];
      description: string;
    },
      translate: MotionValue<number>;
  }) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={project.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      <div className="m-40sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]">
      <div className="relative flex flex-col items-center bg-[#13162D] shadow-lg rounded-3xl overflow-hidden p-5 w-full">
        {/* Thumbnail */}
        <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-md">
          <img
            src={project.thumbnail || "/bg.png"}
            alt="Project Thumbnail"
            className="object-cover w-full h-full"
          />
          <img
            src={project.link}
            alt="cover"
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4/5 rounded-lg shadow-md"
          />
        </div>

        {/* Project Info */}
        <div className="mt-6 text-center px-4">
          <h1 className="font-bold text-2xl text-white truncate">{project.title}</h1>
          <p className="text-sm text-[#BEC1DD] mt-2 line-clamp-2">{project.description}</p>
        </div>

        {/* Tech Stack */}
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="bg-[#1E223E] text-[#CBACF9] text-xs px-3 py-1 rounded-full shadow-sm"
            >
              {tech.name}
            </span>
          ))}
        </div>

        {/* Live Link */}
        <div className="mt-5">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-lg font-medium text-[#CBACF9] hover:underline"
          >
            Live Demo ↗
          </a>
        </div>
      </div>
    </div>
    </motion.div>
  );
};
