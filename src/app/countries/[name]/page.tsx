import Image from "next/image";
import BackButton from "@components/BackButton";
import fetchCountryByName from "@lib/searchByName";
import { fetchBorderNames } from "@lib/fetchBorderNames";
import Link from "next/link";

export async function generateMetadata({
  params: { name },
}: {
  params: { name: string };
}) {
  const country = await fetchCountryByName(name);
  return {
    title: `${country.map((i: any) => i.name.common)}`,
    description: `This ${country.map((i: any) => i.name.common)} Page`,
    icons: {
      icon: `${country.map((i: any) => i.flags.svg)}`,
    },
  };
}
async function CountryDetail({
  params: { name },
}: {
  params: { name: string };
}) {
  const country = await fetchCountryByName(name);
  const borders = country.map(
    (border: string[] | any) => border.borders?.slice(0, 3).join(",") || ""
  );

  let borderData: any = null;
  if (borders[0] !== "") {
    borderData = await fetchBorderNames(borders);
  }
  return (
    <>
      <BackButton />
      {country.map((i: any) => (
        <>
          {}
          <div className="flex flex-col items-center py-4">
            <Image
              src={i.flags.svg}
              alt={i.flags.alt}
              sizes="100vw"
              className="rounded"
              style={{
                width: "90%",
                height: "auto",
              }}
              width={150}
              height={150}
            />
          </div>
          <div className="flex flex-col items-start justify-center px-6 py-4">
            <p className="py-4 text-2xl font-bold tracking-wider ">
              {i.name.common}
            </p>
            {i.capital ? (
              <p className="font-semibold">
                Capital:
                <span className="font-normal">{i.capital && i.capital[0]}</span>
              </p>
            ) : (
              <p className="font-semibold">
                Capital: <span className="font-normal">N/A</span>
              </p>
            )}
            <p className="font-semibold">
              Top Level Domain: <span className="font-normal">{i.tld}</span>
            </p>
            <p>{i.region}</p>
            {i.subregion ? (
              <p className="font-semibold">
                Sub Region: <span className="font-normal">{i.subregion}</span>
              </p>
            ) : (
              <p className="font-semibold">
                Sub Region: <span className="font-normal">N/A</span>
              </p>
            )}
            <p>{i.population.toLocaleString()}</p>
            {i.name.nativeName ? (
              <p className="font-semibold">
                Native Name:{" "}
                {Object.keys(i.name.nativeName)
                  .slice(0, 1)
                  .map((nativeCode) => (
                    <span key={nativeCode} className="font-normal">
                      {i.name.nativeName[nativeCode].common}
                    </span>
                  ))}
              </p>
            ) : (
              <p className="font-semibold">
                Native Name: <span className="font-normal">N/A</span>
              </p>
            )}
            <p>{i.startOfWeek}</p>
            <iframe src={i.maps.googleMaps} />
            <p className="">{i.timezones[0]}</p>
            <p>{i.borders && i.borders[0]}</p>
          </div>
          {i.languages ? (
            <p className="pb-10 font-semibold">
              Languages:{" "}
              {Object.keys(i.languages)
                .slice(0, 3)
                .map((languageKey: any, index: number, array: string[]) => (
                  <span key={languageKey} className="font-normal">
                    {i.languages[languageKey]}
                    {index !== array.length - 1 && ", "}
                  </span>
                ))}
            </p>
          ) : (
            <p className="font-semibold">
              Languages: <span className="font-normal">N/A</span>
            </p>
          )}
          {i.currencies ? (
            <p className="font-semibold">
              Currencies:
              {Object.keys(i.currencies).map((currencyCode) => (
                <span key={currencyCode} className="font-normal">
                  {i.currencies[currencyCode].name}
                </span>
              ))}
            </p>
          ) : (
            <p className="font-semibold">
              Currencies: <span className="font-normal">N/A</span>
            </p>
          )}

          <div className="gap-4 mb-10 font-semibold md:flex md:items-center">
            <p className="whitespace-nowrap">Border Countries:</p>
            <div className="flex items-center justify-between w-full gap-3 mt-4 md:mt-0">
              {borderData &&
                borderData.map((border: any, i: any) => (
                  <Link
                    href={`/countries/${border.name.common}`}
                    key={i}
                    className="py-1 shadow-md rounded-sm font-light border text-center dark:bg-[#2b3945] dark:border-none bg-white w-full">
                    {border.name.common}
                  </Link>
                ))}
              {!borderData && <>No </>}
            </div>
          </div>
        </>
      ))}
    </>
  );
}

export default CountryDetail;
