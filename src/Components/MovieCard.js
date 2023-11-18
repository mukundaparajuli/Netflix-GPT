import React from "react";
import { MOVIE_IMAGE_CDN } from "../Utils/Constants";

const MovieCard = ({ backdrop_path, title }) => {
  return (
    <div>
      <div className="pr-4 w-72">
        <img
          className="h-36 w-auto rounded-lg"
          src={MOVIE_IMAGE_CDN + backdrop_path}
          alt=""
        />
        <h1 className="text-white text-lg font-bold">{title}</h1>
      </div>
      
    </div>
  );
};

export default MovieCard;
