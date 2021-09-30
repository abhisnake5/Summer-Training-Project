import React, { useRef, useState } from "react";
import "./Movies.css";
export default function Movies() {
  const KEY = "fd6ed458ce7205ba6006e97656c87b0f";
  const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${KEY}&page=1`;
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
  const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=`;
  const [searchVal, setSearchVal] = useState();
  const main = useRef(null);
  const form = useRef(null);
  const search = useRef(null);

  const getclassNameByRate = (vote) => {
    if (vote >= 7.5) return "green";
    else if (vote >= 7) return "orange";
    else return "red";
  };

  const showMovies = (movies) => {
    if (main.current) {
      main.current.innerHTML = "";
      movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview } = movie;
        const movieElement = document.createElement("div");
        movieElement.classList.add("movie");
        movieElement.innerHTML = `
      <img
        src="${IMG_PATH + poster_path}"
        alt="${title}"
      />
      <div className="movie-info">
        <h3>${title}</h3>
        <span className="${getclassNameByRate(
          vote_average
        )}">${vote_average}</span>
      </div>
      <div className="overview">
        <h3>Overview</h3>
        ${overview}
      </div>
    `;
        main.current.appendChild(movieElement);
      });
    }
  };

  const getMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    showMovies(data.results);
  };

  getMovies(API_URL);
  if (form.current) {
    form.current.addEventListener("submit", (e) => {
      e.preventDefault();
      const searchTerm = search.current.value;
      if (searchTerm && searchTerm !== "") {
        getMovies(SEARCH_API + searchTerm);
        search.current.value = "";
      } else window.history.go(0);
    });
  }

  return (
    <>
      <header>
        <h1>So, what will you watch today?</h1>
        <form id="form" ref={form}>
          <input
            ref={search}
            type="text"
            autocomplete="off"
            placeholder="Search..."
            id="search"
            onChange={(e) => {
              setSearchVal(e.target.value);
            }}
            className="search"
          />
        </form>
      </header>
      <main id="main" ref={main}></main>
    </>
  );
}
