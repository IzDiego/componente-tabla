import React from "react";
import MyReacTable from "./components/tableComponent/MyReacTable";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function MyTable(props: { payload: any; headers: any; }):any {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <MyReacTable headers={props.headers} payload={props.payload}/>
      </QueryClientProvider>
    </div>
  );
}
