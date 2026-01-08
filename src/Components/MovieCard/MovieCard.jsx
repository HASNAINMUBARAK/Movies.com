import React from "react";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
const MovieCard = (props) => {
  const classes = useStyles();
  const { data } = props;
  return (
    <div className={classes.contain}>
      <Link to={`/movie/${data.imdbID}`}>
        <img src={data.Poster} alt="images" className={classes.imge} />
      </Link>
      <h3 style={{ fontFamily: "cursive", margin: 0 }}>
        {data.Title.substring(0, 25)}
      </h3>

      <div className={classes.lower}>
        {/* <p>{data.Type.toUpperCase()}</p> */}
        <p>{data.Year}</p>
      </div>
    </div>
  );
};

export default MovieCard;
const useStyles = makeStyles((theme) => ({
  contain: {
    color: "white",
    background: "#012144",
    width: "300px",
    borderRadius: 10,
    margin: "20px 0px",
  },
  imge: {
    width: "90%",
    height: "350px",
    borderRadius: 10,
    margin: "15px 0px",
    transition: "0.4s",
    "&:hover": {
      transform: "scale(1.12)",
    },
  },
  lower: {
    display: "flex",
    justifyContent: "space-evenly",
  },
}));
