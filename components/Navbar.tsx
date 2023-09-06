"use client";
import { FC, ReactNode, useEffect } from "react";
import Image from "next/image";
import moon from "../public/moon.svg";
import sun from "../public/sunW.svg";
import { useTheme } from "next-themes";
import Link from "next/link";
interface NavbarProps {
  children: ReactNode;
}

const Navbar: FC<NavbarProps> = ({ children }) => {
  const { setTheme, resolvedTheme } = useTheme();
  function handleTheming() {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }
  useEffect(() => {
    const theme = window.localStorage.getItem("theme");
    if (theme === "dark") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);
  return (
    <>
      <nav className="sticky top-0 z-10 w-full backdrop-filter backdrop-blur-lg">
        <div className=" p-5 mx-auto backdrop-filter backdrop-blur-lg shadow-lg md:p-10 md:justify-around border-b-[0.3px] border-slate-400 dark:bg-opacity-50 bg-opacity-30 bg-slate-200 dark:bg-slate-950">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-black tracking-wider lg:text-4xl md:text-2xl">
              <Link href="/">Where In the World ?</Link>
            </h1>
            {resolvedTheme === "light" ? (
              <Image
                onClick={handleTheming}
                className="transition-all duration-300 rotate-0 cursor-pointer md:w-9 md:h-9"
                src={moon}
                width={20}
                height={20}
                alt="icons"
              />
            ) : (
              <Image
                onClick={handleTheming}
                className="transition-all duration-300 rotate-180 cursor-pointer md:w-9 md:h-9"
                width={20}
                height={20}
                src={sun}
                alt="icons"
              />
            )}
          </div>
        </div>
      </nav>
      <main className="w-full mt-2 lg:mt-4">{children}</main>
    </>
  );
};

export default Navbar;
