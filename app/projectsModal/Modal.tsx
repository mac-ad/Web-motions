import Image from "next/image";
import { positionInterface, projectInterface } from "./page";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ReactNode, forwardRef, useEffect, useRef } from "react";
import { useMousePosition } from "@/hooks/useMousePosition";

const scaleAnimation = {
  initial: {
    scale: 0,
  },
  open: {
    scale: 1,
    // transition: {
    //   duration: 0.4,
    //   ease: [0.76, 0, 0.24, 1],
    // },
  },
  closed: {
    scale: 0,
    // transition: {
    //   duration: 0.4,
    //   ease: [0.76, 0, 0.24, 1],
    // },
  },
};

type Ref = HTMLDivElement;
interface Props {
  children?: ReactNode;
  modal: {
    active: boolean;
    index: number;
  };
  visible: boolean;
  positions: positionInterface;
  projects: projectInterface[];
}

const Modal = forwardRef<Ref, Props>((props, ref) => {
  const { modal, projects, positions, visible } = props;
  const { active, index } = modal;

  const container = useRef<HTMLDivElement>(null);

  const move = () => {
    const moveContainerX = gsap.quickTo(container.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    const moveContainerY = gsap.quickTo(container.current, "top", {
      duration: 0.8,
      ease: "power3",
    });

    moveContainerX(positions?.x - 250 / 2);
    moveContainerY(positions?.y - 250 / 2);
  };

  useEffect(() => {
    move();
  }, [positions]);

  return (
    <motion.div
      ref={container}
      variants={scaleAnimation}
      initial={"initial"}
      animate={visible ? "open" : "closed"}
      className="absolute h-[250px] w-[250px] flex items-center justify-center overflow-hidden pointer-events-none z-[100]"
    >
      <div className="h-full w-full ">
        {projects?.map((project: projectInterface, idx: number) => {
          const { src, color } = project;
          return (
            <div
              key={`modal_${idx}`}
              style={{
                backgroundColor: color,
                transform: `translateY(-${index * 100}%)`,
              }}
              className={`bg-red-500 h-full w-full  flex items-center justify-center transition-all transition-duration-1000`}
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
});

export default Modal;
