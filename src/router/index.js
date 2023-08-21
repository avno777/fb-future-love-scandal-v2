import { createBrowserRouter } from "react-router-dom";
import { Home } from "../components/Home";
import Profile from "../components/Profile";
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
