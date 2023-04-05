import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./component/Shop/Shop";
import Login from "./component/Login/Login";
import Orders from "./component/Orders/Orders";
import sideBarProducstLoader from "./sidBarProductsLoader";
import Inventory from "./component/Inventory/Inventory";
import Payment from "./component/Payment/Payment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Shop/>
    },
      {
        path: '/shop',
        element: <Shop/>
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'orders',
        element: <Orders />,
        loader: sideBarProducstLoader
      },
      {
        path: 'inventory',
        element: <Inventory/>
      },
      {
        path: 'payment',
        element: <Payment/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
