import React from "react";
import Header from "./Header";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeUser } from "../Utils/userSlice";
import { useSelector } from "react-redux";

const Browse = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        dispatch(removeUser());
      })
      .catch((error) => {});
  };
  return (
    <div className="flex justify-between items-center ">
      <Header />
      <div
        className="flex items-center mr-3 cursor-pointer"
        onClick={handleSignOut}
      >
        <img className="h-12" src={user?.photoURL} alt="" />
        <h1 className=" font-semibold text-red-600 text-2xl items-center h-16 my-4 py-4">
          Log Out
        </h1>
      </div>
    </div>
  );
};

export default Browse;
