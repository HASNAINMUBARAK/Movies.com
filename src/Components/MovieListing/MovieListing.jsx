import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../Features/Movies/MoviesSlice";
import MovieCard from "../MovieCard/MovieCard";
import { makeStyles } from "@material-ui/core";
const MovieListing = () => {
  const classes = useStyles();
  const movies = useSelector(getAllMovies);
  console.log(movies, "movie");

  return (
    <div className={classes.outer}>
      <h2 style={{ fontFamily: "cursive" }}>Movie List</h2>
      <div className={classes.inner}>
        {movies.Search ? (
          movies.Search.map((movie, index) => {
            return (
              <>
                <MovieCard key={index} data={movie} />
              </>
            );
          })
        ) : (
          <div className="movies-error">
            <h3>{movies.Error}</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieListing;
const useStyles = makeStyles((theme) => ({
  outer: {
    color: "white",
    background: "#063971",
  },
  inner: {
    background: "#063971",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
}));
