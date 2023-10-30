import MainPhoto from "../../../assets/main-photo.svg"
import "./style.scss";

const Main = ({ selectedMovie }) => {
  
  return (
    <div className='main'>
      {selectedMovie && (
        <div>
          <div className="main-photo">
              <img src={MainPhoto} alt="Main-photo" />
          </div>
          <div className="movies_name-block">
              <p>Movie</p>
              <h2>{selectedMovie.title}</h2>
          </div>
        </div>
      )}
    </div>
  );
}

export default Main;
