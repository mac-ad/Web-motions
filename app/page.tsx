import Link from "next/link";

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

export default function Home() {
  return (
    <main className=" h-screen flex items-start justify-start gap-4 flex-col p-4">
      {links?.map((link: linkInterface) => {
        const { href, name } = link;

        return (
          <Link href={href} className="text-5xl capitalize hover:underline">
            {name}
          </Link>
        );
      })}
    </main>
  );
}
