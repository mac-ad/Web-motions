import Image from "next/image";
import { projectInterface } from "./page";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const scaleAnimation = {
  initial: {
    scale: 0,
    x: "-50%",
    y: "-50%",
  },
  open: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: {
      duration: 0.4,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: {
      duration: 0.4,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const Modal = ({
  modal,
  projects,
}: {
  modal: { active: boolean; index: number };
  projects: projectInterface[];
}) => {
  const { active, index } = modal;

  const container = useRef(null);

  console.log(modal);

  useEffect(() => {
    const moveContainerX = gsap.quickTo(container.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    const moveContainerY = gsap.quickTo(container.current, "top", {
      duration: 0.8,
      ease: "power3",
    });
    window.addEventListener("mousemove", (e: any) => {
      const { clientX, clientY } = e;
      moveContainerX(clientX);
      moveContainerY(clientY);
    });
  }, []);

  return (
    <motion.div
      variants={scaleAnimation}
      initial={"initial"}
      animate={active ? "open" : "closed"}
      className="absolute h-[350px] w-[400px] flex items-center justify-center overflow-hidden pointer-events-none z-[100]"
      ref={container}
    >
      <div className="h-full w-full">
        {projects?.map((project: projectInterface, idx: number) => {
          const { src, color } = project;
          return (
            <div
              key={`modal_${idx}`}
              style={{
                backgroundColor: color,
                transform: `translateY(-${index * 100}%)`,
              }}
              className={`bg-red-500 h-full w-full flex items-center justify-center transition-all`}
            >
              {/* translate-y-[-${
                index * 100
              }%] */}
              <Image
                src={`/images/${src}`}
                alt={project?.title}
                width={300}
                height={0}
              />
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Modal;
