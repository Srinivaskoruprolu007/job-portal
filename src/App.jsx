import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Button } from "./components/ui/button";
import AppLayout from "./layouts/app-layout";
import LandingPage from "./pages/LandingPage";
import Onboarding from "./pages/Onboarding";
import JobListing from "./pages/JobListing";
import PostJobs from "./pages/PostJobs";
import SaveJobs from "./pages/SaveJobs";
import MyJobs from "./pages/MyJobs";
import "../src/App.css";
import { ThemeProvider } from "./components/theme-provider";
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/onboarding",
        element: <Onboarding />,
      },
      {
        path: "/jobs",
        element: <JobListing />,
      },
      {
        path: "/post-job",
        element: <PostJobs />,
      },
      {
        path: "/saved-job",
        element: <SaveJobs />,
      },
      {
        path: "/my-jobs",
        element: <MyJobs />,
      },
    ],
  },
]);
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
