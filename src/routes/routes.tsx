import { MainLayout } from "@/components/layouts/MainLayout";
import { About } from "@/pages/about/about";
import { Home } from "@/pages/home/home";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
