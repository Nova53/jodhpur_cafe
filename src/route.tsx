import { createBrowserRouter } from "react-router-dom";
import Location from "./Page/Location";
import MainLayout from "./components/Layout/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Location /> },
      { path: "/location", element: <Location /> },
    ],
  },
]);