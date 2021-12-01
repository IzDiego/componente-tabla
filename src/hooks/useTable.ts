import { useQuery } from "react-query";

export default function useTable(skip: any, take: any) {
  const link = `http://localhost:3000/api/pagos?skip=${skip}&take=${take}`;
  return useQuery(
    ["pagos", link],
    async () => {
      const res = await fetch(link, { mode: 'cors' }); 
      return res.json();
    }
  );
}