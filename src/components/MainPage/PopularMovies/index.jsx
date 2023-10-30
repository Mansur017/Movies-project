import { useState } from "react";
import { Link } from "react-router-dom";
import IconNext from "../../../assets/IconNext.svg";
import "./style.scss";

function PopularMovies({ movies, setSelectedMovie }) {
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
    "Seven Samurai",
    "Modern Times",
    "Cinema Paradiso",
    "City Lights",
    "American Beauty",
    "The Lord of the Rings: The Return of the King",
    "Eternal Sunshine of the Spotless Mind",
    "Nuovo Cinema Paradiso",
    "Star Wars: Episode VI - Return of the Jedi",
    "La vita è bella",
    "Shichinin no samurai",
  ];

  const filteredMovies = movies.filter((item) => !excludedMovies.includes(item.title));

  const [x, setX] = useState(0);
  const [y, setY] = useState(6);

  const nextMovies = () => {
    if (y >= filteredMovies.length) {
      setX(0);
      setY(6);
    } else {
      setX(x + 6);
      setY(y + 6);
    }
  };

  return (
    <div className="popular-movies-block">
      <h2>Popular Movies</h2>
      <div className="popular-movies-list">
        {filteredMovies.slice(x, y).map((item, index) => {
          return (
            <div key={index} onClick={() => setSelectedMovie(item)}>
              <Link to={"/details-page"}>
                <img src={item.images[2][1]} alt="Movie" />
              </Link>
            </div>
          );
        })}
      </div>
      <img src={IconNext} alt="" className="icon-next" onClick={nextMovies} />
    </div>
  );
}

export default PopularMovies;
