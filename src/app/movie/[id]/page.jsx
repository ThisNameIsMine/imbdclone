import React from "react";
import Image from "next/image";
async function getMovie(id) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`
  );

  return await res.json();
}

export default async function MoviePage({ params }) {
  const { id } = params;
  const movie = await getMovie(id);

  return (
    <div className="w-full">
      <div className="p-4 md:mt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backprop_path || movie.poster_path
          }`}
          width={500}
          height={300}
          className="rounded-lg"
          alt="image is not available"
          style={{ maxWidth: "100%", height: "auto" }}
          placeholder="blur"
          blurDataURL="@/public/spiner.svg"
        />
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">
            {movie.title || movie.name}
          </h2>
          <p className="text-lg mb-3">
            <span className="font-semibold mr-1">Overview: </span>
            {movie.overview}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Date Released:</span>
            {movie.release_date || movie.first_air_date}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Rating:</span>
            {movie.vote_average}
          </p>
        </div>
      </div>
    </div>
  );
}
