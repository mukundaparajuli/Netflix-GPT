import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute mx-8 mt-[500px]  text-white z-10 flex h-auto w-auto ">
      <div className="items-end">
        <h1 className="text-4xl font-semibold">{title}</h1>
        <p className="text-lg w-[35%]">{overview}</p>
        <button className="bg-white text-black text-xl font-semibold h-12 p-3 my-2 rounded-md">
          Play
        </button>
        <button className="bg-gray-500  text-white text-xl font-semibold h-12 p-3 mx-2 rounded-md">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
