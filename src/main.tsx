import { MantineProvider } from "@mantine/core";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import router from "./navigation";
import "./styles/index.css";
import { RecoilRoot } from "recoil";

const route = createBrowserRouter([{}]);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider
      theme={{
        fontFamily: "Open Sans, sans-serif",
        lineHeight: 1.2,
        primaryColor: "indigo",
      }}
    >
      <RecoilRoot>
        <RouterProvider router={router} />
      </RecoilRoot>
    </MantineProvider>
  </React.StrictMode>
);
