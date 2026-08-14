import {
FaRocket,
FaFire,
} from "react-icons/fa";

import {
GiCrystalBars,
} from "react-icons/gi";

export default function TopMovers({ coins }) {
  // Top 5 Gainers
  const gainers = coins
  .filter(
    (coin) => coin.price_change_percentage_24h != null
  )
  .sort(
    (a, b) =>
      b.price_change_percentage_24h -
      a.price_change_percentage_24h
  )
  .slice(0, 5);

  // Top 5 Losers
  const losers = coins
  .filter(
    (coin) => coin.price_change_percentage_24h != null
  )
  .sort(
    (a, b) =>
      a.price_change_percentage_24h -
      b.price_change_percentage_24h
  )
  .slice(0, 5);

  return (
    <div className="mb-8 grid gap-6 md:grid-cols-2">

      {/* Top Gainers */}
      <div
          className="
          rounded-2xl
          bg-white
          dark:bg-slate-800
          border
          border-slate-200
          dark:border-slate-700
          shadow-xl
          p-6
          ">
<h2
className="
flex
items-center
gap-3

text-3xl
font-bold

text-green-400
"
>

<FaRocket
className="
text-yellow-400
animate-bounce
"
/>

Top Gainers

</h2>

        {gainers.map((coin) => (
          <div
            key={coin.id}
            className="rounded-xl bg-gray-100 p-6 shadow-[0_0_15px_rgba(34,197,94,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(34,197,94,0.6)] dark:bg-slate-800"
          >
            <div className="flex items-center gap-3">
              <img
                src={coin.image}
                alt={coin.name}
                className="h-8 w-8"
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

            <span className="font-bold text-green-400">
              +{(coin.price_change_percentage_24h ?? 0).toFixed(2)}%
            </span>
          </div>
        ))}
      </div>

      {/* Top Losers */}
      <div className="rounded-xl bg-gray-100 p-6 shadow-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(239,68,68,0.6)] hover:-translate-y-1 dark:bg-slate-800">
        <h2
className="
flex
items-center
gap-3

text-3xl
font-bold

text-green-400
"
>

<FaFire
className="
text-orange-500
animate-pulse
"
/>

Top Losers

</h2>

        {losers.map((coin) => (
          <div
            key={coin.id}
            className="rounded-xl bg-gray-100 p-6 shadow-[0_0_15px_rgba(239,68,68,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(239,68,68,0.6)] dark:bg-slate-800"
          >
            <div className="flex items-center gap-3">
              <img
                src={coin.image}
                alt={coin.name}
                className="h-8 w-8"
              />

              <div>
                <p className="font-semibold">
                  {coin.name}
                </p>

                <p className="text-sm text-gray-400 uppercase">
                  {coin.symbol}
                </p>
              </div>
            </div>

            <span className="font-bold text-red-400">
              {(coin.price_change_percentage_24h ?? 0).toFixed(2)}%
            </span>
          </div>
        ))}
      </div>

    </div>
  );
}