import React from "react";
import MovieLists from "./MovieLists";
import { useSelector } from "react-redux";

const SearchedMovies = ({ title }) => {
  const movie = useSelector((store) => store.gptSearchSlice.movieResults);
  return (
    <div className="overflow-auto bg-black opacity-100 bottom-1 absolute w-full">
      {console.log(movie)}
      <MovieLists movieInfo={movie} />
    </div>
  );
};

export default SearchedMovies;
