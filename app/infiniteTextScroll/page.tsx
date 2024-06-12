"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

const InfiniteTextScroll = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);

  let xPercent = 0;
  let direction = 1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    requestAnimationFrame(animation);

    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: 0.25,
        onUpdate: (e) => (direction = e.direction * -1),
      },
    });
  }, []);

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: any) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);

  const animation = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    }
    if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    xPercent += 0.1 * direction;
    requestAnimationFrame(animation);
  };

  return (
    <div className="h-[200vh] bg-black">
      <main className=" relative h-screen w-full overflow-x-hidden">
        {/* <Image
          src="/images/textScroll.jpg"
          fill={true}
          alt="bg"
          className="object-cover h-full w-full z-[-1]"
        /> */}
        <div
          ref={slider}
          className="z-[999] text-red text-[12rem] font-medium text-white absolute bottom-0"
        >
          <div className="relative">
            <p ref={firstText} className="whitespace-nowrap">
              Freelance Photographer
            </p>
            <p
              ref={secondText}
              className="whitespace-nowrap absolute top-[50%] left-[100%] translate-y-[-50%]"
            >
              Freelance Photographer
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default InfiniteTextScroll;
