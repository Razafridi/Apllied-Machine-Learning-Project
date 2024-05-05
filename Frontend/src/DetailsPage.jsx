import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
import Movie from "./components/Movie";
import Nav from "./components/Nav";
import { FadeLoader, ScaleLoader } from "react-spinners";

const DetailsPage = () => {
  const { id } = useParams();
  const ref = useRef(null);

  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const result = await axios.post("http://127.0.0.1:5000/get-recomm", {
          name: id,
        });
        const [m, ...mv] = result.data.movies;
        console.log(mv, m);
        setMovies(mv);
        setMovie(m);
        // console.log(result.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies();
  }, [id]);

  useEffect(() => {
    ref.current.scrollTop = 0;
  }, [id]);
  return (
    <div className="w-full h-auto overflow-scroll">
      <Nav />
      {/* Details */}
      <div>
        {movie === null ? (
          <div className="p-10 flex justify-center">
            <FadeLoader color="rgba(0,100,255,0.3)" />
          </div>
        ) : (
          <Movie details={movie} />
        )}
      </div>

      {/* recomm movies */}

      <div className="bg-slate-300 p-2 my-4 overflow-auto" ref={ref}>
        {" "}
        Recommendations
      </div>

      <div className="flex flex-wrap justify-center">
        {movies.length === 0 ? (
          <div className="p-10 flex justify-center">
            <FadeLoader color="rgba(0,100,255,0.3)" />
          </div>
        ) : (
          movies.map((item, index) => (
            <MovieDetails key={index} details={item} />
          ))
        )}
      </div>
    </div>
  );
};

export default DetailsPage;
