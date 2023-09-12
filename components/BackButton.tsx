"use client";

import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import back from "../public/move-left.svg";
import backW from "../public/move-leftW.svg";
import { useTheme } from "next-themes";
interface BackButtonProps {}

const BackButton: FC<BackButtonProps> = ({}) => {
  const { resolvedTheme } = useTheme();

  return (
    <div className="flex items-center justify-center h-10 m-4 rounded-lg shadow-lg bg-slate-100 lg:mt-12 lg:ml-12 w-28 dark:bg-slate-500 ">
      <Link
        href="/"
        className="flex items-center justify-between font-medium leading-relaxed tracking-widest">
        {resolvedTheme === "dark" ? (
          <Image src={backW} className="mx-4" alt="back Icon" />
        ) : (
          <Image className="mx-4" src={back} alt="back Icon" />
        )}
        back
      </Link>
    </div>
  );
};

export default BackButton;
