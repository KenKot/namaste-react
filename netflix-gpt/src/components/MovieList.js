import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="bg-black px-6">
      <h1 className="text-lg md:text-3-xl text-white font-bold py-2">
        {title}
      </h1>
      <div className="flex overflow-x-scroll ">
        <div className="flex ">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default MovieList;
