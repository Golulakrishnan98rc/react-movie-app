import React, { useState } from "react";
import { FaLongArrowAltDown } from "react-icons/fa";
import { FaLongArrowAltUp } from "react-icons/fa";
import genreid from "../Utilities/genre";
import { RiDeleteBin6Line } from "react-icons/ri";

const Favourites = ({
  watchList,
  movieObj,
  setWatchList,
  handleRomveWatchList,
}) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSortIncreasing = () => {
    let sortIncrease = watchList.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });
    setWatchList([...sortIncrease]);
  };

  const handleSortDecreasing = () => {
    let sortDecrease = watchList.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });
    setWatchList([...sortDecrease]);
  };

  return (
    <div className="favorite-section p-5">
      <div className="flex items-center justify-center my-5">
        <input
          onChange={handleSearch}
          value={search}
          type="text"
          placeholder="Search Movies"
          className="outline-none bg-[#dbd9d9] p-2 rounded-lg w-[260px]"
        />
      </div>
      <div className="border mt-10 p-5">
        <table className="w-full text-center">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>
              <th className="flex items-center justify-center space-x-2">
                <div>
                  <FaLongArrowAltDown
                    className="cursor-pointer"
                    onClick={handleSortDecreasing}
                  />
                </div>
                <div>Ratings</div>
                <div>
                  <FaLongArrowAltUp
                    className="cursor-pointer"
                    onClick={handleSortIncreasing}
                  />
                </div>
              </th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {watchList
              .filter((movieObj) => {
                return movieObj.title
                  .toLowerCase()
                  .includes(search.toLocaleLowerCase());
              })
              .map((movieObj) => (
                <tr key={movieObj.id} className="border-b-2">
                  <td className="flex items-center space-x-6 py-4">
                    <img
                      className="w-[auto] h-[80px]"
                      src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movieObj.poster_path}`}
                      alt=""
                    />
                    <p>{movieObj.title}</p>
                  </td>
                  <td>{movieObj.vote_average}</td>
                  <td>{movieObj.popularity}</td>
                  <td>{genreid[movieObj.genre_ids[0]]}</td>
                  <td>
                    <RiDeleteBin6Line
                      className="text-red-600 cursor-pointer"
                      onClick={() => handleRomveWatchList(movieObj)}
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Favourites;
