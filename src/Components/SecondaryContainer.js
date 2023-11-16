import React from "react";
import MovieLists from "./MovieLists";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  return (
    <div className="overflow-auto bg-black bg-opacity-90">
      {movies ? (
        <div>
          <MovieLists title={"Now Playing"} movieInfo={movies} />
          <MovieLists title={"Now Playing"} movieInfo={movies} />
          <MovieLists title={"Now Playing"} movieInfo={movies} />
          <MovieLists title={"Now Playing"} movieInfo={movies} />
          <MovieLists title={"Now Playing"} movieInfo={movies} />
          <MovieLists title={"Now Playing"} movieInfo={movies} />
        </div>
      ) : (
        <div>Loading...</div>
      )}
      {console.log(movies)}
    </div>
  );
};

export default SecondaryContainer;
