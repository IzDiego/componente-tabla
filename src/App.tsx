import React from "react";
import MyReacTable from "./components/tableComponent/MyReacTable";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function MyTable():any {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <MyReacTable />
      </QueryClientProvider>
    </div>
  );
}
