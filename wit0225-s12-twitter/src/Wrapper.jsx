import React from "react";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";
import { myStore } from "./store/store.js";
import { UserContextProvider } from "./contexts/UserContext.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

const queryClient = new QueryClient();

function Wrapper({ children }) {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <UserContextProvider>
          <Provider store={myStore}>
            {children}
            <ToastContainer />
            <ReactQueryDevtools initialIsOpen={true} />
          </Provider>
        </UserContextProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default Wrapper;
