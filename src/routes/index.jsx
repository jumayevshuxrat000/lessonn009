import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./private-router";
import Home from "../pages/home";
import About from "../pages/about";
import Contact from "../pages/contact";
import Login from "../pages/auth/login";
import UserPage from "../pages/user-page";
import MainLayout from "../components/main-layout";
import Register from "../pages/auth/register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute />,
    children: [
      {
        path: "/user",
        element: <UserPage />,
      },
    ],
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "*",
    element: <h1>sdgsfg</h1>,
  },
]);

export { router };
