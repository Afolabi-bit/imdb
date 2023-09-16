import React, { useState, useEffect, createContext, useContext } from "react";
import Card from "./card";
import { Loader } from "./utils";
import { passData } from "./header";

export const MoviesObj = createContext();

const Featured = () => {
  const url =
    "https://api.themoviedb.org/3/movie/top_rated?api_key=f0757f1146ccbe0c1de0425e245dd645&page=1";

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setLoading("");
          setMovies(data.results);
        })
        .catch((err) => {
          setLoading("");
          console.log(err);
        });
    }, 800);
  }, []);

  return (
    <MoviesObj.Provider value={{ loading, movies }}>
      <section className="feature-wrapper container">
        <Title />
        <MovieList />
      </section>
    </MoviesObj.Provider>
  );
};

const Title = () => {
  return (
    <section className="featured " id="scroll">
      <div className="head">
        <h1>Featured Movie</h1>
        <button>
          <span>See more</span>
          <span className="chevron-right"></span>
        </button>
      </div>
    </section>
  );
};

const MovieList = () => {
  const { loading, movies } = useContext(MoviesObj);
  const firstTen = movies.slice(0, 10);
  if (loading) {
    return (
      <section className="spinner-wrapper">
        <Loader />
      </section>
    );
  }
  return (
    <section className="movie-list">
      {firstTen.map((movie) => {
        return <Card key={movie.id} movie={movie} />;
      })}
    </section>
  );
};

export default Featured;
