import React from "react";
import Authentication from "./Authentication";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Authentication />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
