import { createBrowserRouter } from "react-router-dom";
import { Home } from "../routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
export default router;
