import React, { useState } from "react";
import { Logo, Imdb, RottenTomatoes } from "./utils";
const searchUrl =
  'https://api.themoviedb.org/3/search/movie?api_key=f0757f1146ccbe0c1de0425e245dd645&query="';

const Header = () => {
  return (
    <section className="header container">
      <Nav />
      <Hero />
      <Pagination />
    </section>
  );
};

export function passData(data) {
  return data;
}

const Nav = () => {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(searchUrl + search)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        passData(data);
      })
      .catch((err) => {
        console.log(err);
      });
    setSearch("");
  };

  return (
    <nav>
      <Logo />
      <form onSubmit={(e) => handleSubmit(e)} className="search">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          name="search"
          autoComplete="off"
          value={search}
          id="search-movie"
          placeholder="What do you want to watch?"
        />
        <button type="submit" className="mag-glass"></button>
      </form>
      <div className="sign-in">
        <h2>Sign in</h2>
        <button></button>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <main className="hero">
      <h1>John Wick 3 : Parabellum</h1>
      <div className="rating">
        <p>
          <Imdb />
          <span>86.0 / 100</span>
        </p>
        <p>
          <RottenTomatoes />
          <span>97%</span>
        </p>
      </div>
      <p>
        John Wick is on the run after killing a member of the international
        assassins' guild, and with a $14 million price tag on his head, he is
        the target of hit men and women everywhere.
      </p>
      <button className="play_trailer">
        <span className="play_icon"></span>
        <span>Watch trailer</span>
      </button>
    </main>
  );
};

const Pagination = () => {
  return (
    <aside className="pagination">
      <div className="page">
        <p className="rectangle"></p>
        <p className="number">1</p>
      </div>
      <div className="page">
        <p className="rectangle"></p>
        <p className="number">2</p>
      </div>
      <div className="page active">
        <p className="rectangle "></p>
        <p className="number">3</p>
      </div>
      <div className="page">
        <p className="rectangle"></p>
        <p className="number">4</p>
      </div>
      <div className="page">
        <p className="rectangle"></p>
        <p className="number">5</p>
      </div>
    </aside>
  );
};

export default Header;
