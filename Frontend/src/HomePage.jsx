import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";
import axios from "axios";
import MovieDetails from "./components/MovieDetails";
import { Link } from "react-router-dom";
import { FadeLoader } from "react-spinners";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const result = await axios.get("http://127.0.0.1:5000/get-movies");
        setMovies(result.data);
        console.log(result.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies();
  }, []);
  return (
    <div>
      <Nav />
      {/* Mivies */}
      <div className="p-4 flex justify-center flex-wrap">
        {movies.length === 0 ? (
          <div className="p-10 flex justify-center">
            <FadeLoader color="rgba(0,100,255,0.3)" />
          </div>
        ) : (
          movies.map((movie, index) => {
            return <MovieDetails details={movie} key={index} />;
          })
        )}
      </div>
    </div>
  );
};

export default HomePage;
