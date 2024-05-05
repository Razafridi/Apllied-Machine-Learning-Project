import React from "react";
import { Link } from "react-router-dom";

const MovieDetails = ({ details }) => {
  return (
    <Link to={`/movie/${details.Series_Title}`}>
      <div className="shadow-md font-poppins rounded shadow-blue-100 border border-blue-100 m-2 inline-block w-[200px]">
        <img
          className="w-[200px] h-[150px] object-cover"
          src={details.Poster_Link}
        />
        <div className="p-1">
          <p className="font-semibold text-md">{details.Series_Title}</p>
          <span className="block">IMDB Rating {details.IMDB_Rating}</span>
          <span className="text-gray-500 text-sm">{details.Genre}</span>
        </div>
      </div>
    </Link>
  );
};

export default MovieDetails;
