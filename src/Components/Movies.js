import React from "react";
import "./Movies.css";
export default function Movies() {
    const KEY = "fd6ed458ce7205ba6006e97656c87b0f";
    const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${KEY}&page=1`;
    const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
    const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=`;
  
    const main = document.getElementById("main");
    const form = document.getElementById("form");
    const search = document.getElementById("search");
  
    const getclassNameByRate = (vote) => {
      if (vote >= 7.5) return "green";
      else if (vote >= 7) return "orange";
      else return "red";
    };
  
    const showMovies = movies => {
      main.innerHTML = "";
      movies.forEach(movie => {
        const { 
            title, 
          poster_path, 
          vote_average, 
          overview } = movie;
        const movieElement = document.createElement("div");
        movieElement.classNameList.add("movie");
        movieElement.innerHTML = `
      <img
        src="${IMG_PATH + poster_path}"
        alt="${title}"
      />
      <div className="movie-info">
        <h3>${title}</h3>
        <span className="${getclassNameByRate(vote_average)}">${vote_average}</span>
      </div>
      <div className="overview">
        <h3>Overview</h3>
        ${overview}
      </div>
    `;
        main.appendChild(movieElement);
      });
    };
  
    const getMovies = async url => {
      const res = await fetch(url);
      const data = await res.json();
      showMovies(data.results);
    };
  
    getMovies(API_URL);
  if(form)
    {form.addEventListener("submit", (e) => {
      e.preventDefault();
      const searchTerm = search.value;
      if (searchTerm && searchTerm !== "") {
        getMovies(SEARCH_API + searchTerm);
        search.value = "";
      } else window.history.go(0);
    });}

  return (
    <>
      <header>
        <h1>So, what will you watch today?</h1>
        <form id="form">
          <input
            type="text"
autocomplete="off"
            placeholder="Search..."
            id="search"
            className="search"
          />
        </form>
      </header>
      <main id="main"></main>
    </>
  );
  
}
