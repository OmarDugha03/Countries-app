"use client";
import { useTheme } from "next-themes";
import { Input } from "./Input";
import { useState, useEffect, ReactNode } from "react";
import searchB from "../public/search.svg";
import searchW from "../public/searchW.svg";
import Image from "next/image";
import DropDown from "./DropDown";

interface Props {
  search: (search: string) => Promise<string[]>;
}

const Search = ({ children }: { children: ReactNode }) => {
  const { resolvedTheme } = useTheme();
  return (
    <>
      <div className="flex flex-col items-center justify-between mb-5 lg:flex-row">
        <div className="mx-auto w-[90%] lg:w-[30%] lg:mx-20 lg:py-10  justify-between flex items-center relative py-8 ">
          <form action="">
            <Input
              placeholder="Search for a country ..."
              className="pl-12 lg:pl-20"
            />
            <button
              type="submit"
              onClick={() => {}}
              className="absolute right-0 mr-3 -translate-y-1/2 top-1/2"></button>
          </form>
          {resolvedTheme === "light" ? (
            <Image
              src={searchB}
              alt="search"
              className="absolute ml-4 lg:ml-6 lg:w-10"
            />
          ) : (
            <Image
              src={searchW}
              alt="search"
              className="absolute ml-4 lg:ml-6 lg:w-10"
            />
          )}
        </div>
        <DropDown regionName={""} />
      </div>
      <main>{children}</main>
    </>
  );
};

export default Search;
