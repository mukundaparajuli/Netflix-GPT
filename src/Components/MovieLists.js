import React from "react";
import MovieCard from "./MovieCard";

const MovieLists = ({ title, movieInfo }) => {
  return (
    <div className=" p-4 relative">
      <div>
        <h1 className="text-white  text-3xl font-semibold">{title}</h1>
      </div>
      <div className="flex flex-nowrap no-scrollbar flex-grow overflow-x-auto">
        {movieInfo?.map((movie) => (
          <MovieCard posterPath={movie?.backdrop_path} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default MovieLists;
