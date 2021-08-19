
import { MdAddLocation, MdDateRange} from "react-icons/md";

import LogisticsItem from './LogisticsItem';
import classes from './movie-logistics.module.css';

function MovieLogistics(props) {
    const { title, poster, releaseDate, genres, id, imdbRating, storyline, actors } = props;


  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <img src={`/${poster}`} alt={imageAlt} />
      </div>
      <ul className={classes.list}>
        <LogisticsItem>
          <MdDateRange />
          <time>{releaseDate}</time>
        </LogisticsItem>
        <MdAddLocation />
        <LogisticsItem>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
}

export default MovieLogistics;
