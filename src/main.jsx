import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import App from "./App";
import "./index.css";

import { store } from "./app/store";
import ThemeProvider from "./context/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
      <App />
       <ToastContainer
        position="top-right"
        autoClose={2000}
        theme="dark"
      />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);