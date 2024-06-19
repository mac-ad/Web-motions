import { mousePositionTypes } from "@/utils/common";
import { useEffect, useState } from "react";

interface dimension {
  x: number;
  y: number;
}

// type mousePositionKeys = keyof mousePositionTypes;

export const useMousePosition = ({ type }: { type?: mousePositionTypes }) => {
  const [dimensions, setDimensions] = useState<dimension>({
    x: 0,
    y: 0,
  });

  const updateMousePosition = (e: any) => {
    let finalX = e.clientX;
    let finalY = e.clientY;

    if (type === mousePositionTypes.PERCENTAGE) {
      finalX = finalX / window.innerWidth;
      finalY = finalY / window.innerHeight;
    }

    setDimensions((prev: dimension) => ({
      x: finalX,
      y: finalY,
    }));
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return dimensions;
};
