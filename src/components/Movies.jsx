import React, { useState, useEffect } from "react";
import MoviesCard from "./MoviesCard";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import axios from "axios";

const Movies = ({ watchList, handleAddToWatchList, handleRomveWatchList }) => {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=3674dff3762e7d2ad59a73ef707de82c&language=en-US&page=${pageNo}`
      )
      .then((res) => setMovies(res.data.results));
  }, [pageNo]);

  return (
    <div className="movies-section p-5">
      <div className="text-3xl text-center mb-8 font-serif font-semibold">
        Trending Movies
      </div>
      <div className="movies-container flex flex-row flex-wrap items-center gap-5 justify-center">
        {movies.map((movieObj) => (
          <MoviesCard
            key={movieObj.id}
            poster_path={movieObj.poster_path}
            title={movieObj.title}
            movieObj={movieObj}
            handleAddToWatchList={handleAddToWatchList}
            handleRomveWatchList={handleRomveWatchList}
            watchList={watchList}
          />
        ))}
      </div>
      <div className="pagination pt-10 flex items-center justify-center gap-5">
        <FaArrowLeftLong
          onClick={() => (pageNo === 1 ? setPageNo(1) : setPageNo(pageNo - 1))}
          className="hover:cursor-pointer"
        />
        {pageNo}
        <FaArrowRight
          onClick={() => setPageNo(pageNo + 1)}
          className="hover:cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Movies;
