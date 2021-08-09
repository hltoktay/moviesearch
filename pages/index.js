import { getFeaturedMovie } from '../dummy-movies';
import MovieList from '../components/movies/MovieList';

function HomePage() {
    const featuredMovie = getFeaturedMovie()

  return (
    <div>
      <MovieList items={featuredMovie} />
    </div>
  );
}

export default HomePage;