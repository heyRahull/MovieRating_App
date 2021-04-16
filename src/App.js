import React from "react";
import "./styles.css";
import { useState } from "react";

const movieDB = {
  comedy: [
    { name: "Death at a Funeral", rating: "⭐⭐⭐⭐⭐" },
    { name: "Holidate", rating: "⭐⭐⭐⭐" },
    { name: "Phir Hera Pheri", rating: "⭐⭐⭐⭐⭐" }
  ],

  horror: [
    {
      name: "The Conjuring(2013)",
      rating: "⭐⭐⭐⭐"
    },
    {
      name: "INSIDIOUS (2010)",
      rating: "⭐⭐⭐"
    }
  ],
  adventure: [
    {
      name: "JOURNEY TO THE MYSTERIOUS ISLAND",
      rating: "⭐⭐⭐⭐"
    },
    {
      name: "kING KONG",
      rating: "⭐⭐⭐⭐⭐"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("comedy");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>Movie Rating App</h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my Movies . Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(movieDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {movieDB[selectedGenre].map((movie) => (
            <li
              key={movie.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {movie.name} </div>
              <div style={{ fontSize: "smaller" }}> {movie.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
