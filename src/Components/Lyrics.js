import React from "react";
import "./Lyrics.css";
export default function Lyrics() {
  const form = document.getElementById("form");
  const search = document.getElementById("search");
  const result = document.getElementById("result");

  const apiURL = "https://api.lyrics.ovh";

  async function searchSongs(term) {
    const res = await fetch(`${apiURL}/suggest/${term}`);
    const data = await res.json();
    showData(data);
  }

  async function getLyrics(artist, songTitle) {
    const res = await fetch(`${apiURL}/v1/${artist}/${songTitle}`);
    const data = await res.json();
    console.log(artist, songTitle);
    if (data.error) {
      showAlert(data.error);
    } else {
      const lyrics = data.lyrics.replace(/(\r\n|\r|\n)/g, "<br>");

      result.innerHTML = `
        <h2><strong>${artist}</strong> - ${songTitle}</h2>
        <span>${lyrics}</span>
    `;
    }
  }

  function showData(data) {
    result.innerHTML = `
    <ul className="songs">
      ${data.data.map(song => `<li>
      <span><strong>${song.artist.name}</strong> - ${song.title}</span>
      <button className="btn" data-artist="${song.artist.name}" data-songtitle="${song.title}">Get Lyrics</button>
    </li>`
        )
        .join("")}
    </ul>
    `;
  }

  function showAlert(message) {
    const notif = document.createElement("div");
    notif.classNameList.add("toast");
    notif.innerText = message;
    document.body.appendChild(notif);
    setTimeout(() => notif.remove(), 3000);
  }

  // Event Listeners
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const searchTerm = search.value.trim();
      if (!searchTerm) showAlert("Please type in a search term");
      else searchSongs(searchTerm);
    });
  }
  if (result) {
    result.addEventListener("click", (e) => {
      const clickedElement = e.target;
      if (clickedElement.tagName === "BUTTON") {
        const artist = clickedElement.getAttribute("data-artist");
        const songTitle = clickedElement.getAttribute("data-songtitle");
        getLyrics(artist, songTitle);
      }
    });
  }

  // Init
  searchSongs("one");
  return (
    <>
      <header>
        <h1>Lyrics Search</h1>
        <form id="form">
          <input
            type="text"
            id="search"
            placeholder="Enter artist or song name..."
          />
          <button>Search</button>
        </form>
      </header>
      <div id="result" className="container">
        <p>Results will be displayed here</p>
      </div>
    </>
  );
}
