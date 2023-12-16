import FetchedData from "@components/AllCountries";

export const metadata = {
  title: " Where in the  World ?",
};
export default function Home() {
  return (
    <>
      {/* @ts-ignore */}
      <FetchedData />
    </>
  );
}
