import { useMousePosition } from "@/hooks/useMousePosition";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

const ScanAndGo = () => {
  const compRef = useRef<HTMLDivElement>(null);

  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [positions, setPositions] = useState<{
    x: number;
    y: number;
  }>({
    x: 0,
    y: 0,
  });
  const [compDim, setCompDim] = useState<any>(null);

  const { x, y } = useMousePosition();

  useEffect(() => {
    setPositions({
      x: x,
      y: y,
    });
  }, [x, y]);

  const size = isHovered ? 200 : 0;

  const heartbeatAnimation = {
    scale: [1, 1.1, 1],
  };

  useEffect(() => {
    if (compRef?.current) {
      setCompDim(compRef.current);
    }
  }, [compRef]);

  const heartbeatTransition = {
    type: "tween",
    ease: "easeInOut", // Adjust for desired easing
    duration: 0.5, // Adjust duration for animation speed
    repeat: Infinity,
  };

  return (
    <div
      className="bg-[#161416] h-screen text-white py-[8rem] relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      ref={compRef}
    >
      <h1 className="text-[7rem] leading-[7rem] text-center font-semibold">
        <div>Scan</div>
        <div>& Go</div>
      </h1>
      <p className="text-center max-w-[60ch] mx-auto mt-5">
        Transform your payment link into a QR code that customers can scan with
        their phone to pay.
      </p>
      {/* mask */}
      <motion.div
        className="absolute h-full w-full top-0 left-0 bg-white"
        animate={{
          WebkitMaskPosition: `${positions.x - size / 2}px ${
            positions.y - size / 2
          }px`,
          WebkitMaskSize: `${size}px`,
          scale: [1, 1.1, 1],
        }}
        transition={{
          type: "tween",
          ease: "backOut",
          duration: 0.5,
        }}
        style={{
          maskImage: "url('/mask.svg')",
          maskRepeat: "no-repeat",
          maskSize: `${150}px`,
          maskPosition: "0px 0px",
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
