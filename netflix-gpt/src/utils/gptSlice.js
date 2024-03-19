import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptMovies: null,
    tmdbResults: null,
  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) => {
      const { gptMovies, tmdbResults } = action.payload;
      state.gptMovies = gptMovies;
      state.tmdbResults = tmdbResults;
    },
  },
});

export default gptSlice.reducer;
export const { addGptMovieResult, toggleGptSearchView } = gptSlice.actions;
