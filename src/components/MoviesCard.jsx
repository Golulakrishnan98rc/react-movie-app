import React from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";

const MoviesCard = ({
  poster_path,
  title,
  handleAddToWatchList,
  handleRomveWatchList,
  movieObj,
  watchList,
}) => {
  const doesContain = (movieObj) => {
    for (let i = 0; i < watchList.length; i++) {
      if (watchList[i].id === movieObj.id) {
        return true;
      }
    }
    return false;
  };

  return (
    <div
      className="w-[220px] h-[330px] mb-8 bg-cover bg-center rounded-lg hover:scale-105 duration-500 hover:cursor-pointer relative"
      style={{
        backgroundImage: `url(https://media.themoviedb.org/t/p/w220_and_h330_face/${poster_path})`,
      }}
    >
      <div className="text-white text-lg right-3 top-3 absolute rounded ">
        {doesContain(movieObj) ? (
          <MdFavorite
            className="text-red-700"
            onClick={() => handleRomveWatchList(movieObj)}
          />
        ) : (
          <MdFavoriteBorder onClick={() => handleAddToWatchList(movieObj)} />
        )}
      </div>
      <div className="text-white text-lg text-center bg-black/80 p-2 w-full bottom-0 absolute rounded ">
        {title}
      </div>
    </div>
  );
};

export default MoviesCard;
