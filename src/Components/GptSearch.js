import React, { useRef } from "react";
import { BG_IMAGE } from "../Utils/Constants";
import openai from "../Utils/OpenAI";
// import openai from "../Utils/OpenAI";

const GptSearch = () => {
  const searchText = useRef(null);
  const handleGPTSearch = async () => {
    console.log(searchText.current.value);
    const GptQuery =
      "Act as a movie Recommendation system and suggest the movies based on the following info:" +
      searchText.current.value +
      ".Recommend best 10 movies based on the info. Only give me the name of the 10 movies separated by comma. For example:PK, 3 idiots, Jawan, Taxi Driver, American Psyco, Dilwale Dulhania le Jayenge, Gadar, Pathan, The Platform, Drive";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: searchText.current.value }],
      model: "gpt-3.5-turbo",
    });
    console.log(gptResults.choices);
  };
  return (
    <div className="flex justify-center">
      <div className="z-10 bg-black bg-opacity-40 m-4 p-2 w-1/2 absolute flex justify-center rounded-lg top-36">
        <input
          ref={searchText}
          className="w-4/5 h-12 border-2 border-black rounded-xl p-1 m-2 bg-gray-500 text-white"
          type="text"
          placeholder="What would you like to watch today?"
        />
        <button
          className="m-2 border-black border-2 h-12 rounded-xl p-1 px-3 bg-blue-800 text-white font-semibold"
          onClick={handleGPTSearch}
        >
          Search
        </button>
      </div>
      <img src={BG_IMAGE} alt="" />
      {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
    </div>
  );
};

export default GptSearch;
