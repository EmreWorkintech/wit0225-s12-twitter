import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";
import { myStore } from "./store/store.js";
import { UserContextProvider } from "./contexts/UserContext.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <UserContextProvider>
          <Provider store={myStore}>
            <App />
            <ToastContainer />
            <ReactQueryDevtools initialIsOpen={true} />
          </Provider>
        </UserContextProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
);
