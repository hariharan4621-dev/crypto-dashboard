import { useState } from "react";
import LivePrice from "./LivePrice";
import { FaRegStar, FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleWatchlist } from "../features/watchlistSlice";
import { toast } from "react-toastify";

export default function CryptoTable({ coins, livePrices, showTitle=true, }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [sortField, setSortField] = useState("market_cap_rank");
  const [sortOrder, setSortOrder] = useState("asc");

  const watchlist = useSelector(
    (state) => state.watchlist.coins
  );

  const sortedCoins = [...coins].sort((a, b) => {
    let valueA = a[sortField];
    let valueB = b[sortField];

    return sortOrder === "asc"
      ? valueA > valueB
        ? 1
        : -1
      : valueA < valueB
      ? 1
      : -1;
  });

  const handleSort = (field) => {
    if (sortField === field) {
      setSortOrder(
        sortOrder === "asc" ? "desc" : "asc"
      );
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  return (
<div
className="
mt-12
mx-auto
max-w-5xl

overflow-x-auto

rounded-3xl

bg-gradient-to-br
from-white
to-blue-50
dark:from-slate-800
dark:to-slate-900

border
border-slate-200
dark:border-slate-700



transition-all
duration-500

shadow-[0_0_30px_rgba(59,130,246,0.15)]

hover:shadow-[0_0_80px_rgba(59,130,246,0.45)]

dark:hover:shadow-[0_0_100px_rgba(59,130,246,0.35)]

p-4
"
>

{

showTitle && (

<div
className="
mb-6

flex
items-center
justify-between
"
>

<div>

<h1
className="
text-3xl
font-bold

bg-gradient-to-r
from-cyan-500
to-blue-600

bg-clip-text
text-transparent
"
>

Top 20 Coins

</h1>


<p
className="
text-gray-500
dark:text-gray-400
"
>

Live Crypto Market Updates

</p>

</div>


<div
className="
rounded-full

bg-green-100

dark:bg-green-500/20

px-4
py-2

text-green-600
dark:text-green-400

font-semibold
"
>

● LIVE

</div>


</div>
)}

      <table className="min-w-full text-left">
        {/* Header */}

        <thead className="bg-gray-100 text-sm uppercase tracking-wider text-gray-600 dark:bg-slate-700 dark:text-gray-300">
          <tr>
            <th
              onClick={() =>
                handleSort("market_cap_rank")
              }
              className="cursor-pointer px-4 py-4"
            >
              Rank
            </th>

            <th className="px-4 py-4">
              Coin
            </th>

            <th
              onClick={() =>
                handleSort("current_price")
              }
              className="cursor-pointer px-4 py-4"
            >
              Price
            </th>

            <th
              onClick={() =>
                handleSort(
                  "price_change_percentage_24h"
                )
              }
              className="cursor-pointer px-4 py-4"
            >
              24H
            </th>

            <th
              onClick={() =>
                handleSort("market_cap")
              }
              className="cursor-pointer px-4 py-4"
            >
              Market Cap
            </th>

            <th className="px-4 py-4 text-center">
              Watchlist
            </th>
          </tr>
        </thead>

        {/* Body */}

        <tbody>
          {sortedCoins.map((coin) => {
            const symbol =
              coin.symbol.toUpperCase() + "USDT";

            const livePrice =
              livePrices[symbol] ||
              coin.current_price;

            return (
              <tr
                key={coin.id}
                onClick={() =>
                  navigate(`/coin/${coin.id}`)
                }
                className="

                      group
                      cursor-pointer

                      transition-all
                      duration-500
                      hover:bg-white
                      dark:hover:bg-slate-700
                      hover:scale-[1.01]
                      hover:shadow-[
                      0_0_30px_rgba(59,130,246,0.20)
                      ]
                      rounded-xl
                      "
                      >
                        
                {/* Rank */}

                <td className="px-3 py-3 font-bold text-cyan-500">
                  #{coin.market_cap_rank}
                </td>

                {/* Coin */}

                <td className="px-3 py-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={coin.image}
                      alt={coin.name}
                      className="h-8 w-8 rounded-full"
                    />

                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">
                        {coin.name}
                      </h3>

                      <p className="text-xs uppercase tracking-wider text-gray-500">
                        {coin.symbol}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Price */}

                <td className="px-3 py-3">
                  <div className="inline-flex rounded-full bg-slate-100 px-3 py-1 font-semibold text-slate-900 dark:bg-slate-700 dark:text-white">
                    <LivePrice
                      price={livePrice}
                    />
                  </div>
                </td>

                {/* 24H */}

                <td className="px-3 py-3">
                  <span
                    className={`
                    rounded-full
                    px-3
                    py-1
                    text-sm
                    font-bold
                    ${
                      coin.price_change_percentage_24h >=
                      0
                        ? "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
                        : "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
                    }
                  `}
                  >
                    {(
                      coin.price_change_percentage_24h ??
                      0
                    ).toFixed(2)}
                    %
                  </span>
                </td>

                {/* Market Cap */}

                <td className="px-3 py-3">
                  <span className="font-semibold text-slate-900 dark:text-white">
                    $
                    {coin.market_cap.toLocaleString()}
                  </span>
                </td>

                {/* Watchlist */}

                <td className="px-3 py-3 text-center">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();

                      const isInWatchlist =
                        watchlist.includes(
                          coin.id
                        );

                      dispatch(
                        toggleWatchlist(
                          coin.id
                        )
                      );

                      if (isInWatchlist) {
                        toast.error(
                          `❌ ${coin.name} removed`
                        );
                      } else {
                        toast.success(
                          `⭐ ${coin.name} added`
                        );
                      }
                    }}
                  >
                    {watchlist.includes(
                      coin.id
                    ) ? (
                      <FaStar className="text-2xl text-yellow-400 transition hover:scale-125" />
                    ) : (
                      <FaRegStar className="text-2xl text-gray-400 transition hover:scale-125 hover:text-yellow-400" />
                    )}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}