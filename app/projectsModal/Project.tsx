import { Dispatch, SetStateAction } from "react";

const Project = ({
  title,
  idx,
  setModal,
}: {
  title: string;
  idx: number;
  setModal: Dispatch<SetStateAction<{ active: boolean; index: number }>>;
}) => {
  return (
    <div
      onMouseEnter={() => setModal({ active: true, index: idx })}
      onMouseLeave={() => setModal({ active: false, index: idx })}
      className=" flex items-center px-[100px] py-[60px]  group border-b border-t hover:cursor-pointer justify-between hover:opacity-50"
    >
      <h2 className="font-semibold text-4xl  transition-all duration-500 group-hover:translate-x-[-10px] ">
        {title}
      </h2>
      <p className="group-hover:translate-x-[10px] transition-all ">
        Design and Development
      </p>
    </div>
  );
};

export default Project;
