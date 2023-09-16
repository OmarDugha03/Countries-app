import FetchedData from "@components/AllCountries";

export default function Home() {
  return (
    <>
      <div className="z-[-100000]">
        {/* @ts-ignore */}
        <FetchedData />
      </div>
    </>
  );
}
