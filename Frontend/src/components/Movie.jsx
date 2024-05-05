import React from "react";

const Movie = ({ details }) => {
  return (
    <div className="flex p-6 font-poppins">
      <div className="flex-1 flex flex-col">
        <span className="text-3xl ">
          <b className="font-extrabold ">Movie</b> : {details.Series_Title}{" "}
          {details.Released_Year}
        </span>
        <span className="text-lg text-gray-400 font-light">
          Genre {details.Genre}
        </span>
        <div className="flex flex-col">
          <span className="text-lg font-bold">Director {details.Director}</span>
          <span className="text-lg font-semibold ">
            Actors
            <div className="px-4 font-normal">
              {details.Star1}
              <br />
              {details.Star2}
              <br /> {details.Star3}
              <br /> {details.Star4}
            </div>
          </span>
        </div>

        <p className="font-thin mx-2 p-2 bg-slate-800 bg-opacity-25 rounded-md">
          {details.Overview}
        </p>
      </div>
      <div className="">
        <img className="w-[300px] h-[300px]" src={details.Poster_Link} />
      </div>
    </div>
  );
};

export default Movie;
