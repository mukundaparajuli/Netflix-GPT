import React, { useEffect } from "react";
import Authentication from "./Authentication";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import { auth } from "../Utils/Firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";
import { removeUser } from "../Utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();
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

  useEffect(() => {
    onAuthStateChanged(
      auth,
      (user) => {
        if (user) {
          const { uid, email, displayName, photoURL } = user;
          dispatch(
            addUser({
              uid: uid,
              email: email,
              displayName: displayName,
              photoURL: photoURL,
            })
          );
        } else {
          dispatch(removeUser());
        }
      },
      []
    );
  });
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
