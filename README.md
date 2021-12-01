# Componente de React-Table

Este componente icluye los archivos para implementar una tabla con React-Table y elementos de Material-UI.

## Datos
Necesitamos configurar los Headers de la tabla, y el API del que recibimos la información que llenará la tabla.
### Headers

Dentro de la carpeta `src/components/tableComponent/datos` se encuentra el archivo `headers.tsx` para configurar los encabezados

### API

Dentro de `src/hooks` en el archivo `useTable.ts` debemos configurar el link al que se hará la petición

# En nuestra aplicación solo utilizaremos 

```
<QueryClientProvider client={queryClient}>
    <MyReacTable />
</QueryClientProvider>
```

para mostrar nuestra tabla.