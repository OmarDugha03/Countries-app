"use client";
import { useTheme } from "next-themes";
import { Input } from "./Input";
import search from "../public/search.svg";
import searchW from "../public/searchW.svg";
import Image from "next/image";
import DropDown from "./DropDown";

const Search = ({}) => {
  const { resolvedTheme } = useTheme();
  return (
    <div className="flex flex-col items-center justify-between mb-5 lg:flex-row">
      <div className="mx-auto w-[90%] lg:w-[30%] lg:mx-20 lg:py-10  justify-between flex items-center relative py-8 ">
        <Input
          placeholder="Search for a country ..."
          className="pl-12 lg:pl-20"
        />
        {resolvedTheme === "light" ? (
          <Image
            src={search}
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
      <DropDown />
    </div>
  );
};

export default Search;
