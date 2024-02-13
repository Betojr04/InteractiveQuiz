import React from "react";
import ReactDOM from "react-dom/client";
import { Layout } from "./views/Layout";
import "./styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>
);
