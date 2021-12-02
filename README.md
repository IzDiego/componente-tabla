# Componente de React-Table en TypeScript

Este componente icluye los archivos para implementar una tabla con React-Table paginado y elementos de Material-UI sencillo.

## Datos
Necesitamos configurar los Headers de la tabla, y el API del que recibimos la información que llenará la tabla.
### Headers

Dentro de la carpeta `/components/tableComponent/datos` se encuentra el archivo `headers.tsx` para configurar los encabezados

### API

Dentro de `/hooks` en el archivo `useTable.ts` debemos configurar el link al que se hará la petición

# En nuestra aplicación solo utilizaremos 

```
import MyTable from 'componente-tabla/lib/Tabla'


return (<MyTable />)
```

para mostrar nuestra tabla.