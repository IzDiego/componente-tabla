/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useState, useMemo } from "react";
//import { headers } from "./datos/headers";
import TableComponent from "./TableComponent";
import useTable from "../../hooks/useTable";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";

export default function MyReacTable(headers: any, payload: FormData): any {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const skips: any = (page - 1) * perPage;
  console.log("payload");
  var value = payload.getAll("pagos[listado][columnas][]");
  console.log(value);
  console.log("headers");
  console.log(headers);
  console.log("fin");
  let { data, isLoading, error, isSuccess } = useTable(skips, perPage, payload);
  var lista: any = {};
  if (isSuccess) {
    lista = data;
  }
  var pagos: any = {};
  pagos = lista.misDatos;
  var contador: any = {};
  contador = lista.contador;

  /* const columns = useMemo(() => headers, [headers]);
  const pagosMemo: any = useMemo(() => pagos, [pagos]); */

  if (error) {
    return <p>Error al obtener los datos</p>;
  }

  if (isLoading) {
    return showLoagingCentrado;
  }

  if (isSuccess) {
    return (
      <div>
        <p>Success</p>
        {/* <TableComponent
            data={pagosMemo}
            columns={columns}
            setPage={setPage}
            setPerPage={setPerPage}
            currentpage={page}
            perPage={perPage}s
            totalPage={contador}
          /> */}
      </div>
    );
  }
}

const showLoagingCentrado = (
  <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center"
    style={{ minHeight: "100vh" }}
  >
    <Grid item xs={3}>
      <CircularProgress />
    </Grid>
  </Grid>
);
