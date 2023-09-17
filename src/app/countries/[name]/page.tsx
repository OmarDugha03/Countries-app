import Image from "next/image";
import BackButton from "@components/BackButton";
import fetchCountryByName from "@lib/searchByName";

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

  return (
    <>
      <BackButton />
      {country.map((i: any) => (
        <>
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
          </div>
        </>
      ))}
    </>
  );
}

export default CountryDetail;
