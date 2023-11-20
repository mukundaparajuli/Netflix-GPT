import React, { useRef } from "react";
import { API_OPTIONS, BG_IMAGE } from "../Utils/Constants";
import SearchedMovies from "./SearchedMovies";
import { useDispatch } from "react-redux";
import { movieResults } from "../Utils/gptSearchSlice";
// import openai from "../Utils/OpenAI";

const GptSearch = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const tmdbMovieSearch = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/multi?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json;
  };

  const handleSearch = async () => {
    console.log(searchText?.current?.value);
    const tmdbResults = await tmdbMovieSearch(searchText?.current?.value);
    console.log(tmdbResults.results);
    dispatch(movieResults(tmdbResults.results));
  };

  // GPT Search required a subscription so we will use general search feature here
  //
  //
  // const handleGPTSearch = async () => {
  //   console.log(searchText.current.value);
  //   const GptQuery =
  //     "Act as a movie Recommendation system and suggest the movies based on the following info:" +
  //     searchText.current.value +
  //     ".Recommend best 10 movies based on the info. Only give me the name of the 10 movies separated by comma. For example:PK, 3 idiots, Jawan, Taxi Driver, American Psyco, Dilwale Dulhania le Jayenge, Gadar, Pathan, The Platform, Drive";
  //   const gptResults = await openai.chat.completions.create({
  //     messages: [{ role: "user", content: GptQuery }],
  //     model: "gpt-3.5-turbo",
  //   });
  //   console.log(gptResults.choices);
  // };
  return (
    <div>
      <div className="flex justify-center">
        <div className="z-10 bg-black bg-opacity-40 m-4 p-2 w-1/2 fixed flex justify-center rounded-lg top-36">
          <input
            ref={searchText}
            className="w-4/5 h-12 border-2 border-black rounded-xl p-1 m-2 bg-gray-500 text-white"
            type="text"
            placeholder="What would you like to watch today?"
          />
          <button
            className="m-2 border-black border-2 h-12 rounded-xl p-1 px-3 bg-blue-800 text-white font-semibold"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <img className="fixed h-[100vh]" src={BG_IMAGE} alt="" />
      </div>
      {searchText && <SearchedMovies title={searchText} />}
    </div>
  );
};

export default GptSearch;
