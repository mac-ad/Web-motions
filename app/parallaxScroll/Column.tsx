"use client";

import { MotionValue, motion } from "framer-motion";
import Image from "next/image";

const Column = ({
  images,
  y,
  className,
}: {
  images: string[];
  y?: MotionValue<number>;
  className?: string;
}) => {
  return (
    <motion.div
      className={`flex flex-col gap-[2vw] min-w-[300px] w-full h-full ${
        className ?? ""
      }`}
      style={{ y }}
    >
      {images?.map((img: string, idx: number) => (
        <div
          key={idx}
          className=" rounded-[1vw] overflow-hidden relative w-full h-full"
        >
          <Image
            src={`/images/${img}`}
            fill
            alt="img"
            className="object-cover"
          />
        </div>
      ))}
    </motion.div>
  );
};

export default Column;
