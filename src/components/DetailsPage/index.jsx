import React, { useEffect, useState } from 'react';
import Header from './Header';
import Main from './Main';
import DetailsMovie from './DetailsMovie';
import AddComment from './AddComment';
import './style.scss';

function DetailsPage({ selectedMovie }) {
  const [storedMovie, setStoredMovie] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const storedMovie = JSON.parse(localStorage.getItem('selectedMovie'));
    if (storedMovie) {
      setStoredMovie(storedMovie);
    }
  }, []);

  useEffect(() => {
    if (selectedMovie) {
      localStorage.setItem('selectedMovie', JSON.stringify(selectedMovie));
      setStoredMovie(selectedMovie);
    }
  }, [selectedMovie]);

  return (
    <div className="details-page">
      <Header />
      <Main selectedMovie={storedMovie} />
      <DetailsMovie selectedMovie={storedMovie} />
      <AddComment />
    </div>
  );
}

export default DetailsPage;
