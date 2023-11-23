import React from "react";
import { MOVIE_IMAGE_CDN } from "../Utils/Constants";

const MovieCard = ({ backdrop_path, title, name, overview, poster_path }) => {
  if (!(backdrop_path || poster_path)) return null;
  return (
    <div className="flex justify-evenly shadow-gray-300 shadow-sm p-1 overflow-auto">
      <div className="m-8 w-1/3">
        <img
          className="h-[30vh] w-full"
          src={MOVIE_IMAGE_CDN + (backdrop_path || poster_path)}
          alt=""
        />
      </div>
      <div className="h-[30vh] w-1/3 flex items-center no-scrollbar overflow-scroll">
        <div className="overflow-y-auto">
          {title ? (
            <h1 className=" font-bold no-scrollbar t-0 text-lg md:text-4xl mb-2 h-[25%] text-white flex ">
              {title}
            </h1>
          ) : (
            <h1 className="overflow-y-auto font-bold no-scrollbar  text-lg md:text-4xl mb-2 h-[25%] text-white flex ">
              {name}
            </h1>
          )}
          <p className="overflow-hidden text-white text-[12px] h-[75%]  z-10 text-justify md:text-md ">
            {overview}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
