import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.coingecko.com/api/v3/",
  }),

  endpoints: (builder) => ({
  // Dashboard Coins
  getCoins: builder.query({
    query: () =>
      "coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false",
  }),

  // Single Coin Details
  getCoinDetails: builder.query({
    query: (id) => `coins/${id}`,
  }),
   
  // Coin History
  getCoinHistory: builder.query({
  query: (id) =>
    `coins/${id}/market_chart?vs_currency=usd&days=7`,
}),

}),
});

export const {useGetCoinsQuery,useGetCoinDetailsQuery,useGetCoinHistoryQuery} = cryptoApi;