import { MainLayout } from "@/components/layouts/MainLayout";
import { About } from "@/pages/about/about";
import { Home } from "@/pages/home/home";
import { JobListing } from "@/pages/job-listing/job-listing";
import { JobPage } from "@/pages/job/job";
import { MyJob } from "@/pages/my-job/my-job";
import { OnBoarding } from "@/pages/onboarding/onboarding";
import { SaveJob } from "@/pages/save-job/save-job";
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
        path: "orboarding",
        element: <OnBoarding />,
      },
      {
        path: "jobs",
        element: <JobListing />,
      },
      {
        path: "job/:id",
        element: <JobPage />,
      },
      {
        path: "saved-jobs",
        element: <SaveJob />,
      },
      {
        path: "my-jobs",
        element: <MyJob />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
