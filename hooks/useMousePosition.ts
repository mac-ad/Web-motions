import { useEffect, useState } from "react";

export const useMousePosition = () => {
  const [dimensions, setDimensions] = useState<{
    x: number;
    y: number;
  }>({
    x: 0,
    y: 0,
  });

  const updateMousePosition = (e: any) => {
    setDimensions({
      x: e.clientX,
      y: e.clientY,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return dimensions;
};
