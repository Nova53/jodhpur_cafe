import { createBrowserRouter } from "react-router-dom";
import Location from "./Page/Location";
import MainLayout from "./components/mainLayout/MainLayout";

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