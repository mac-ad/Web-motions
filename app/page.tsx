"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

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
  {
    name: "use plink",
    href: "/useplink",
  },
];

const backgroundVariants = {
  hover: {},
  unhover: {
    background: "white",
  },
};

interface socialInterface {
  icon: string;
  href: string;
  text: string;
}

const socials: socialInterface[] = [
  {
    icon: "mdi:github",
    href: "https://github.com/mac-ad",
    text: "@mac-ad",
  },
  {
    icon: "mdi:linkedin",
    href: "https://linkedin.com/in/macad",
    text: "@macad",
  },
  {
    icon: "mdi:instagram",
    href: "https://instagram.com/__macad",
    text: "@__macad",
  },
  {
    icon: "ic:outline-email",
    href: "mailto:macad626@gmail.com",
    text: "macad626@gmail.com",
  },
];

export default function Home() {
  const [hovered, setHovered] = useState<number>(0);

  return (
    <main className="h-screen flex items-start justify-start flex-col px-2 md:px-10 pt-[calc(150px)] pb-20">
      <div className="mb-10 flex flex-col gap-2 ">
        <h1 className="font-semibold "> &#128075; Hi, I am macad</h1>
        <p className="max-w-[60ch] opacity-80 ml-5">
          A frontend developer passionate about crafting beautiful and
          functional user experiences. Looking to bring your web ideas to life?
          Let&apos;s connect!
        </p>
        <div className="ml-5 flex flex-col gap-2">
          {socials?.map((social: socialInterface) => (
            <Link
              key={social.text}
              href={social.href}
              target="_blank"
              className="flex gap-2 items-center w-fit group"
            >
              <Icon icon={social.icon} fontSize={20} />
              <span className="opacity-80 text-sm group-hover:underline">
                {social.text}
              </span>
            </Link>
          ))}
        </div>
      </div>
      <div className="mb-10">
        <p className="max-w-[60ch] opacity-80 ml-5">
          Check out Few motion designs I coded `&#128526;`
        </p>
      </div>
      {links?.map((link: linkInterface, idx: number) => {
        const { href, name } = link;

        return (
          <motion.div
            key={idx}
            variants={backgroundVariants}
            initial={{}}
            whileHover={{
              x: +20,
              transition: {
                duration: 0.1,
              },
            }}
            className="w-full relative  text-[#0f0f0f] border-t border-b"
          >
            <Link
              href={href}
              className="text-2xl sm:text-4xl md:text-5xl font-semibold uppercase flex items-center gap-10 p-4 group "
            >
              {name}
              <Icon icon="lucide:arrow-right" className="" />
            </Link>
          </motion.div>
        );
      })}
    </main>
  );
}
