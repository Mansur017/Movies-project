import Vector from "../../../assets/Vector.svg";
import "./style.scss"

function DetailsMovie({selectedMovie}) {

    if (!selectedMovie) {
        return null; 
      }


  return (
    <div className="about-movie-block">
        <div className="image-block">
            <img src={selectedMovie.images[2][1]} alt="" />
        </div>
        <div className="details-block">
            <h2>Description</h2>
            <h3>{selectedMovie.description}
            </h3>
            <div className="rating">
                <img src={Vector} alt="star" />
                <span>{selectedMovie.rating}</span>
            </div>
            <span>Type</span>
            <p>Movie</p>
            <span>Release Year:</span>
            <p>{selectedMovie.year}</p>
            <span>Actors</span>
            <p>{selectedMovie.Stars.join(", ")}</p>
            <span>Genres</span>
            <p>{selectedMovie.genre.join(", ")}</p>
        </div>
    </div>
  )
}

export default DetailsMovie

























