import { useQuery } from "react-query";

export default function useTable(skip: any, take: any) {
  const link = `http://localhost:3001/api/pagos?skip=${skip}&take=${take}`;
  return useQuery(
    ["pagos", link],
    async () => {
      const res = await fetch(link);      
      return res.json();
    },
    { keepPreviousData: true }
  );
}