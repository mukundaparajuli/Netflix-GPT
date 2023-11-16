import React from "react";
import Header from "./Header";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeUser } from "../Utils/userSlice";
import { useSelector } from "react-redux";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

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
  // fetch data from tmdb hook
  useNowPlayingMovies();
  return (
    <div className="relative">
      <div className="fixed flex justify-between items-center bg-gradient-to-b from-black z-20 w-screen h-auto  opacity-80">
        <Header />
        <div
          className="flex items-center mr-8 cursor-pointer"
          onClick={handleSignOut}
        >
          <img
            className="h-8 rounded-full border-black border-4"
            src={user?.photoURL}
            alt=""
          />
          <h1 className=" font-semibold text-red-600 text-2xl items-center h-16 my-4 py-4">
            Log Out
          </h1>
        </div>
      </div>
      {/**
       * Maincomponent
       *  -videoplaying
       *  -video info
       * secondary container
       *  -moviesCategory*n
       *  -moviesCard*n
       */}
      <MainContainer />

      <SecondaryContainer />
    </div>
  );
};

export default Browse;
