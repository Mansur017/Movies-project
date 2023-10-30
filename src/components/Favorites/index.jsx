import React from 'react';
import Vector from "../../assets/Vector.svg";
import "./style.scss";

function Favorites({ favorites, setFavorites }) {



  
  const removeFromFavorites = (index) => {
    const updatedFavorites = [...favorites];
    updatedFavorites.splice(index, 1);
    setFavorites(updatedFavorites);
  };

  return (
    <div className="favorites">
      <div className="movies-block">
        <h2>Favorites</h2>
        <div className="movies-list">
          {favorites.map((item, index) => {
            return (
              <div key={index}>
                <img src={item.images[2][1]} alt="Shang Chi" />
                <p>{item.title}</p>
                <button className="btn-delete" onClick={() => removeFromFavorites(index)}>
                  Remove
                </button>
                <div className="rating">
                  <img src={Vector} alt="star" />
                  <span>{item.rating}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Favorites;
