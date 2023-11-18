import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="relative mx-8 text-white z-10 flex-col-reverse h-screen flex items-center">
      <div className="">
        <h1 className="text-6xl font-bold">{title}</h1>
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
