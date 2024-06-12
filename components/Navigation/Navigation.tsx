import { Icon } from "@iconify/react";
import Link from "next/link";

const Navigation = () => {
  return (
    <div className=" z-[999] h-[100px] flex items-center  fixed top-0 left-[50%] w-full translate-x-[-50%] ">
      <div className="px-10 w-full mx-auto opacity-80 flex items-center">
        <Link href="/" className="text-red-500">
          <Icon icon="simple-icons:circle" fontSize={40} />
        </Link>
        <a href="https://github.com/mac-ad/Web-motions" className="ml-auto">
          <Icon icon="mdi:github" fontSize={30} />
        </a>
      </div>
    </div>
  );
};

export default Navigation;
