export default async function fetchCountryByName(name: string) {
  const res = await fetch(
    `https://restcountries.com/v3.1/name/${name}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
