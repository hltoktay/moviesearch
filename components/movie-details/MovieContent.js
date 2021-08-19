import classes from './movie-content.module.css';

function MovieContent(props) {

  const { text } = props;

  return (
    <section className={classes.content}>
      {props.children}
    </section>
  );
}

export default MovieContent;
