import { useRouter } from 'next/router';
import { Fragment } from 'react';

import { getMovieById } from '../../dummy-movies';
import MovieSummary from '../../components/movie-details/MovieSummary';
import MovieLogistics from '../../components/movie-details/MovieLogistics'
import MovieContent from '../../components/movie-details/MovieContent'

function MovieDetailPage() {

  const router = useRouter();

  const movieId = router.query.movieId;
  const event = getMovieById(movieId);

  if (!event) {
    return <p>No Movie Found!</p>
  }

  return (
   <Fragment>
     <MovieSummary title={event.title} />
     <MovieLogistics releaseDate={event.releaseDate} poster={event.poster} imageAlt={event.title} />
     <MovieContent>
        <p>{event.storyline}</p>
     </MovieContent>
   </Fragment>
  );
}

export default MovieDetailPage;