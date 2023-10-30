import React, { useState } from "react";
import { Link } from "react-router-dom";
import Add from "../../../assets/add.png";
import Vector from "../../../assets/Vector.svg";
import BtnDown from "../../../assets/IconNext.svg";
import "./style.scss";

const Movies = ({ movies, favorites, setFavorites, setSelectedMovie }) => {
  const excludedMovies = [
    "Pulp Fiction",
    "It's a Wonderful Life",
    "Psycho",
    "Sunset Blvd.",
    "Your Name.",
    "Citizen Kane",
    "Witness for the Prosecution",
    "The Lives of Others",
    "Star Wars: Episode IV - A New Hope",
    "Life Is Beautiful",
    "Seven Samurai",
    "Modern Times",
    "Cinema Paradiso",
    "City Lights",
    "American Beauty",
    "The Lord of the Rings: The Return of the King",
    "Nuovo Cinema Paradiso",
    "La vita è bella",
    "Star Wars: Episode VI - Return of the Jedi"
  ];

  const filteredMovies = movies.filter((item) => !excludedMovies.includes(item.title));

  const [displayedMovies, setDisplayedMovies] = useState(12);

  const showMoreMovies = () => {
    setDisplayedMovies(displayedMovies + 12);
  };

  const addToFavorites = (movie) => {
    const isAlreadyAdded = favorites.find((fav) => fav.title === movie.title);
    if (!isAlreadyAdded) {
      const updatedFavorites = [...favorites, movie];
      setFavorites(updatedFavorites);
    }
  };

  const removeFromFavorites = (movie) => {
    const updatedFavorites = favorites.filter((fav) => fav.title !== movie.title);
    setFavorites(updatedFavorites);
  };

  return (
    <div className="movies-block">
      <h2>Movies</h2>
      <div className="movies-list">
        {filteredMovies.slice(0, displayedMovies).map((item, index) => {
          const isAlreadyAdded = favorites.find((fav) => fav.title === item.title);
          return (
            <div key={index} onClick={() => setSelectedMovie(item)}>
              <Link to={"/details-page"}>
                <img src={item.images[2][1]} alt="Shang Chi" />
              </Link>
              <Link to={"/details-page"}>
                <p>{item.title}</p>
              </Link>
              <button
                onClick={() => (isAlreadyAdded ? removeFromFavorites(item) : addToFavorites(item))}
                className={isAlreadyAdded ? "remove-btn" : ""}
              >
                {!isAlreadyAdded && <img src={Add} alt="" />}
                {isAlreadyAdded ? "Remove from favorites" : "Add to favorites"}
              </button>
              <div className="rating">
                <img src={Vector} alt="star" />
                <span>{item.rating}</span>
              </div>
            </div>
          );
        })}
      </div>
      {displayedMovies < filteredMovies.length && (
        <img className="btn-down" src={BtnDown} alt="" onClick={showMoreMovies} />
      )}
    </div>
  );
};

export default Movies;
