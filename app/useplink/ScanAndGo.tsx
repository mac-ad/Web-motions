import { useMousePosition } from "@/hooks/useMousePosition";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { mousePositionTypes } from "@/utils/common";

interface positionInterface {
  xPosition: number;
  yPosition: number;
}

// heartbeat animation
const normalVariant = {
  scale: 1,
};

const pulsedVariant = {
  scale: 1.1,
  transition: {
    duration: 0.5,
    ease: "easeInOut",
  },
};

const ScanAndGo = () => {
  const compRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [position, setPosition] = useState<positionInterface>({
    xPosition: 50,
    yPosition: 50,
  });

  const { x, y } = useMousePosition({
    type: mousePositionTypes.PIXEL,
  });

  const size = isHovered ? 300 : 0;

  const fixPosition = () => {
    // get the top of the qr code container
    if (!isHovered) return;
    const { top } = compRef?.current?.getBoundingClientRect()!;
    setPosition({
      xPosition: x,
      yPosition: y - top,
    });
  };

  useEffect(() => {
    // remove the extra x and y outside of the qr component
    if (x && y) {
      fixPosition();
    }
    window.addEventListener("scroll", fixPosition);

    return () => {
      window.removeEventListener("scroll", fixPosition);
    };
  }, [x, y]);

  return (
    <div
      className="bg-[#161416] py-[6rem] min-h-[800px] text-white lg:py-[8rem] relative "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      ref={compRef}
    >
      <h1 className="text-[5rem] leading-[5rem]  md:text-[7rem] md:leading-[7rem] text-center font-semibold">
        <div>Scan</div>
        <div>& Go</div>
      </h1>
      <p className="text-center max-w-[30ch] md:max-w-[60ch] mx-auto mt-5">
        Transform your payment link into a QR code that customers can scan with
        their phone to pay.
      </p>
      {/* mask */}
      <motion.div
        className="absolute h-full w-full top-0 left-0 bg-white"
        animate={{
          WebkitMaskPosition: `${position.xPosition - size / 2}px ${
            position.yPosition - size / 2
          }px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{
          type: "tween",
          ease: "backOut",
          duration: 0.2,
        }}
        style={{
          maskImage: "url('/mask.svg')",
          maskRepeat: "no-repeat",
          mixBlendMode: "difference",
          // maskSize: "600px",
          // maskPosition: "50% 200%",
          maskSize: `${size}px`,
          maskPosition: `${position.xPosition}px ${position.yPosition}px`,
        }}
      >
        <Image
          src="/images/qr.png"
          height={150}
          alt="qr"
          width={150}
          className="absolute bottom-[15%] left-[50%] translate-x-[-50%]"
        />
      </motion.div>
    </div>
  );
};

export default ScanAndGo;
