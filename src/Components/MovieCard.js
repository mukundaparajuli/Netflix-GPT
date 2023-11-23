import React from "react";
import { MOVIE_IMAGE_CDN } from "../Utils/Constants";

const MovieCard = ({ backdrop_path, title, name, poster_path }) => {
  if (!(backdrop_path || poster_path)) return null;
  return (
    <div>
      <div className="pr-1 md:pr-4 w-44 md:w-72">
        <img
          className="h-24 md:h-36 w-44 md:w-72 rounded-lg"
          src={MOVIE_IMAGE_CDN + (backdrop_path || poster_path)}
          alt=""
        />
        {title ? (
          <h1 className="text-white text-sm md:text-lg font-bold">{name || title}</h1>
        ) : (
          <h1 className="text-white text-sm md:text-lg font-bold">{name}</h1>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
