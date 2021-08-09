import Link from "next/link";

import classes from './movie-item.module.css';
import Button from '../ui/button'

import { iconName } from "react-icons/fa"
import { MdLink,MdShare, MdBookmarkBorder, MdArrowForward, MdThumbUp, MdComment, MdPlayCircleOutline } from "react-icons/md";


function MovieItem(props) {
  const { title, poster, releaseDate, genres, id, imdbRating, storyline, actors } = props;

  const humanReadableDate = new Date(releaseDate).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: 'long'
  });

  const exploreLink = `/movies/${id}`

  return (

      <div className={classes.container}>
        <div className={classes.movie}>
            <div className={classes.movie_image}>
                <img className={classes.image} src={"/" + poster} alt="" />
                <span><MdArrowForward /></span>
            </div>
        </div>
        <div className={classes.movie_info}>
                <p className={classes.title}>{title}</p>
                <p className={classes.genres}>{genres} </p>
                <div className={classes.movie_text}>
                    <p>{releaseDate}</p>
                    <div className={classes.likes}>
                        <span className={classes.rating}>{imdbRating}</span>
                        <span><MdThumbUp /></span>
                        <span><MdComment /></span>
                    </div>
                </div>
                <div className={classes.summary}>
                    <p className={classes.text}>
                        {storyline}
                    </p>
                    <p className={classes.cast}>{actors}</p>
                </div>
                <div className={classes.actions}>
                    <button><MdPlayCircleOutline /> Watch Trailer</button>
                      <div>
                          <a className={classes.actions_more}> <MdBookmarkBorder /></a>
                          <a className={classes.actions_more}><MdShare /></a>
                          <a className={classes.actions_more}><MdLink /></a>
                      </div>
                </div>
            </div>
      </div>


    //   <li className={classes.item}>
    //       <img src={"/" + poster} alt="" />
    //       <div className={classes.content}>
    //           <div className={classes.summary}>
    //               <h2>{title}</h2>
    //           </div>
    //           <div className={classes.date}>
    //           <MdDateRange />
    //               <time>Released Date: {releaseDate}</time>
    //           </div>
    //           <div className={classes.address}>
    //               <p>Storyline: {storyline}</p>
    //           </div>
    //           <div><MdRateReview /> {imdbRating}</div>
    //       </div>
    //       <div className={classes.action}>
    //           <Button link={exploreLink}>
    //             <span>More...</span>
    //             <span className={classes.icon}>
    //                 <MdArrowForward />
    //             </span>
    //           </Button>
    //       </div>
    //   </li>

  );
}

export default MovieItem;
