export default function WatchlistStats({
  totalCoins,
  totalMarketCap,
}) {
  return (
    <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
      {/* Total Coins */}
      <div className="rounded-xl bg-gray-100 p-6 shadow-lg dark:bg-slate-800">
        <h3 className="text-gray-600 dark:text-gray-400">
          ⭐ Coins in Watchlist
        </h3>

        <p className="mt-2 text-3xl font-bold text-black dark:text-white">
          {totalCoins}
        </p>
      </div>

      {/* Market Cap */}
      <div className="rounded-xl bg-gray-100 p-6 shadow-lg dark:bg-slate-800">
        <h3 className="text-gray-600 dark:text-gray-400">
          💰 Total Market Cap
        </h3>

        <p className="mt-2 text-3xl font-bold text-black dark:text-white">
          ${(totalMarketCap / 1e12).toFixed(2)}T
        </p>
      </div>
    </div>
  );
}