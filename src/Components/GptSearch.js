import React from "react";
import { BG_IMAGE } from "../Utils/Constants";

const GptSearch = () => {
  return (
    <div className="flex justify-center">
      <div className="z-10 bg-black bg-opacity-40 m-4 p-2 w-1/2 absolute flex justify-center rounded-lg top-36">
        <input
          className="w-4/5 h-12 border-2 border-black rounded-xl p-1 m-2 bg-gray-500 text-white"
          type="text"
          placeholder="What would you like to watch today?"
        />
        <button className="m-2 border-black border-2 h-12 rounded-xl p-1 px-3 bg-blue-800 text-white font-semibold">
          Search
        </button>
      </div>
      <img src={BG_IMAGE} alt="" />
      {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
    </div>
  );
};

export default GptSearch;
