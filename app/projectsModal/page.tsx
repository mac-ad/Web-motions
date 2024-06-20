"use client";

import { useEffect, useRef, useState } from "react";
import Project from "./Project";
import Modal from "./Modal";
import Lenis from "@studio-freight/lenis";
import { useMousePosition } from "@/hooks/useMousePosition";

export interface projectInterface {
  title: string;
  src: string;
  color: string;
}

const projects: projectInterface[] = [
  {
    title: "C2 Montereal",
    src: "c2montreal.png",
    color: "#000000",
  },
  {
    title: "Office Studio",
    src: "officestudio.png",
    color: "#8C8C8C",
  },
  {
    title: "Locomotive",
    src: "locomotive.png",
    color: "#EFE8D3",
  },
  {
    title: "Silencio",
    src: "silencio.png",
    color: "#706863",
  },
  {
    title: "Office Studio",
    src: "officestudio.png",
    color: "#8C8C8C",
  },
  {
    title: "Locomotive",
    src: "locomotive.png",
    color: "#EFE8D3",
  },
  {
    title: "Silencio",
    src: "silencio.png",
    color: "#706863",
  },
];

export interface positionInterface {
  x: number;
  y: number;
}

const ProjectsModal = () => {
  const container = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<boolean>(false);
  const [modal, setModal] = useState<{ active: boolean; index: number }>({
    active: false,
    index: 0,
  });
  const [positions, setPositions] = useState<positionInterface>({
    x: 0,
    y: 0,
  });

  const { x, y } = useMousePosition({});

  const fixPosition = () => {
    let finalX = x;
    let finalY = y;

    const { top, left } = container?.current?.getBoundingClientRect()!;

    setPositions({
      x: finalX - left,
      y: finalY - top,
    });
  };

  useEffect(() => {
    if (x && y) {
      fixPosition();
    }
    window.addEventListener("scroll", fixPosition);
    return () => {
      window.removeEventListener("scroll", fixPosition);
    };
  }, [x, y]);

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
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-7xl font-medium">Scroll Down</h1>
      </div>
      <main className="  min-h-[100vh] flex items-center justify-center">
        <div
          className=" relative max-w-[1000px] w-[90%] mx-auto"
          onMouseEnter={() => setHovered(true)}
          ref={container}
          onMouseLeave={() => setHovered(false)}
        >
          {projects?.map((project: projectInterface, idx: number) => (
            <Project
              key={idx}
              idx={idx}
              title={project?.title}
              setModal={setModal}
            />
          ))}
          <Modal
            modal={modal}
            projects={projects}
            visible={hovered}
            positions={positions}
          />
        </div>
      </main>
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-7xl font-medium">This is the end</h1>
      </div>
    </>
  );
};

export default ProjectsModal;
