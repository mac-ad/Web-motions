"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { motion } from "framer-motion";

export interface linkInterface {
  name: string;
  href: string;
}

const links: linkInterface[] = [
  {
    name: "projects modal",
    href: "/projectsModal",
  },
  {
    name: "infinite text scroll",
    href: "/infiniteTextScroll",
  },
  {
    name: "parallax scroll",
    href: "/parallaxScroll",
  },
  {
    name: "mask circle",
    href: "/maskCircle",
  },
];

const backgroundVariants = {
  hover: {
    background: "red",
    color: "white",
    transition: {
      duration: 0.4,
    },
  },
  unhover: {},
};

export default function Home() {
  return (
    <main className=" h-screen flex items-start justify-start flex-col px-10 pt-[calc(150px)]">
      {links?.map((link: linkInterface, idx: number) => {
        const { href, name } = link;

        return (
          <motion.div
            key={idx}
            variants={backgroundVariants}
            initial="unhover"
            whileHover="hover"
            className=" w-full"
          >
            <Link
              href={href}
              className="text-5xl capitalize flex items-center gap-10 p-4 group"
            >
              {name}
              <Icon
                icon="lucide:arrow-right"
                className="group-hover:translate-x-[15px] transition-all duration-300"
              />
            </Link>
          </motion.div>
        );
      })}
    </main>
  );
}
