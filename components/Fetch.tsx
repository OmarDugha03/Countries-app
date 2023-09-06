import whatever from "./data.json";
import Image from "next/image";
import { Suspense } from "react";
import { Loader2 } from "lucide-react";
import Link from "next/link";
export default function FetchedData() {
  return (
    <Link
      href="/"
      className="grid mx-4 rounded-md lg:mx-12 md:grid-cols-2 lg:grid-cols-4 md:gap-8">
      {whatever.map((res) => (
        <div
          className="flex flex-col hover:shadow-[0px_0px_27px_4px_#a0aec0] transition-all duration-300 items-center my-2 text-left border rounded-lg shadow-xl cursor-pointer dark:border-slate-500 bg-slate-100 dark:bg-slate-800 "
          key={res.name}>
          <Suspense
            fallback={
              <Loader2 className="w-10 h-10 animate-spin dark:text-slate-200" />
            }>
            <Image
              className="rounded-md rounded-b-none lg:hidden"
              src={res.flag}
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
              src={res.flag}
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
          <div className="flex flex-col items-start w-full p-4 my-2 text-left lg:my-6">
            <h2 className="my-1 text-3xl font-bold text-right">{res.name}</h2>
            <div className="my-2 text-lg lg:text-2xl">
              <h2 className="my-1 text-left">
                <b>Population</b> : {res.population}
              </h2>
              <h2 className="my-1 text-left">
                <b>Region</b> : {res.region}
              </h2>
              <h2 className="my-1 text-left">
                <b>Capital</b> : {res.capital}
              </h2>
            </div>
          </div>
        </div>
      ))}
    </Link>
  );
}
