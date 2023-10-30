import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "../MainPage";
import Favorites from "../Favorites";
import DetailsPage from "../DetailsPage";

import "./reset.css";
import "./style.scss";

function App() {

  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([])
  const [loader, setLoader] = useState(true);
  const [selectedMovie, setSelectedMovie] = useState(null);


  useEffect(() => {
    const url = 'https://imdb-top-100-movies1.p.rapidapi.com/';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '51d6925eb3mshfd810f47be63fa3p15c0b9jsncb559ead7882',
        'X-RapidAPI-Host': 'imdb-top-100-movies1.p.rapidapi.com'
      }
    };
    
    fetch(url, options)
      .then(response => {
        if (!response.ok) {
          console.log(response.json())
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(result => {
        setMovies(result);
        setLoader(false);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <Router>
      <div className="App">
        {loader ? (
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <div className="loader"></div>
          </div>
        ) : (
          <div>
            <Routes>
              <Route exact path="/" element={<MainPage movies={movies} setSelectedMovie={setSelectedMovie}  favorites={favorites} setFavorites={setFavorites}  />} ></Route>
              <Route exact path="/favorites" element={<Favorites movies={movies} favorites={favorites} setFavorites={setFavorites} />} />
              <Route exact path="/details-page" element={<DetailsPage movies={movies} selectedMovie={selectedMovie} />} />
            </Routes>
          </div>
        )}
      </div>
    </Router> 
  );
}

export default App;















const url = 'https://imdb-top-100-movies1.p.rapidapi.com/';
const options = {
	method: 'GET',
	headers: {
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}