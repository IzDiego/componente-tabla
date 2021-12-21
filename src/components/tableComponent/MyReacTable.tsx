/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useState, useMemo } from "react";
//import { headers } from "./datos/headers";
import TableComponent from "./TableComponent";
import useTable from "../../hooks/useTable";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";

export default function MyReacTable(props: { payload: any; headers: any; }): any {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const skips: any = (page - 1) * perPage;
  let { data, isLoading, error, isSuccess } = useTable(skips, perPage, props.payload);
  var pagos: any = {};
  var registros:number = 0;
  if (isSuccess) {
    pagos = data.data;
    registros = data.recordsFiltered;
  }  
  const columns = useMemo(() => props.headers, [props.headers]);
  const pagosMemo: any = useMemo(() => pagos, [pagos]);

  if (error) {
    return <p>Error al obtener los datos</p>;
  }

  if (isLoading) {
    return showLoagingCentrado;
  }

  if (isSuccess) {
    return (
      <div>
        <TableComponent
            data={pagosMemo}
            columns={columns}
            setPage={setPage}
            setPerPage={setPerPage}
            currentpage={page}
            perPage={perPage}
            totalPage={registros}
          />
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
