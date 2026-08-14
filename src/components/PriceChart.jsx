import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { FaChartLine } from "react-icons/fa";

import { useParams } from "react-router-dom";
import { useGetCoinHistoryQuery } from "../services/cryptoApi";

export default function PriceChart() {
  const { id } = useParams();

  const { data, isLoading } =
    useGetCoinHistoryQuery(id);

  if (isLoading) {
    return (
      <h2 className="text-white">
        Loading Chart...
      </h2>
    );
  }

  const chartData = data.prices.map((item) => ({
    date: new Date(item[0]).toLocaleDateString("en-US", {
      weekday: "short",
    }),
    price: item[1],
  }));

  return (
    <div
      className="

        mt-8

        rounded-3xl

        bg-white
        dark:bg-slate-800

        p-6

        shadow-xl

        transition-all
        duration-500

        hover:shadow-[0_0_50px_rgba(59,130,246,0.35)]
      ">
      
    <div className="mb-6 flex items-center justify-between">

  <div>
    <h2
      className="
      flex
      items-center
      gap-3

      text-2xl
      font-bold

      text-slate-900
      dark:text-white
      "
    >
      <FaChartLine className="text-cyan-500" />

      7 DAY PERFORMANCE
    </h2>

    <p
      className="
      mt-1
      text-sm
      text-gray-500
      dark:text-gray-400
      "
    >
      Track weekly market movement
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
    
  </div>

</div>

      <ResponsiveContainer
        width="100%"
        height={280}
      >
        <LineChart data={chartData}>
          <XAxis
            dataKey="date"
            tickLine={false}
            axisLine={false}
            tick={{
              fill:"#94a3b8",
              fontSize:12,
            }}
            />

          <YAxis
            tick={false}
            axisLine={false}
            />

          <Tooltip
            contentStyle={{
              borderRadius:"20px",
              border:"none",
            }}

            formatter={(value)=>
            [
            `$${Number(value).toLocaleString()}`,
            "Price",
            ]
            }
            />

          <Line
            type="monotone"
            dataKey="price"
            stroke="#06b6d4"
            strokeWidth={4}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}