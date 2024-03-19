import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const gpt = useSelector((store) => store.gpt);
  const { gptMovies, tmdbResults } = gpt;
  //gptMovies = ['movie1', 'movie2']

  if (!gptMovies) return null;

  return (
    <div className="p-4 m-4 bg-black text-white">
      <div>
        {gptMovies.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={tmdbResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
