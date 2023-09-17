export default async function fetchCountryByName(name: string) {
  const res = await fetch(
    `${process.env.API_KEY}/name/${name}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
