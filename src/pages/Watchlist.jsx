import { useState } from "react";
import { useSelector } from "react-redux";
import { useGetCoinsQuery } from "../services/cryptoApi";
import WatchlistStats from "../components/WatchlistStats";
import CryptoTable from "../components/Cryptotable";
import SearchBar from "../components/SearchBar";
import { useDispatch } from "react-redux";
import { clearWatchlist } from "../features/watchlistSlice";
import { BsCollectionFill } from "react-icons/bs";

export default function Watchlist() {
  const watchlist = useSelector(
    (state) => state.watchlist.coins
  );
  const dispatch = useDispatch();

  const { data, isLoading } = useGetCoinsQuery();
  const [search, setSearch] = useState("");

  const favoriteCoins =
  data?.filter(
    (coin) =>
      watchlist.includes(coin.id) &&
      coin.name.toLowerCase().includes(search.toLowerCase())
  ) ?? [];

  if (isLoading) {
    return (
      <h1 className="p-8 text-white">
        Loading...
      </h1>
    );
  }

  const totalMarketCap = favoriteCoins.reduce(
  (sum, coin) => sum + coin.market_cap,
  0
);

  return (
<div
className="
min-h-screen
bg-white
dark:bg-slate-900
p-6
text-black
dark:text-white
"
>

{/* WATCHLIST HEADER */}

<div
className="
mb-10
rounded-3xl
bg-gradient-to-r
from-cyan-500
via-blue-600
to-indigo-700
p-8
text-white
shadow-2xl
shadow-blue-500/30
"
>

<div
className="
flex
flex-col
gap-8

md:flex-row
md:items-center
md:justify-between
"
>

{/* LEFT SIDE */}

<div>

<h3
className="
text-6xl

animate-bounce

text-yellow-400

drop-shadow-[0_0_40px_rgba(255,215,0,1)]
"
>
⭐
</h3>

<h1
className="
text-4xl
font-bold
"
>
WATCHLIST
</h1>

<p
className="
mt-3
text-lg
text-cyan-100
"
>
Your Favorite Coins
</p>

<p
className="
mt-1
text-cyan-200
"
>
Track your saved crypto assets
</p>

</div>


{/* RIGHT SIDE */}

<div className="w-full md:w-[380px]">

<SearchBar
search={search}
setSearch={setSearch}
/>


<div className="mt-4 flex justify-end">

<div
className="
inline-flex
items-center
gap-2

rounded-full
bg-white/20

px-5
py-2

backdrop-blur-md
"
>

<div
className="
h-3
w-3

rounded-full
bg-green-400
animate-pulse
"
/>

<p className="font-semibold">
LIVE
</p>

</div>

</div>

</div>

</div>

</div>


{/* STATS CARDS */}

<WatchlistStats
totalCoins={favoriteCoins.length}
totalMarketCap={totalMarketCap}
/>


{/* CLEAR BUTTON */}

<div className="my-8 flex justify-end">

<button
onClick={() => dispatch(clearWatchlist())}
className="
rounded-xl
bg-red-600

px-6
py-3

font-semibold
text-white

transition-all
duration-300

hover:scale-105
hover:bg-red-700

shadow-lg
shadow-red-500/30
cursor-pointer
"
>
🗑 Clear Watchlist
</button>

</div>


{/* TABLE */}

<CryptoTable
coins={favoriteCoins}
livePrices={{}}
showTitle={false}
/>

</div>
);
}