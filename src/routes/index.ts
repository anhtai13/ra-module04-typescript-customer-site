import { createBrowserRouter, RouteObject } from "react-router-dom";
import { Router } from "@remix-run/router";

import DefaultLayout from "../layouts/DefaultLayout";

import DashboardPage from "../pages/DashboardPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import CartList from "../pages/cart/CartList";
import ProductList from "../pages/product/productList";
import Sidebar from "../components/partials/Sidebar";
import OrderList from "../pages/order/orderList";

const routes: RouteObject[] = [
  {
    path: "/login",
    Component: LoginPage,
  },
  {
    path: "/register",
    Component: RegisterPage,
  },
  {
    id: "root",
    path: "/",
    Component: DefaultLayout,
    children: [
      {
        path: "home",
        Component: Sidebar,
      },
      {
        path: "/cart",
        Component: CartList,
      },
      {
        path: "/product",
        Component: ProductList,
      },
      {
        path: "/order",
        Component: OrderList,
      },
    ],
  },
];

const router: Router = createBrowserRouter(routes);

export default router;
