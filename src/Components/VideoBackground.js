import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/useMovieTrailer";

const VideoBackground = ({ id }) => {
  const trailerId = useSelector((store) => store?.movies?.trailerVido);

  useMovieTrailer({ id });

  return (
    <div className="w-screen absolute">
      <iframe
        className="w-screen aspect-video bg-gradient-to-tr from-black bg-opacity-90"
  
        src={"https://www.youtube.com/embed/" + trailerId?.key+"?autoplay=1&mute=1&enablejsapi=1&controls=0&picture-in-picture=0&encrypted-media=0"}
        title="FIVE NIGHTS AT FREDDY&#39;S | Final Trailer"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      
    </div>
  );
};

export default VideoBackground;
