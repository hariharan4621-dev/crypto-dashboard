import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  coins: JSON.parse(localStorage.getItem("watchlist")) || [],
};

const watchlistSlice = createSlice({
  name: "watchlist",

  initialState,

  reducers: {
    toggleWatchlist: (state, action) => {
      const coinId = action.payload;

      if (state.coins.includes(coinId)) {
        state.coins = state.coins.filter(
          (id) => id !== coinId
        );
      } else {
        state.coins.push(coinId);
      }

      localStorage.setItem(
        "watchlist",
        JSON.stringify(state.coins)
      );
    },

    clearWatchlist: (state) => {
      state.coins = [];

      localStorage.setItem(
        "watchlist",
        JSON.stringify([])
      );
    },
  },
});

export const {
  toggleWatchlist,
  clearWatchlist,
} = watchlistSlice.actions;

export default watchlistSlice.reducer;