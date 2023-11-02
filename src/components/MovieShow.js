import React from 'react';
import { useParams } from 'react-router-dom';

function MovieShow({ movies }) {
  const { movieId } = useParams();

  const movie = movies.find((movie) => movie.id === parseInt(movieId));

  return (
    <div>
      {/* Display movie details */}
      <h3>{movie ? movie.title : 'Movie not found'}</h3>
    </div>
  );
}

export default MovieShow;
