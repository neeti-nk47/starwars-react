import React from "react";

import classes from "./Movie.module.css";

const Movie = (props) => {
  const deleteHandler = () => {
    fetch(
      `https://starwars-react-19e97-default-rtdb.asia-southeast1.firebasedatabase.app/movies/${props.id}.json`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.text()) // or res.json()
      .then((res) => console.log(res));
  };

  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
      <button onClick={deleteHandler}>Delete</button>
    </li>
  );
};

export default Movie;
