import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../App.tsx";
import marketingRoutes from "../features/marketing/marketingRoutes.tsx";
// import authRoutes from "../features/auth/authRoutes.tsx";

const routes: RouteObject[] = [
    {
      path: "/",
      element: <App /> ,
      children: [
        ...marketingRoutes,
        // ...authRoutes,
      ]
    }
  ];
  
  export const router = createBrowserRouter(routes);