import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import { BG_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          className="h-screen object-cover"
          src={BG_URL}
          alt="background banner"
        />
      </div>

      <div className="pt-[30%] md:pt-0">
        <GptSearchBar />

        <GptMovieSuggestions />
      </div>
    </>
  );
};
export default GptSearch;
