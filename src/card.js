import { Imdb, RottenTomatoes } from "./utils";
import { Link } from "react-router-dom";
import Heart from "../src/asset/icons/heart.svg";

const Card = ({ movie }) => {
  return (
    <Link to={`/movies/${movie.id}`}>
      <article className="card" data-testid="movie-card">
        <Favourite />
        <img
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt=""
          data-testid="movie-poster"
        />
        <div className="bound">
          <span data-testid="movie-release-date">
            {new Date(movie.release_date).getTime()}
          </span>
          <h3 className="title" data-testid="movie-title">
            {movie.title}
          </h3>
          <div className="ratings">
            <p className="left">
              <Imdb />
              <span>{movie.vote_average}/10.0</span>
            </p>
            <p className="right">
              <RottenTomatoes />
              <span> 99%</span>
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
};

const Favourite = () => {
  return (
    <button className="fave">
      <img src={Heart} alt="" />
    </button>
  );
};

export default Card;
