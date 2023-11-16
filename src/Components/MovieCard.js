import React from "react";
import { MOVIE_IMAGE_CDN } from "../Utils/Constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="">
      <div className="pr-4 w-52">
        <img className="h-56 w-44" src={MOVIE_IMAGE_CDN + posterPath} alt="" />
      </div>
    </div>
  );
};

export default MovieCard;
