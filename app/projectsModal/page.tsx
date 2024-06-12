"use client";

import { useState } from "react";
import Project from "./Project";
import Modal from "./Modal";

export interface projectInterface {
  title: string;
  src: string;
  color: string;
}

export const projects: projectInterface[] = [
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
];

const page = () => {
  const [modal, setModal] = useState<{ active: boolean; index: number }>({
    active: false,
    index: 0,
  });

  return (
    <main className="h-screen flex items-center justify-center">
      <div className="max-w-[1000px] w-[90%] mx-auto">
        {projects?.map((project: projectInterface, idx: number) => (
          <Project
            key={idx}
            idx={idx}
            title={project?.title}
            setModal={setModal}
          />
        ))}
      </div>
      <Modal modal={modal} projects={projects} />
    </main>
  );
};

export default page;
