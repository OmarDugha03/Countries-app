import Image from "next/image";
import { Suspense } from "react";
import { Loader2 } from "lucide-react";
import Link from "next/link";

async function getAll() {
  const data = await fetch("https://restcountries.com/v3.1/all");
  return data.json();
}

export default async function FetchedData() {
  const countries = await getAll();
  return (
    <div className="grid mx-4 rounded-md col-1 lg:mx-12 md:grid-cols-2 lg:grid-cols-4 md:gap-8">
      {countries.map((i: any) => (
        <Link href={`/countries/${i.name.common}`} key={i.name.common}>
          <div className="flex flex-col hover:shadow-[0px_0px_27px_4px_#a0aec0] transition-all duration-300 items-center my-2 text-left border rounded-lg shadow-xl cursor-pointer dark:border-slate-500 bg-slate-100 dark:bg-slate-800 ">
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
            <div className="flex flex-col items-start w-full p-4 my-2 text-left lg:my-6">
              <h2 className="my-1 text-3xl font-bold text-right">
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
  );
}
