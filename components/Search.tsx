"use client";
import { useTheme } from "next-themes";
import { Input, DropDown } from "./index";
import { ReactNode, useState } from "react";
import searchB from "../public/search.svg";
import searchW from "../public/searchW.svg";
import Image from "next/image";
import fetchCountryByName from "@lib/searchByName";
const Search = () => {
  const { resolvedTheme } = useTheme();
  const [search, setSearch] = useState("");

  return (
    <>
      <div className="flex flex-col items-center justify-between mb-5 md:flex-row">
        <div className="mx-auto w-[90%] lg:w-[30%] lg:mx-20 lg:py-10  justify-between flex items-center relative py-8 ">
          <form action="">
            <Input
              placeholder="Search for a country ..."
              className="pl-12 lg:pl-20"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
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
    </>
  );
};

export default Search;
