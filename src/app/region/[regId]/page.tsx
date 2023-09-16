"use client";

import Link from "next/link";
import { fetchCountryByRegion } from "@lib/fetchCountryByRegion";
import Image from "next/image";
import { Suspense } from "react";
import { Loader2 } from "lucide-react";
import { motion as m, AnimatePresence } from "framer-motion";
export default async function CountryDetail({
  params: { regId },
}: {
  params: { regId: string };
}) {
  const country = await fetchCountryByRegion(regId);

  return (
    <m.div
      initial={{ opacity: 0, translateY: -20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}>
      <AnimatePresence>
        <div className="flex flex-col items-center justify-center w-[95%] mx-auto  rounded-md md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8  ">
          {country.map((i: any) => (
            <Link href={`/countries/${i.name.common}`} key={i.name.common}>
              <div className="flex flex-col max-w-md hover:shadow-[0px_0px_27px_4px_#a0aec0] transition-all duration-300 items-center my-2 text-left border rounded-lg shadow-xl cursor-pointer rid md:grid-cols-2 md:px-8 lg:px-0 xl:grid-cols-3 2xl:grid-cols-4 gap-14 dark:border-slate-500 bg-slate-100 dark:bg-slate-800 ">
                <Suspense
                  fallback={
                    <Loader2 className="w-10 h-10 animate-spin dark:text-slate-200" />
                  }>
                  <Image
                    className="rounded-md rounded-b-none lg:hidden"
                    src={i.flags.svg}
                    width={1}
                    height={1}
                    alt={"flag"}
                    sizes="100vw"
                    style={{
                      width: "440px",
                      height: "190px",
                      objectFit: "cover",
                    }}
                    priority
                  />
                  <Image
                    className="hidden rounded-md rounded-b-none lg:block"
                    src={i.flags.svg}
                    width={1}
                    height={1}
                    alt={"flag"}
                    sizes="100vw"
                    style={{
                      width: "600px",
                      height: "250px",
                      objectFit: "cover",
                    }}
                    priority
                  />
                </Suspense>
                <div className="flex flex-col items-start justify-start px-2 py-4 my-2 text-left h-52 lg:my-6">
                  <h2 className="my-1 text-3xl font-bold text-right ">
                    {i.name.common}
                  </h2>
                  <div className="my-2 text-lg lg:text-2xl">
                    <h2 className="my-1 text-left">
                      <b>Population</b> : {i.population.toLocaleString()}
                    </h2>
                    <h2 className="my-1 text-left">
                      <b>Region</b> : {i.region}
                    </h2>
                    <h2 className="my-1 text-left">
                      <b>Capital</b> : {i.capital}
                    </h2>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </AnimatePresence>
    </m.div>
  );
}
