import React, { useEffect } from "react";
import MovieListing from "../../Components/MovieListing/MovieListing";
import MovieApi from "../../Common/Apis/MovieApi";
import { APIKey } from "../../Common/Apis/MovieApiKey";
import { useDispatch } from "react-redux";
import { addMovies } from "../../Features/Movies/MoviesSlice";

const Home = () => {
  const movieText = "Harry";
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await MovieApi.get(
        `?apikey=${APIKey}&s=${movieText}&type=movie`
      ).catch((error) => {
        console.log("error", error);
      });
      console.log(response, "response");
      dispatch(addMovies(response.data));
    };
    fetchMovies();
  }, []);
  return (
    <div style={{display:"flex"}}>
      <MovieListing />
    </div>
  );
};

export default Home;
