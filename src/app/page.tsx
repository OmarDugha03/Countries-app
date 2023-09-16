import FetchedData from "@components/AllCountries";

export default function Home() {
  return (
    <>
      <div className="">
        {/* @ts-ignore */}
        <FetchedData />
      </div>
    </>
  );
}
