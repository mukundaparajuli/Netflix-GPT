import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gptSearchSlice",
  initialState: {
    toggleGptSearch: false,
  },
  reducers: {
    toggleGptSearch: (state) => {
      state.toggleGptSearch = !state.toggleGptSearch;
    },
  },
});
export default gptSlice.reducer;
export const { toggleGptSearch } = gptSlice.actions;
