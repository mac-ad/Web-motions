"use client";

import Lenis from "@studio-freight/lenis";
import { useEffect, useRef } from "react";
import ScanAndGo from "./ScanAndGo";
import Footer from "./Footer";
import { motion, useInView } from "framer-motion";

const appearVariants = {
  initial: {
    y: 100,
    scale: 0,
    // opacity: 0,
  },
  open: {
    scale: 1,
    y: 0,

    // opacity: 1,
  },
  closed: {
    scale: 0,
    y: 200,
    // opacity: 0,
  },
};

const Plink = () => {
  const container = useRef(null);
  const isInView = useInView(container, {
    once: true,
  });

  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time: any) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="overflow-x-hidden">
      <div className=" h-screen flex  bg-[#161416] flex-col items-center text-white justify-center font-medium">
        <h1 className=" text-3xl  md:text-7xl">Useplink.com</h1>
        <p className="mt-3"> Scroll Down</p>
      </div>
      <div className=" bg-[#161416] text-white flex items-center flex-col gap-8 justify-center text-center py-[8rem]">
        <div className=" relative w-full sm:w-fit lg:w-full lg:max-w-[1000px] py-[4rem] flex flex-col gap-7 sm:gap-[3rem]  max-w-[1000px]">
          <motion.h2
            ref={container}
            initial="initial"
            variants={appearVariants}
            animate={isInView ? "open" : "closed"}
            transition={{
              duration: 0.6,
              type: "spring",
              staggerChildren: 0.1,
            }}
            className=" text-[4rem] sm:text-[6rem] sm:leading-[6rem]  flex flex-col justify-center font-semibold leading-[4rem] lg:leading-[7rem] xl:leading-[8rem] z-[100] lg:text-[8rem]"
          >
            <motion.span>Create</motion.span> <motion.span>payment</motion.span>{" "}
            <motion.span>requests</motion.span>
          </motion.h2>

          <div className="font-medium w-[90%] mx-auto z-[100]">
            <p>
              <span className="opacity-80">Make a simple payment link in </span>
              <span className="text-[rgba(79,144,255,1)]">5 seconds.</span>
            </p>
            <p className="opacity-80">
              {" "}
              Use our powerful features to customize your request.
            </p>
          </div>

          <div className="absolute left-0 top-0 h-full w-full z-[10]">
            {/* coin1 */}
            <motion.div
              variants={appearVariants}
              animate={isInView ? "open" : "closed"}
              transition={{
                duration: 2,
                type: "spring",
              }}
              className="w-[80px] sm:w-[170px] absolute bottom-[-10%] left-[4%] sm:left-[-30%] sm:bottom-[-10%] md:left-[-50%] lg:bottom-[0%] lg:left-[-2%]"
            >
              <video autoPlay loop muted>
                <source src="/coin_2.mp4" type="video/mp4" />
              </video>
            </motion.div>
            {/* coin2 */}
            <motion.div
              variants={appearVariants}
              animate={isInView ? "open" : "closed"}
              transition={{
                duration: 2,
                type: "spring",
              }}
              className="w-[80px] sm:w-[170px] absolute right-[5%] top-[-10%] sm:right-[-15%] md:right-[-20%] md:top-[-5%] lg:top-[0%] lg:right-[0%]"
            >
              <video autoPlay loop muted>
                <source src="/coin_1.webm" type="video/webm" />
              </video>
            </motion.div>
            {/* coin3 */}
            <motion.div
              variants={appearVariants}
              animate={isInView ? "open" : "closed"}
              transition={{
                duration: 2,
                type: "spring",
              }}
              className="w-[80px] sm:w-[170px] absolute right-[5%] bottom-[5%] sm:right-[-25%] sm:bottom-[-5%] md:right-[-40%] lg:bottom-[0%] lg:right-[0%]"
            >
              <video autoPlay loop muted>
                <source src="/coin_3.webm" type="video/webm" />
              </video>
            </motion.div>
          </div>
        </div>
        <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 z-[100] mt-[8rem]  max-w-[1000px]">
          <div className=" flex flex-col gap-2 items-center">
            <h4 className="font-bold text-md lg:text-lg">
              One-off or reusable
            </h4>
            <p className="max-w-[30ch] text-sm font-medium opacity-80">
              Request one payment. Or get paid multiple times with a reusable
              link.
            </p>
          </div>
          <div className=" flex flex-col gap-2 items-center">
            <h4 className="font-bold text-md lg:text-lg">Add downloads</h4>
            <p className="max-w-[30ch] text-sm font-medium opacity-80">
              Offer downloadable files after your customer completes the
              payment.
            </p>
          </div>
          <div className=" flex flex-col gap-2 items-center">
            <h4 className="font-bold text-md lg:text-lg">
              Say thanks your way
            </h4>
            <p className="max-w-[30ch] text-sm font-medium opacity-80">
              Show a custom thank you message after successful payment.
            </p>
          </div>
          <div className=" flex flex-col gap-2 items-center">
            <h4 className="font-bold text-md lg:text-lg">Track&Trace</h4>
            <p className="max-w-[30ch] text-sm font-medium opacity-80">
              Track in real-time whether you request gets sent, viewed and paid.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#161416] text-white py-[3rem] md:py-[8rem]">
        <div className="w-[90%] mx-auto flex flex-col gap-8 md:flex-row md:justify-center lg:gap-0 md:items-center  max-w-[1000px]">
          <div className="w-[50%] mx-auto md:w-[30%]  items-end">
            <video autoPlay loop muted>
              <source src="/mail_loop.webm" type="video/webm" />
            </video>
          </div>
          <div className="text-center flex flex-col gap-4 max-w-[35ch] md:max-w-[50ch] lg:max-w-[65ch]  lg:leading-[8rem] md:gap-0 mx-auto md:text-left">
            <h2 className="text-[2rem] sm:text-[3rem] sm:leading-[4rem] lg:text-[4rem] lg:leading-[5rem] font-medium">
              <div>Easily</div> <div>send requests </div>
              <div>via e-mail or SMS</div>
            </h2>
            <p>... or copy-paste the link</p>
          </div>
        </div>
      </div>
      <ScanAndGo />
      {/* <div className="h-screen  flex items-center justify-center text-3xl  md:text-7xl font-medium">
        This is the end
      </div> */}
      <Footer />
    </div>
  );
};

export default Plink;
