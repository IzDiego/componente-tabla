# Componente de React-Table en TypeScript

Este componente icluye los archivos para implementar una tabla con React-Table paginado y elementos de Material-UI sencillo.

### API

Dentro de `/hooks` en el archivo `useTable.ts` debemos configurar el link al que se hará la petición

# En nuestra aplicación solo utilizaremos 

```
import MyTable from 'componente-tabla/lib/Tabla'

payload: object = 
  {
    pagos: {
      listado: {
        ord: "fecha",
        busqueda: "",
        dord: "desc",
        emisor: "11",
        cuenta_bancaria: "",
        movimiento_pago: "0",
        id: "",
        fecha: "",
        num_operacion: "",
        comprobante_pagado: "",
        empresa_nombre: "",
        receptor_nombre: "",
        monto_recibido: "",
        moneda: "null",
        cuenta_bancaria_movimiento: "",
        status_pago: "null",
        columnas: [
          "fecha",
          "forma",
          "forma_pago_nombre",
          "num_operacion",
          "comprobante_pagado",
          "empresa",
          "empresa_nombre",
          "receptor",
          "receptor_nombre",
          "monto",
          "monto_recibido",
          "cuenta_bancaria_movimiento",
          "cuenta_bancaria_movimiento_nombre",
          "status_pago",
          "status_pago_nombre",
        ],
      },
    },
  };

headersPagos: Array = [
    {
      Header: "id",
      accessor: "id" // accessor is the "key" in the data
    },
    {
      Header: "Fecha de emisión",
      accessor: "fecha_emision"
    },
    {
      Header: "Moneda",
      accessor: "moneda_clave"
    },
    {
      Header: "Receptor",
      accessor: "receptor"
    },
    {
      Header: "Razon Social",
      accessor: "receptor_razon_social"
    },
    {
      Header: "RFC",
      accessor: "receptor_rfc"
    },
    {
      Header: "Tipo",
      accessor: "tipo_nombre_comun"
    }
  ]

return (<MyTable headers={headers} payload={payload}/>)
```

para mostrar nuestra tabla.