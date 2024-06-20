"use client";

import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const Magnetic = ({ children }: { children: React.ReactElement }) => {
  const magneticRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const xTo = gsap.quickTo(magneticRef.current, "x", {
      duration: 1,
      ease: "elastic.out(1,0.3)",
    });

    const yTo = gsap.quickTo(magneticRef.current, "y", {
      duration: 1,
      ease: "elastic.out(1,0.3)",
    });

    const mouseMoveHandler = (e: any) => {
      const { clientX, clientY } = e;

      const { top, left, width, height } =
        magneticRef?.current?.getBoundingClientRect()!;

      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);

      xTo(x);
      yTo(y);
    };
    console.log(magneticRef);

    const mouseLeaveHandler = (e: any) => {
      xTo(0);
      yTo(0);
    };

    magneticRef?.current?.addEventListener("mousemove", mouseMoveHandler);
    magneticRef?.current?.addEventListener("mouseleave", mouseLeaveHandler);

    return () => {
      magneticRef?.current?.removeEventListener("mousemove", mouseMoveHandler);
      magneticRef?.current?.removeEventListener(
        "mouseleave",
        mouseLeaveHandler
      );
    };
  }, []);

  return React.cloneElement(children, {
    ref: magneticRef,
  });
};

export default Magnetic;
