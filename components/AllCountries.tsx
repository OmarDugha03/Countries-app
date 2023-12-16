import Image from "next/image";
import Link from "next/link";
import getAll from "@lib/getAllData";
import Pagination from "./Pagination";
export default async function FetchedData({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const countries = await getAll();
  /*   const page = searchParams["page"] ?? 1;
  const per_page = searchParams["per_page"] ?? 5;
  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);
  const ent = countries.slice(start, end); */
  return (
    <>
      <div className="flex flex-col items-center justify-center w-[95%] mx-auto p-0 rounded-md md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-12  ">
        {!countries
          ? "... Loading"
          : countries.map((i: any) => (
              <Link href={`/countries/${i.name.common}`} key={i.name.common}>
                <div className="flex flex-col hover:shadow-[0px_0px_27px_4px_#a0aec0] transition-all duration-300 items-center my-2 text-left border rounded-lg shadow-xl cursor-pointer rid md:grid-cols-2  xl:grid-cols-3 2xl:grid-cols-4 gap-14 dark:border-slate-500 bg-slate-100 dark:bg-slate-800 ">
                  <Image
                    className="w-full h-auto rounded-md rounded-b-none aspect-square "
                    src={i.flags.svg}
                    width={1}
                    height={1}
                    alt={i.flags.alt || "the" + i.name.common + "flag"}
                    priority
                  />
                  <div className="flex flex-col items-center w-full p-1 text-left h-60 ">
                    <h2 className="pb-3 text-2xl font-bold lg:text-4xl">
                      {i.name.common}
                    </h2>
                    <h3 className="pt-1 pb-2 mr-4 text-lg font-medium lg:text-xl">
                      <b>Population</b> : {i.population.toLocaleString()}
                    </h3>
                    <h3 className="pt-1 pb-2 mr-4 text-lg font-medium lg:text-xl">
                      <b>Region</b> : {i.region}
                    </h3>
                    <h3 className="pt-1 pb-2 mr-4 text-lg font-medium lg:text-xl">
                      <b>Capital</b> : {i.capital}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
        {/*         <Pagination
          hasNextPage={end < countries.length}
          hasPrevPage={start > 0}
        /> */}
      </div>
    </>
  );
}
