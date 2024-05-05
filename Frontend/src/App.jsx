import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./HomePage";
import DetailsPage from "./DetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/movie/:id",
    element: <DetailsPage />,
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
