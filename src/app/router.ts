import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../App";
import marketingRoutes from "../features/marketing/marketingRoutes";

const routes: RouteObject[] = [
    {
      path: "/",
      element: <App /> ,
      children: [
        ...marketingRoutes,
      ]
    }
  ];
  
  export const router = createBrowserRouter(routes);