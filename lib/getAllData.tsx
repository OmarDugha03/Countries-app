export default async function getAll() {
  const data = await fetch(`${process.env.API_KEY}/all`);
  return data.json();
}
