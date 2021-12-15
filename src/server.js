import { createServer } from "miragejs";

createServer({
  routes() {
    this.namespace = "api";

    this.post("/pagos", () => {
      return {
        data: [
          {
            id: "60370",
            consecutivo: "64890",
            emitido_serie: "",
            emitido_folio: "",
            fecha_emision: "10-Dic-2021",
            receptor: "7802",
            receptor_razon_social: "GRIC, Inc.",
            receptor_rfc: "XEXX010101000",
            tipo_nombre_comun: "Factura",
            total: "267",
            moneda_clave: "USD",
            fecha_cancelacion: "",
            status: "A",
            idenc: "2722850",
            comprobante_uuid: "",
            pago_membresia_creditoid: "765510",
            plan_pago_suscripcion_empresa_cargo_automatico: "1",
          },
          {
            id: "60369",
            consecutivo: "64889",
            emitido_serie: "",
            emitido_folio: "",
            fecha_emision: "10-Dic-2021",
            receptor: "7428",
            receptor_razon_social:
              "PROCESOS DE ENVASADO, BLISTEO Y EMPAQUES ESPECIALES, S.A. DE C.V.",
            receptor_rfc: "PEB151002NGA",
            tipo_nombre_comun: "Factura",
            total: "2929",
            moneda_clave: "MXN",
            fecha_cancelacion: "",
            status: "A",
            idenc: "2722849",
            comprobante_uuid: "",
            pago_membresia_creditoid: "765509",
            plan_pago_suscripcion_empresa_cargo_automatico: "1",
          },
          {
            id: "60368",
            consecutivo: "64888",
            emitido_serie: "",
            emitido_folio: "",
            fecha_emision: "10-Dic-2021",
            receptor: "7642",
            receptor_razon_social: "EBS Suministros Industriales, S.A. de C.V.",
            receptor_rfc: "ESI200626821",
            tipo_nombre_comun: "Factura",
            total: "1560.26",
            moneda_clave: "MXN",
            fecha_cancelacion: "",
            status: "A",
            idenc: "2722838",
            comprobante_uuid: "",
            pago_membresia_creditoid: "765488",
            plan_pago_suscripcion_empresa_cargo_automatico: "0",
          },
          {
            id: "60367",
            consecutivo: "64887",
            emitido_serie: "",
            emitido_folio: "",
            fecha_emision: "10-Dic-2021",
            receptor: "7795",
            receptor_razon_social: "Aldeco Krup SL",
            receptor_rfc: "XEXX010101000",
            tipo_nombre_comun: "Factura",
            total: "267",
            moneda_clave: "USD",
            fecha_cancelacion: "",
            status: "A",
            idenc: "2722807",
            comprobante_uuid: "",
            pago_membresia_creditoid: "765457",
            plan_pago_suscripcion_empresa_cargo_automatico: "1",
          },
          {
            id: "60366",
            consecutivo: "64886",
            emitido_serie: "",
            emitido_folio: "",
            fecha_emision: "10-Dic-2021",
            receptor: "5742",
            receptor_razon_social: "Qu\u00edmicos Reyem, S.A. de C.V.",
            receptor_rfc: "QRE19050961A",
            tipo_nombre_comun: "Factura",
            total: "4978.8",
            moneda_clave: "MXN",
            fecha_cancelacion: "",
            status: "A",
            idenc: "2722786",
            comprobante_uuid: "",
            pago_membresia_creditoid: "765446",
            plan_pago_suscripcion_empresa_cargo_automatico: "0",
          },
          {
            id: "60365",
            consecutivo: "64885",
            emitido_serie: "",
            emitido_folio: "",
            fecha_emision: "10-Dic-2021",
            receptor: "5794",
            receptor_razon_social: "Paulino Urquijo Cardenas",
            receptor_rfc: "UUCP810802979",
            tipo_nombre_comun: "Factura",
            total: "2027.3",
            moneda_clave: "MXN",
            fecha_cancelacion: "",
            status: "A",
            idenc: "2722775",
            comprobante_uuid: "",
            pago_membresia_creditoid: "765435",
            plan_pago_suscripcion_empresa_cargo_automatico: "1",
          },
          {
            id: "60364",
            consecutivo: "64884",
            emitido_serie: "",
            emitido_folio: "",
            fecha_emision: "10-Dic-2021",
            receptor: "5505",
            receptor_razon_social: "NBD Proteins, SAPI de C.V.",
            receptor_rfc: "NPR181017BT0",
            tipo_nombre_comun: "Factura",
            total: "3506.19",
            moneda_clave: "MXN",
            fecha_cancelacion: "",
            status: "A",
            idenc: "2722764",
            comprobante_uuid: "",
            pago_membresia_creditoid: "765424",
            plan_pago_suscripcion_empresa_cargo_automatico: "0",
          },
          {
            id: "60363",
            consecutivo: "64883",
            emitido_serie: "E",
            emitido_folio: "36138",
            fecha_emision: "10-Dic-2021",
            receptor: "4670",
            receptor_razon_social: "MARIO ALFONSO MARTINEZ UNDA",
            receptor_rfc: "MAUM700421LJ8",
            tipo_nombre_comun: "Factura",
            total: "2027.3",
            moneda_clave: "MXN",
            fecha_cancelacion: "",
            status: "A",
            idenc: "2722753",
            comprobante_uuid: "95163CBA-5802-43FE-9284-B7E26A78576B",
            pago_membresia_creditoid: "00",
            plan_pago_suscripcion_empresa_cargo_automatico: "1",
          },
          {
            id: "60362",
            consecutivo: "64882",
            emitido_serie: "",
            emitido_folio: "",
            fecha_emision: "10-Dic-2021",
            receptor: "5748",
            receptor_razon_social: "COMERCIALIZACION CIRAEM, S.A. DE C.V.",
            receptor_rfc: "CCI190117AY9",
            tipo_nombre_comun: "Factura",
            total: "1965.38",
            moneda_clave: "MXN",
            fecha_cancelacion: "",
            status: "A",
            idenc: "2722742",
            comprobante_uuid: "",
            pago_membresia_creditoid: "765413",
            plan_pago_suscripcion_empresa_cargo_automatico: "1",
          },
          {
            id: "60361",
            consecutivo: "64881",
            emitido_serie: "",
            emitido_folio: "",
            fecha_emision: "10-Dic-2021",
            receptor: "3820",
            receptor_razon_social: "ANDREA PAULINA CORTES ARRIETA",
            receptor_rfc: "COAA810806QP6",
            tipo_nombre_comun: "Factura",
            total: "4245.66",
            moneda_clave: "MXN",
            fecha_cancelacion: "",
            status: "A",
            idenc: "2722731",
            comprobante_uuid: "",
            pago_membresia_creditoid: "765402",
            plan_pago_suscripcion_empresa_cargo_automatico: "1",
          },
          {
            id: "60360",
            consecutivo: "64880",
            emitido_serie: "",
            emitido_folio: "",
            fecha_emision: "10-Dic-2021",
            receptor: "7740",
            receptor_razon_social:
              "Mercadotecnia y Comunicaci\u00f3n Profesional, S.C.",
            receptor_rfc: "MCP0412273F0",
            tipo_nombre_comun: "Factura",
            total: "4547.2",
            moneda_clave: "MXN",
            fecha_cancelacion: "",
            status: "A",
            idenc: "2722720",
            comprobante_uuid: "",
            pago_membresia_creditoid: "765381",
            plan_pago_suscripcion_empresa_cargo_automatico: "1",
          },
          {
            id: "60359",
            consecutivo: "64879",
            emitido_serie: "",
            emitido_folio: "",
            fecha_emision: "10-Dic-2021",
            receptor: "406",
            receptor_razon_social: "Epaf Monarca, SA de CV.",
            receptor_rfc: "EMO0205208L2",
            tipo_nombre_comun: "Factura",
            total: "1736.52",
            moneda_clave: "MXN",
            fecha_cancelacion: "",
            status: "A",
            idenc: "2722689",
            comprobante_uuid: "",
            pago_membresia_creditoid: "765370",
            plan_pago_suscripcion_empresa_cargo_automatico: "0",
          },
          {
            id: "60358",
            consecutivo: "64878",
            emitido_serie: "",
            emitido_folio: "",
            fecha_emision: "10-Dic-2021",
            receptor: "7535",
            receptor_razon_social: "Quiminet",
            receptor_rfc: "XAXX010101000",
            tipo_nombre_comun: "Factura",
            total: "752.84",
            moneda_clave: "USD",
            fecha_cancelacion: "",
            status: "A",
            idenc: "2722678",
            comprobante_uuid: "",
            pago_membresia_creditoid: "765349",
            plan_pago_suscripcion_empresa_cargo_automatico: "0",
          },
          {
            id: "58578",
            consecutivo: "63240",
            emitido_serie: "",
            emitido_folio: "",
            fecha_emision: "10-Dic-2021",
            receptor: "5907",
            receptor_razon_social: "Grupo QuicaMex",
            receptor_rfc: "XAXX010101000",
            tipo_nombre_comun: "Factura",
            total: "3963",
            moneda_clave: "MXN",
            fecha_cancelacion: "",
            status: "A",
            idenc: "2665878",
            comprobante_uuid: "",
            pago_membresia_creditoid: "00",
            plan_pago_suscripcion_empresa_cargo_automatico: "0",
          },
          {
            id: "60357",
            consecutivo: "64877",
            emitido_serie: "",
            emitido_folio: "",
            fecha_emision: "09-Dic-2021",
            receptor: "6593",
            receptor_razon_social: "Abbondanza e Forza, SAPI de CV",
            receptor_rfc: "AFO1607191X5",
            tipo_nombre_comun: "Factura",
            total: "79290.4",
            moneda_clave: "MXN",
            fecha_cancelacion: "",
            status: "A",
            idenc: "2722667",
            comprobante_uuid: "",
            pago_membresia_creditoid: "765338",
            plan_pago_suscripcion_empresa_cargo_automatico: "",
          },
          {
            id: "59979",
            consecutivo: "64545",
            emitido_serie: "E",
            emitido_folio: "36137",
            fecha_emision: "09-Dic-2021",
            receptor: "2576",
            receptor_razon_social: "Qu\u00edmicos Pledca, S.A. de C.V.",
            receptor_rfc: "QPL111202KG4",
            tipo_nombre_comun: "Factura",
            total: "6560.96",
            moneda_clave: "MXN",
            fecha_cancelacion: "",
            status: "A",
            idenc: "2714389",
            comprobante_uuid: "F37460DA-EB5C-4A89-8190-70375CED7E59",
            pago_membresia_creditoid: "00",
            plan_pago_suscripcion_empresa_cargo_automatico: "0",
          },
          {
            id: "60272",
            consecutivo: "64793",
            emitido_serie: "",
            emitido_folio: "",
            fecha_emision: "09-Dic-2021",
            receptor: "7689",
            receptor_razon_social: "L\u00e1minas Pl\u00e1sticas Alfa",
            receptor_rfc: "XAXX010101000",
            tipo_nombre_comun: "Factura",
            total: "9204.6",
            moneda_clave: "MXN",
            fecha_cancelacion: "",
            status: "A",
            idenc: "2720852",
            comprobante_uuid: "",
            pago_membresia_creditoid: "00",
            plan_pago_suscripcion_empresa_cargo_automatico: "0",
          },
          {
            id: "60356",
            consecutivo: "64876",
            emitido_serie: "",
            emitido_folio: "",
            fecha_emision: "09-Dic-2021",
            receptor: "5791",
            receptor_razon_social: "ACABADOS METALICOS SA DE CV",
            receptor_rfc: "AME5304298D5",
            tipo_nombre_comun: "Factura",
            total: "11680.77",
            moneda_clave: "MXN",
            fecha_cancelacion: "",
            status: "A",
            idenc: "2722656",
            comprobante_uuid: "",
            pago_membresia_creditoid: "00",
            plan_pago_suscripcion_empresa_cargo_automatico: "1",
          },
          {
            id: "59649",
            consecutivo: "64220",
            emitido_serie: "E",
            emitido_folio: "36136",
            fecha_emision: "09-Dic-2021",
            receptor: "6676",
            receptor_razon_social: "ERIKA MONTSERRAT AYAL PRECAIDO",
            receptor_rfc: "AAPE8809045W5",
            tipo_nombre_comun: "Factura",
            total: "4461.43",
            moneda_clave: "MXN",
            fecha_cancelacion: "",
            status: "A",
            idenc: "2704579",
            comprobante_uuid: "AC626CAE-8113-4269-BEE3-9952A18DC7C1",
            pago_membresia_creditoid: "00",
            plan_pago_suscripcion_empresa_cargo_automatico: "1",
          },
          {
            id: "59299",
            consecutivo: "63929",
            emitido_serie: "",
            emitido_folio: "",
            fecha_emision: "09-Dic-2021",
            receptor: "3732",
            receptor_razon_social:
              "Profesionales en Instalaciones Hospitalarias e Industriales S.A.de C.V.",
            receptor_rfc: "PIH1409195U1",
            tipo_nombre_comun: "Factura",
            total: "1148.4",
            moneda_clave: "MXN",
            fecha_cancelacion: "",
            status: "A",
            idenc: "2684259",
            comprobante_uuid: "",
            pago_membresia_creditoid: "716158",
            plan_pago_suscripcion_empresa_cargo_automatico: "1",
          },
          {
            id: "58771",
            consecutivo: "63429",
            emitido_serie: "",
            emitido_folio: "",
            fecha_emision: "09-Dic-2021",
            receptor: "3732",
            receptor_razon_social:
              "Profesionales en Instalaciones Hospitalarias e Industriales S.A.de C.V.",
            receptor_rfc: "PIH1409195U1",
            tipo_nombre_comun: "Factura",
            total: "1148.4",
            moneda_clave: "MXN",
            fecha_cancelacion: "",
            status: "A",
            idenc: "2670621",
            comprobante_uuid: "",
            pago_membresia_creditoid: "703853",
            plan_pago_suscripcion_empresa_cargo_automatico: "1",
          },
          {
            id: "60355",
            consecutivo: "64875",
            emitido_serie: "",
            emitido_folio: "",
            fecha_emision: "09-Dic-2021",
            receptor: "7846",
            receptor_razon_social: "ABSALON RAMOS BAUTISTA",
            receptor_rfc: "RABA970617UL5",
            tipo_nombre_comun: "Factura",
            total: "2685.4",
            moneda_clave: "MXN",
            fecha_cancelacion: "",
            status: "A",
            idenc: "2722645",
            comprobante_uuid: "",
            pago_membresia_creditoid: "00",
            plan_pago_suscripcion_empresa_cargo_automatico: "1",
          },
          {
            id: "60337",
            consecutivo: "64857",
            emitido_serie: "E",
            emitido_folio: "36135",
            fecha_emision: "09-Dic-2021",
            receptor: "309",
            receptor_razon_social: "Laminados Facarlyte, S.A. de C.V.",
            receptor_rfc: "LFA660726540",
            tipo_nombre_comun: "Factura",
            total: "8279.48",
            moneda_clave: "MXN",
            fecha_cancelacion: "",
            status: "A",
            idenc: "2722177",
            comprobante_uuid: "9DAD371B-A023-4E97-B3DA-FCAA6C5292C0",
            pago_membresia_creditoid: "765101",
            plan_pago_suscripcion_empresa_cargo_automatico: "0",
          },
          {
            id: "60354",
            consecutivo: "64874",
            emitido_serie: "E",
            emitido_folio: "36134",
            fecha_emision: "09-Dic-2021",
            receptor: "7845",
            receptor_razon_social: "Polireciclados de Mexico, S.A. de C.V.",
            receptor_rfc: "PME0711122M2",
            tipo_nombre_comun: "Factura",
            total: "8787",
            moneda_clave: "MXN",
            fecha_cancelacion: "",
            status: "A",
            idenc: "2722634",
            comprobante_uuid: "0F6DFE76-EB7E-4BFD-B356-F3BE6A38C8AB",
            pago_membresia_creditoid: "00",
            plan_pago_suscripcion_empresa_cargo_automatico: "1",
          },
          {
            id: "60353",
            consecutivo: "64873",
            emitido_serie: "E",
            emitido_folio: "36133",
            fecha_emision: "09-Dic-2021",
            receptor: "7844",
            receptor_razon_social: "panificadora fuentes s p a",
            receptor_rfc: "XEXX010101000",
            tipo_nombre_comun: "Factura",
            total: "195",
            moneda_clave: "USD",
            fecha_cancelacion: "",
            status: "A",
            idenc: "2722623",
            comprobante_uuid: "C74D4E28-FA83-481D-9748-F277DC8C8107",
            pago_membresia_creditoid: "00",
            plan_pago_suscripcion_empresa_cargo_automatico: "1",
          },
        ],
        page: 1,
        recordsTotal: 60370,
        recordsFiltered: 60370,
        mensaje_metodo: [],
        error: [],
      };
    });
  },
});