import MovieItem from './MovieItem';
import classes from './movie-list.module.css'

function MovieList(props) {

    const { items } = props;

    return (
      <ul className={classes.list}>
        {items.map(event => (
          <MovieItem
            key={event.id}
            id={event.id}
            title={event.title}
            poster={event.poster}
            year={event.year}
            genres={event.genres}
            imdbRating={event.imdbRating}
            storyline={event.storyline}
            releaseDate={event.releaseDate}
            actors={event.actors}
          />
        ))}
      </ul>
    );
}

export default MovieList;