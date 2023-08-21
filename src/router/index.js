import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import Profile from "../pages/Profile";
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
