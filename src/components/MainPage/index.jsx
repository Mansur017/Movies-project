import React from 'react';
import Header from './Header';
import Main from './Main';
import PopularMovies from './PopularMovies';
import Movies from './Movies';

function MainPage({ movies, favorites, setFavorites, setSelectedMovie }) {
  return (
    <div>
      <div className="bg-photo"></div>
      <Header/>
      <Main/>
      <PopularMovies setSelectedMovie={setSelectedMovie} movies={movies}/>
      <Movies setSelectedMovie={setSelectedMovie} movies={movies} favorites={favorites} setFavorites={setFavorites}/>
    </div>
  )
}

export default MainPage;
