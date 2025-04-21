import { RouteObject } from "react-router-dom";
import MarketingPage from "./pages/MarketingPage";

const marketingRoutes: RouteObject[] = [
  {
    index: true,
    element: <MarketingPage />
  }
];

export default marketingRoutes;
