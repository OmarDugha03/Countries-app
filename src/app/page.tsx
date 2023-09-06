import FetchedData from "@components/Fetch";
import Search from "@components/Search";

export default function Home() {
  return (
    <>
      <div className="z-[-100000]">
        <Search />
        <FetchedData />
      </div>
    </>
  );
}
