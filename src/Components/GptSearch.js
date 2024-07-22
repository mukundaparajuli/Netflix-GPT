import { GoogleGenerativeAI } from "@google/generative-ai";
import React, { useRef } from "react";
import { BG_IMAGE } from "../Utils/Constants";
import SearchedMovies from "./SearchedMovies";
import { useDispatch } from "react-redux";
import { movieResults } from "../Utils/gptSearchSlice";

const GptSearch = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const handleGPTSearch = async () => {


    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt =
      "Act as a movie Recommendation system and suggest the movies based on the following info:" +
      searchText.current.value +
      ".Recommend best 10 movies based on the info. Only give me the name of the 10 movies separated by comma. For example:PK, 3 idiots, Jawan, Taxi Driver, American Psyco, Dilwale Dulhania le Jayenge, Gadar, Pathan, The Platform, Drive";

    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();
    console.log(text);

    const messageArray = text.split(", ");
    console.log(messageArray);
    dispatch(movieResults(messageArray));
  }
  return (
    <div>
      <div className="flex justify-center">
        <div className="w-[90%] z-10 bg-black bg-opacity-40 m-2 md:m-4 p-2 md:w-1/2 fixed flex justify-center rounded-lg top-36">
          <input
            ref={searchText}
            className="mx-1 w-[75%] md:w-4/5 h-10 md:h-12 border-2 border-black rounded-xl p-1 md:m-2 bg-gray-500 text-white"
            type="text"
            placeholder="What would you like to watch today?"
          />
          <button
            className="mx-1 md:m-2 border-black border-2 h-10 md:h-12 rounded-xl p-1 md:px-3 bg-blue-800 text-white font-semibold"
            onClick={() => handleGPTSearch()}
          >
            Search
          </button>
        </div>
        <img
          className="fixed object-cover h-screen md:w-full "
          src={BG_IMAGE}
          alt=""
        />
      </div>
      {searchText && <SearchedMovies title={searchText} />}
    </div>
  );
};

export default GptSearch;
