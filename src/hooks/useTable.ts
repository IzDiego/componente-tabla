import { useQuery } from "react-query";

export default function useTable(skip: any, take: any, payload: any) {
  var form_data = new FormData();
  form_data.append("pagos[listado][por_pagina]", take);
  form_data.append("pagos[listado][pagina]", "1");
  form_data.append(
    "pagos[listado][ord]",
    String(Object.keys(payload.pagos.listado.ord))
  );
  form_data.append(
    "pagos[listado][dord]",
    String(Object.keys(payload.pagos.listado.dord))
  );
  form_data.append(
    "pagos[listado][busqueda]",
    String(Object.keys(payload.pagos.listado.busqueda))
  );
  form_data.append(
    "pagos[listado][emisor]",
    String(Object.keys(payload.pagos.listado.emisor))
  );
  form_data.append(
    "pagos[listado][cuenta_bancaria]",
    String(Object.keys(payload.pagos.listado.cuenta_bancaria))
  );
  form_data.append(
    "pagos[listado][movimiento_pago]",
    String(Object.keys(payload.pagos.listado.movimiento_pago))
  );
  form_data.append(
    "pagos[listado][id]",
    String(Object.keys(payload.pagos.listado.id))
  );
  form_data.append(
    "pagos[listado][fecha]",
    String(Object.keys(payload.pagos.listado.fecha))
  );
  form_data.append(
    "pagos[listado][num_operacion]",
    String(Object.keys(payload.pagos.listado.num_operacion))
  );
  form_data.append(
    "pagos[listado][comprobante_pagado]",
    String(Object.keys(payload.pagos.listado.comprobante_pagado))
  );
  form_data.append(
    "pagos[listado][empresa_nombre]",
    String(Object.keys(payload.pagos.listado.empresa_nombre))
  );
  form_data.append(
    "pagos[listado][receptor_nombre]",
    String(Object.keys(payload.pagos.listado.receptor_nombre))
  );
  form_data.append(
    "pagos[listado][monto_recibido]",
    String(Object.keys(payload.pagos.listado.monto_recibido))
  );
  form_data.append(
    "pagos[listado][moneda]",
    String(Object.keys(payload.pagos.listado.moneda))
  );
  form_data.append(
    "pagos[listado][cuenta_bancaria_movimiento]",
    String(Object.keys(payload.pagos.listado.cuenta_bancaria_movimiento))
  );
  form_data.append(
    "pagos[listado][status_pago]",
    String(Object.keys(payload.pagos.listado.status_pago))
  );

  for (let i in Object.values(payload.pagos.listado.columnas)) {
    form_data.append(
      "pagos[listado][columnas][]",
      String(Object.values(payload.pagos.listado.columnas)[i])
    );
  }
  /*   console.log(form_data.getAll("pagos[listado][columnas][]"));
   */
  const link = `api/pagos`;
  return useQuery(["pagos", link, form_data], async () => {
    const res = await fetch(link, {
      method: "POST",
      body: form_data,
    });
    return res.json();
  });
}
