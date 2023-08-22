import { createBrowserRouter } from "react-router-dom";
import { Profile } from "../pages/Profile";
import { Home } from "../pages/Home";
import "..";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);
