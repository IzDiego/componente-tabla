/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useState } from "react";
import { headers } from "./components/tableComponent/datos/headers";
import TableComponent from "./components/tableComponent/TableComponent";
import useTable from "./hooks/useTable";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";

export default function Home() {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const skips: any = (page - 1) * perPage;

  let { data, isLoading, error, isSuccess } = useTable(skips, perPage);
  var lista: any = {};
  if (isSuccess) {
    lista = data;
  }
  var pagos: any = {};
  pagos = lista.misDatos;
  var contador: any = {};
  contador = lista.contador;

  const columns = React.useMemo(() => headers, [headers]);
  const pagosMemo: any = React.useMemo(() => pagos, [pagos]);

  if (error) {
    return <p>Error</p>;
  }

  if (isLoading) {
    return showLoagingCentrado;
  }

  if (isSuccess) {
    return (
      <>
        <TableComponent
          data={pagosMemo}
          columns={columns}
          setPage={setPage}
          setPerPage={setPerPage}
          currentpage={page}
          perPage={perPage}
          totalPage={contador}
        />
        </>
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