import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) {
    // You might want to return a loading state or fallback content here
    return <div>Loading...</div>;
  }

  const mainMovie = movies[0];

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="h-full">
      <VideoBackground id={id} />

      <VideoTitle title={original_title} overview={overview} />
    </div>
  );
};

export default MainContainer;
