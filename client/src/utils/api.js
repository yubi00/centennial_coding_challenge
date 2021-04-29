export const loadData = async () => {
  const data = await fetch("/api/data");
  return await data.json();
};
