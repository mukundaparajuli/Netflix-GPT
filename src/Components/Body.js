import React from "react";
import Authentication from "./Authentication";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import GptSearch from "./GptSearch";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <GptSearch />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return (
    <div className="no-scrollbar bg-black ">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
