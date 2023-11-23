import React from "react";
import SearchedMovieList from "./SearchedMovieList";
import { useSelector } from "react-redux";

const SearchedMovies = ({ title }) => {
  const movie = useSelector((store) => store.gptSearchSlice.movieResults);
  return (
    <div className="overflow-auto bg-black bg-opacity-70 bottom-0 h-[60%] md:bottom-0 absolute w-full ">
      {console.log(movie)}
      <SearchedMovieList movieInfo={movie} />
    </div>
  );
};

export default SearchedMovies;
