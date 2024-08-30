import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StoreContextProvider from "./Context/StoreContext";
import Home from "./pages/Home/Home.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import MyOrders from "./pages/MyOrders/MyOrders.jsx";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder.jsx";
import Verify from "./pages/Verify/Verify.jsx";
import Layout from "./layout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "order",
        element: <PlaceOrder />,
      },
      {
        path: "myorders",
        element: <MyOrders />,
      },
      {
        path: "verify",
        element: <Verify />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StoreContextProvider>
    <RouterProvider router={router} />
  </StoreContextProvider>
);
