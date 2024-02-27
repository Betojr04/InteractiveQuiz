import React from "react";
import ReactDOM from "react-dom/client";
import { Layout } from "./views/Layout";
import "./styles/index.css";
import { AppProvider } from "./store/AppContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <Layout />
    </AppProvider>
  </React.StrictMode>
);
