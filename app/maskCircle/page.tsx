"use client";
import "./maskCircle.css";
import { useMousePosition } from "@/hooks/useMousePosition";
import gsap from "gsap";
import { useState } from "react";
import { motion } from "framer-motion";

const page = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;
  //   const size = 100;

  console.log(isHovered);

  return (
    <div className=" relative bg-[#0F0E0E] w-full h-screen text-[#AEA18E] text-[3.6rem] leading-[1.1] font-bold">
      {/* mask component */}
      <div className="absolute h-full w-full flex items-center justify-center">
        <p
          className="max-w-[22ch] "
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          I'm a <span className="text-[#EC4F38]">selectively skilled</span>{" "}
          product designer with strong focus on producing high quality &
          impactful digital experience.
        </p>
      </div>
      {/* visible component */}
      <motion.div
        className="pointer-events-none mask  absolute top-0 left-0  w-full h-screen flex items-center justify-center bg-red-500 text-black"
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      >
        <p className="max-w-[22ch]">
          A visual designer with skills that have't been replaced by A.I (yet) -
          making the good shit only if paycheck is equally good.
        </p>
      </motion.div>
    </div>
  );
};

export default page;
