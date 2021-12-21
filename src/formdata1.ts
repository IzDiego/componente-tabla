export default function payload(): any {
  var form_data = new FormData();

  form_data.append("pagos[listado][ord]", "fecha");
  form_data.append("pagos[listado][dord]", "desc");
  form_data.append("pagos[listado][busqueda]", "");
  form_data.append("pagos[listado][emisor]", "11");
  form_data.append("pagos[listado][cuenta_bancaria]", "");
  form_data.append("pagos[listado][movimiento_pago]", "0");
  form_data.append("pagos[listado][id]", "");
  form_data.append("pagos[listado][fecha]", "");
  form_data.append("pagos[listado][num_operacion]", "");
  form_data.append("pagos[listado][comprobante_pagado]", "");
  form_data.append("pagos[listado][empresa_nombre]", "");
  form_data.append("pagos[listado][receptor_nombre]", "");
  form_data.append("pagos[listado][monto_recibido]", "");
  form_data.append("pagos[listado][moneda]", "null");
  form_data.append("pagos[listado][cuenta_bancaria_movimiento]", "");
  form_data.append("pagos[listado][status_pago]", "null");
  form_data.append("pagos[listado][columnas][]", "fecha");
  form_data.append("pagos[listado][columnas][]", "forma");
  form_data.append("pagos[listado][columnas][]", "forma_pago_nombre");
  form_data.append("pagos[listado][columnas][]", "num_operacion");
  form_data.append("pagos[listado][columnas][]", "comprobante_pagado");
  form_data.append("pagos[listado][columnas][]", "empresa");
  form_data.append("pagos[listado][columnas][]", "empresa_nombre");
  form_data.append("pagos[listado][columnas][]", "receptor");
  form_data.append("pagos[listado][columnas][]", "receptor_nombre");
  form_data.append("pagos[listado][columnas][]", "monto");
  form_data.append("pagos[listado][columnas][]", "monto_recibido");
  form_data.append("pagos[listado][columnas][]", "cuenta_bancaria_movimiento");
  form_data.append(
    "pagos[listado][columnas][]",
    "cuenta_bancaria_movimiento_nombre"
  );
  form_data.append("pagos[listado][columnas][]", "status_pago");
  form_data.append("pagos[listado][columnas][]", "status_pago_nombre");

  return form_data;
}
