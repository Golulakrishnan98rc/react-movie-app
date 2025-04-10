import { useEffect, useState } from "react";
import Banner from "./components/Banner";
import Favourites from "./components/Favourites";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App({ movieObj }) {
  const [watchList, setWatchList] = useState([]);

  const handleAddToWatchList = (movieObj) => {
    let newWatchList = [...watchList, movieObj];
    localStorage.setItem("moviesApp", JSON.stringify(newWatchList));
    setWatchList(newWatchList);
    console.log(newWatchList);
  };

  const handleRomveWatchList = (movieObj) => {
    let filteredList = watchList.filter((movie) => {
      return movie.id != movieObj.id;
    });

    setWatchList(filteredList);
    localStorage.setItem("moviesApp", JSON.stringify(filteredList));
    console.log(filteredList);
  };

  useEffect(() => {
    let moviesFromLocalStorage = localStorage.getItem("moviesApp");
    if (!moviesFromLocalStorage) {
      return;
    }
    setWatchList(JSON.parse(moviesFromLocalStorage));
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies
                  watchList={watchList}
                  handleAddToWatchList={handleAddToWatchList}
                  handleRomveWatchList={handleRomveWatchList}
                  movieObj={movieObj}
                />
              </>
            }
          />
          <Route
            path="/favourites"
            element={
              <Favourites
                watchList={watchList}
                movieObj={movieObj}
                setWatchList={setWatchList}
                handleRomveWatchList={handleRomveWatchList}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
