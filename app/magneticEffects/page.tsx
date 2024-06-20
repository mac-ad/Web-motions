"use client";

import Magnetic from "@/components/Magnetic/Magnetic";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

const MagneticEffects = () => {
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
      <div className=" h-screen flex  bg-[#161416] flex-col items-center text-white justify-center font-medium">
        <h1 className=" text-3xl  md:text-7xl">Magnetic Effects</h1>
        <p className="mt-3">Scroll Down</p>
      </div>
      <div className="min-h-[100vh] gap-10 flex flex-col items-center justify-center">
        <Magnetic>
          <div className="border h-[200px] w-[200px] flex items-center justify-center py-4 px-8 rounded-full bg-blue-500 text-white uppercase font-semibold cursor-pointer">
            hover me
          </div>
        </Magnetic>
        <ul className="flex items-center gap-5">
          <Magnetic>
            <li className="cursor-pointer">Home</li>
          </Magnetic>
          <Magnetic>
            <li className="cursor-pointer">Contact</li>
          </Magnetic>
          <Magnetic>
            <li className="cursor-pointer">About</li>
          </Magnetic>
        </ul>
      </div>
      <div className=" h-screen flex  bg-[#161416] flex-col items-center text-white justify-center font-medium">
        <h1 className=" text-3xl  md:text-7xl">This is the End</h1>
      </div>
    </>
  );
};

export default MagneticEffects;
