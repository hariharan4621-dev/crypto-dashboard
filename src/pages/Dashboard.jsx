import StatsCards from "../components/StatsCards";
import TopMovers from "../components/TopMovers";
import { useEffect, useState } from "react";
import { useGetCoinsQuery } from "../services/cryptoApi";
import {
  connectWebSocket,
  disconnectWebSocket,
} from "../services/websocket";

import CryptoTable from "../components/Cryptotable"; 
import SearchBar from "../components/SearchBar";

export default function Dashboard() {
  const { data, isLoading, error } = useGetCoinsQuery();

  const [livePrices, setLivePrices] = useState({});
  const [search, setSearch] = useState("");

  useEffect(() => {
    connectWebSocket((message) => {
      const symbol = message.data.s;
      const price = Number(message.data.p);

      setLivePrices((prev) => ({
        ...prev,
        [symbol]: price,
      }));
    });

    return () => disconnectWebSocket();
  }, []);

  const filteredCoins =
  data?.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  ) ?? [];
  
const totalCoins = filteredCoins.length;

const marketCap = filteredCoins.reduce(
  (sum, coin) => sum + coin.market_cap,
  0
);

const totalVolume = filteredCoins.reduce(
  (sum, coin) => sum + coin.total_volume,
  0
);

const isConnected = true;


  if (isLoading) {
    return <h1 className="text-white">Loading...</h1>;
  }

  if (error) {
    return <h1 className="text-black-500 text-allign-center">API Error</h1>;
  }

 return (
  <div
      className="
      min-h-screen
      bg-gradient-to-b
      from-slate-100
      to-slate-200
      dark:from-slate-950
      dark:to-slate-900
      p-6
      text-black
      dark:text-white"
      >

    {/* Header */}
    <div className="mb-10 flex flex-col justify-between gap-8 rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700 p-8 text-white shadow-2xl md:flex-row md:items-center">

  <div>
    <p className="mb-2 text-lg font-medium text-cyan-100">
      👋 Welcome Back
    </p>

    <h1 className="text-5xl font-extrabold">
      Crypto Market
    </h1>

    <p className="mt-3 max-w-xl text-cyan-100">
      Track live cryptocurrency prices, monitor your
      watchlist, discover top gainers & losers,
      and stay updated with the market.
    </p>
  </div>

  <div className="w-full md:w-[380px]">
    <SearchBar
      search={search}
      setSearch={setSearch}
    />
  </div>

</div>

    <StatsCards
  totalCoins={totalCoins}
  marketCap={marketCap}
  totalVolume={totalVolume}
  isConnected={isConnected}
/>

<TopMovers coins={filteredCoins}/>

    {/* Crypto Table */}
    <CryptoTable
      coins={filteredCoins}
      livePrices={livePrices}
    />

  </div>
)};