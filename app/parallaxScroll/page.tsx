"use client";

import { useEffect, useRef, useState } from "react";
import Column from "./Column";
import Lenis from "@studio-freight/lenis";
import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";

const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
];

const page = () => {
  const gallary = useRef(null);

  const [dimension, setDimension] = useState<{
    width: number;
    height: number;
  }>({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallary,
    offset: ["start end", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest: any) => {
    console.log(latest);
  });

  const { height } = dimension;

  const y = useTransform(scrollYProgress, [0, 1], [0, dimension.height * 1.7]);
  const y1 = useTransform(scrollYProgress, [0, 1], [0, dimension.height * 2.5]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, dimension.height * 0.5]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, dimension.height * 2.7]);

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: any) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      <div className="h-[100vh] flex items-center justify-center">
        <h1 className="text-7xl font-medium">Scroll Down</h1>
      </div>
      <div className="h-screen w-full overflow-hidden" ref={gallary}>
        <div className="flex w-full h-[175vh] gap-[2vw] bg-[rgba(45,44,44,1)] p-[2vw]">
          <Column
            images={[images[0], images[1], images[2]]}
            y={y}
            className="top-[-55%] relative"
          />
          <Column
            images={[images[3], images[4], images[5]]}
            y={y1}
            className="top-[-95%] relative"
          />
          <Column
            images={[images[6], images[7], images[8]]}
            y={y2}
            className="top-[-45%] relative"
          />
          <Column
            images={[images[9], images[10], images[11]]}
            y={y3}
            className="top-[-95%] relative"
          />
        </div>
      </div>
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-7xl font-medium">That is it!</h1>
      </div>
    </>
  );
};

export default page;
