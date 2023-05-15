import axios from "axios";
import React, { useEffect, useState } from "react";

const Moviecard = ({ movie }) => {
  const maDate = new Date(movie.release_date);
  let myImg = "";
  const ids = movie.id;

  if (movie.poster_path == null) {
    myImg = "logo192.png";
  } else {
    myImg = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
  }
  let [genre, setGenre] = useState([]);
  const fetchDetail = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/" +
          ids +
          "?api_key=9f44a50a5ee63c57193c6bee26e427bd"
      )
      .then((detailFilm) => {
        if (detailFilm) {
          setGenre(detailFilm.data.genres);
        } else {
          setGenre([]);
        }
      });
  };
  useEffect(fetchDetail, []);
  return (
    <div className="card">
      <div className="img-container">
        <img src={myImg} alt="drapeau" />
      </div>
      <div className="info-container">
        <h3>{movie.title}</h3>
        <span>{maDate.toLocaleDateString("fr")}</span>
        <span>{"Note : " + movie.vote_average.toFixed(2)}</span>
        <span>
          {" "}
          Genre :
          {genre.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </span>

        <span>Synopsis :</span>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};

export default Moviecard;
