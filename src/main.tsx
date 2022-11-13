import { MantineProvider } from "@mantine/core";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import router from "./navigation";
import './styles/index.css'

const route = createBrowserRouter([{}]);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider theme={{
        fontFamily: "Open Sans, sans-serif",
        lineHeight: 1.2,
        primaryColor: "indigo",
      }}
    >
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>
);
