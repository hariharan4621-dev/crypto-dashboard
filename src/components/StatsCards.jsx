import {
  FaCoins,
  FaChartLine,
  FaSignal,
  FaWifi,
} from "react-icons/fa";

export default function StatsCards({
  totalCoins,
  marketCap,
  totalVolume,
  isConnected,
}) {
  const cards = [
    {
      title: "Total Coins",
      value: totalCoins,
      icon: <FaCoins />,
      color: "from-yellow-400 to-orange-500",
      shadow: "hover:shadow-yellow-400/40",
    },
    {
      title: "Market Cap",
      value: `$${(marketCap / 1e12).toFixed(2)}T`,
      icon: <FaChartLine />,
      color: "from-cyan-500 to-blue-600",
      shadow: "hover:shadow-cyan-400/40",
    },
    {
      title: "24H Volume",
      value: `$${(totalVolume / 1e9).toFixed(2)}B`,
      icon: <FaSignal />,
      color: "from-purple-500 to-pink-600",
      shadow: "hover:shadow-purple-400/40",
    },
    {
      title: "Market Status",
      value: isConnected ? "LIVE" : "OFFLINE",
      icon: <FaWifi />,
      color: "from-green-500 to-emerald-600",
      shadow: "hover:shadow-green-400/40",
    },
  ];

  return (
    <div className="mb-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

      {cards.map((card) => (

        <div
          key={card.title}
          className={`
          group
          overflow-hidden
          rounded-3xl
          border
          border-gray-200
          bg-white
          p-6
          shadow-xl
          transition-all
          duration-300
          hover:-translate-y-2
          hover:scale-[1.02]
          ${card.shadow}

          dark:border-slate-700
          dark:bg-slate-800
        `}
        >

          {/* Top Gradient */}

          <div
            className={`absolute left-0 top-0 h-1 w-full bg-gradient-to-r ${card.color}`}
          ></div>

          {/* Icon */}

          <div
            className={`
            mb-5
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-2xl
            bg-gradient-to-r
            ${card.color}
            text-3xl
            text-white
            shadow-lg
            transition-all
            duration-300
            group-hover:rotate-6
            group-hover:scale-110
          `}
          >
            {card.icon}
          </div>

          {/* Title */}

          <p className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
            {card.title}
          </p>

          {/* Value */}

          <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white">
            {card.value}
          </h2>

          {/* Footer */}

          <div className="mt-5 flex items-center gap-2">

            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>

            <span className="text-sm text-gray-500 dark:text-gray-400">
              Updated Live
            </span>

          </div>

        </div>

      ))}

    </div>
  );
}