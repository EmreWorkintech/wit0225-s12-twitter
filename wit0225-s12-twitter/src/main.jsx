import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";
import { myStore } from "./store/store.js";
import { UserContextProvider } from "./contexts/UserContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <Provider store={myStore}>
          <App />
          <ToastContainer />
        </Provider>
      </UserContextProvider>
    </BrowserRouter>
  </StrictMode>
);
