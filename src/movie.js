import { Link, useParams } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import { Logo, LogOut } from "./utils";
import HomeImg from "./asset/icons/Home.png";
import MovieImg from "./asset/icons/Movie Projector.png";
import Tv from "./asset/icons/TV Show.png";
import Calendar from "./asset/icons/Calendar.png";
import PlayIcon from "./asset/icons/Play_poster.png";
import Arrow from "./asset/icons/Expand Arrow.png";
import Star from "./asset/icons/Star.png";
import List from "./asset/icons/List.png";
import TwoTickets from "./asset/icons/Two Tickets.png";
import Img from "./asset/icons/Rectangle 37.png";

const Movie = () => {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  const url = "https://api.themoviedb.org/3/movie/";
  const apiKey = "?api_key=f0757f1146ccbe0c1de0425e245dd645&page=1";

  useEffect(() => {
    fetch(`${url}${id}${apiKey}`)
      .then((res) => res.json())
      .then((data) => {
        setLoading("");
        setMovie(data);
      })
      .catch((err) => {
        setLoading("");
      });
  }, []);

  return (
    <main className="movie-wrapper">
      <Sidebar />
      <MainContent movie={movie} />
    </main>
  );
};

// Sidebar and inner components
const Sidebar = () => {
  return (
    <aside className="sidebar">
      <Logo />
      <Links />
      <Play />
      <LogOut />
    </aside>
  );
};

const Links = () => {
  return (
    <div className="btn-wrapper">
      <Link to={"/"}>
        <img src={HomeImg} alt="icon" />
        <span>Home</span>
        <span className="red"></span>
      </Link>
      <a className="active">
        <img src={MovieImg} alt="icon" />
        <span>Movies</span>
        <span className="red"></span>
      </a>
      <a>
        <img src={Tv} alt="icon" />
        <span>TV Series</span>
        <span className="red"></span>
      </a>
      <a>
        <img src={Calendar} alt="icon" />
        <span>Upcoming</span>
        <span className="red"></span>
      </a>
    </div>
  );
};

const Play = () => {
  return (
    <div className="text">
      <h4>Play movie quizes and earn free tickets</h4>
      <p>50k people are playing now</p>
      <button>Start playing</button>
    </div>
  );
};

const MainContent = ({ movie }) => {
  return (
    <section className="pre-main-content">
      <Poster {...movie} />
      <Details {...movie} />
    </section>
  );
};

const Poster = ({ poster_path }) => {
  return (
    <section className="main-content">
      <div className="poster-wrapper">
        <img
          className="poster"
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt="poster"
        />
        <div className="play-wrapper">
          <img src={PlayIcon} alt="" className="ellipse" />
        </div>
      </div>
    </section>
  );
};

const Details = ({
  title,
  release_date,
  runtime,
  overview,
  vote_average,
  genres,
}) => {
  let min;
  runtime % 60 < 10 ? (min = `0${runtime % 60}`) : (min = runtime % 60);

  return (
    <section className="details">
      <div className="left">
        <div className="title-block">
          <p className="title" data-testid="movie-title">
            {title}
          </p>
          <span className="dot"></span>
          <p className="utc-time" data-testid="movie-release-date">
            {new Date(release_date).getTime()}
          </p>
          <span className="dot"></span>
          <p>PG-13</p>
          <span className="dot"></span>
          <p className="duration" data-testid="movie-runtime">{`${Math.trunc(
            runtime / 60
          )}h ${min}m`}</p>
        </div>
        <div className="overview" data-testid="movie-overview">
          {overview}
        </div>
        <div className="execs">
          <p>
            Director: <span>Joseph Kosinski</span>
          </p>
          <p>
            Writers : <span>Jim Cash, Jack Epps Jr, Peter Craig</span>
          </p>
          <p>
            Stars: <span> Tom Cruise, Jennifer Connelly, Miles Teller </span>
          </p>
        </div>
        <div className="top-rated">
          <div>
            <p>Top rated movie #65</p>
            <p>Awards 9 nominations</p>
          </div>
          <button>
            <img src={Arrow} alt="icon" />
          </button>
        </div>
      </div>
      <div className="right">
        <div className="star">
          <p>
            <img src={Star} alt="#" />
            <span>
              {vote_average}
              <b> |350k</b>
            </span>
          </p>
        </div>
        <button className="showTime">
          <img src={TwoTickets} alt="icon" />
          <span>See Showtimes</span>
        </button>
        <button className="watchMore">
          <img src={List} alt="icon" />
          <span>More watch options</span>
        </button>
        <img className="lastImg" src={Img} alt="icon" />
      </div>
    </section>
  );
};

export default Movie;
