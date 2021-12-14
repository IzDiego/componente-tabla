import { useQuery } from 'react-query'

export default function useTable(skip: any, take: any, payload: any) {

  /* payload.append('pagos[listado][por_pagina]', take);
  payload.append('pagos[listado][pagina]', '1'); */

  const link = `api/pagos`;
  return useQuery(
    ["pagos", link, payload],
    async () => {
      const res = await fetch(link, {
        method: "POST",
        body: payload
     }); 
     console.log(res);
      return res;
    }
  );
}

function fetch(link: string, arg1: { method: string; body: any; }) {
  throw new Error('Function not implemented.');
}
