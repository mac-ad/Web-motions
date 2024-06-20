"use client";

import { Icon } from "@iconify/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";

const Navigation = () => {
  const header = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(header.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: 100,
        onLeave: () => {
          gsap.to(header.current, {
            y: "-100",
          });
        },
        onEnterBack: () => {
          gsap.to(header.current, {
            y: "0",
          });
        },
      },
    });
  }, []);

  return (
    <header
      className="z-[999] bg-[#0f0f0f] text-white h-[50px] flex items-center  fixed top-0 left-[50%] w-full translate-x-[-50%] "
      ref={header}
    >
      <div className="px-4 md:px-10 w-full mx-auto opacity-80 flex items-center">
        <Link href="/">
          <h1 className=" font-semibold">@macad</h1>
        </Link>
        <Link
          href="https://github.com/mac-ad/Web-motions"
          target="_blank"
          className="ml-auto text-white"
        >
          <Icon icon="mdi:github" fontSize={30} />
        </Link>
      </div>
    </header>
  );
};

export default Navigation;
