"use client";
import "./maskCircle.css";
import { useMousePosition } from "@/hooks/useMousePosition";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import { positionInterface } from "../projectsModal/page";

const MaskCircle = () => {
  const container = useRef<HTMLDivElement>(null);

  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [containerHover, setContainerHover] = useState<boolean>(false);
  const [position, setPosition] = useState<positionInterface>({
    x: 0,
    y: 0,
  });

  const { x, y } = useMousePosition({});
  const size = isHovered ? 400 : 40;

  const fixPosition = () => {
    let finalX = x;
    let finalY = y;

    const { top } = container?.current?.getBoundingClientRect()!;

    setPosition({
      x: finalX,
      y: finalY - top,
    });
  };

  useEffect(() => {
    if (x && y) fixPosition();

    window.addEventListener("scroll", fixPosition);

    return () => {
      window.removeEventListener("scroll", fixPosition);
    };
  }, [x, y]);

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: any) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <div className="h-screen flex items-center justify-center flex-col text-white bg-[#0F0E0E]">
        <h1 className=" text-3xl md:text-7xl font-medium">Mask Circle</h1>
        <p className="mt-3">Scroll Down</p>
      </div>
      <div
        ref={container}
        onMouseEnter={() => setContainerHover(true)}
        onMouseLeave={() => setContainerHover(false)}
        className=" relative bg-[#0F0E0E] w-full min-h-[100vh] text-[#AEA18E] text-[3.6rem] leading-[1.1] font-bold"
      >
        {/* mask component */}
        <div className="absolute h-full w-full flex items-center justify-center">
          <p
            className="max-w-[22ch] "
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            I&apos;m a{" "}
            <span className="text-[#EC4F38]">selectively skilled</span> product
            designer with strong focus on producing high quality & impactful
            digital experience.
          </p>
        </div>
        {/* visible component */}
        <motion.div
          className="pointer-events-none mask  absolute top-0 left-0  w-full h-full flex items-center justify-center bg-red-500 text-black"
          animate={{
            WebkitMaskPosition: `${position.x - size / 2}px ${
              position.y - size / 2
            }px`,
            WebkitMaskSize: `${size}px`,
          }}
          transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
        >
          <p className="max-w-[22ch]">
            A visual designer with skills that have&apos;t been replaced by A.I
            (yet) - making the good shit only if paycheck is equally good.
          </p>
        </motion.div>
      </div>
      <div className="h-screen flex items-center justify-center flex-col text-white bg-[#0F0E0E] ">
        <h1 className="text-3xl md:text-7xl font-medium">This is the end</h1>
      </div>
    </>
  );
};

export default MaskCircle;
