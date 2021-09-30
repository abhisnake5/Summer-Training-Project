import React from "react";
import "./About.css";
export default function About() {
  return (
    <>
      <div className="container p-1">
        <h1 className="my-3">About TextUtils</h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <strong>SUMMER TRAINING PROJECT</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <ul>
                  <li>Name: Abhishek Kumar Tiwari</li>
                  <li>Roll Number: 29-IT-19</li>
                  <li>Enrollment Number: 02920803119</li>
                  <li>Branch: Information Technology</li>
                  <li>Semester: 5th</li>
                  <li>College: Bhagwan Parshuram Institute of Technology</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <strong>Movies & TV Shows</strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                This is the first functionality of the application. It uses a
                Movie & TV Show Search Application Programming Interface (API)
                to fetch Movies & TV Shows’ details. The user can either Search
                for a particular Movie or TV Show or he can browse through the
                suggested Movies & TV Shows. The user can read the description &
                see the rating of the Movie or TV Show to find the perfect thing
                to watch. Find Movies & TV Shows to be entertained. There are
                often times when people desire to watch a new Movie or a TV Show
                and search for a long time only to end up not watching anything.
                This App helps them to instantly search for any thing they want
                to watch. They can judge the Movie based on its description and
                rating, so it is easier for them to navigate.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <strong>Lyrics</strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                This is the second functionality of the application. It uses a
                Lyrics Application Programming Interface (API) to fetch the
                lyrics of songs. The user can either Search for a particular
                song or he can browse through the suggested Songs. The User can
                then read the song of the lyrics he requested for. Find lyrics
                of a song. When someone doesn’t know the lyrics of a song, they
                can’t enjoy it. Language shouldn’t be a barrier for anyone when
                it comes to music. This App helps people to get the lyrics of
                any song they don’t know so they can enjoy it.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
