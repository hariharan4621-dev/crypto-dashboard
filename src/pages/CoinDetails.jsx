import { useParams } from "react-router-dom";
import { useGetCoinDetailsQuery } from "../services/cryptoApi";
import CoinHeader from "../components/CoinHeader";
import CoinStats from "../components/CoinStats";
import PriceChart from "../components/PriceChart";
import MarketInfo from "../components/MarketInfo";


export default function CoinDetails() {
  const { id } = useParams();

  const {
    data,
    isLoading,
    error,
  } = useGetCoinDetailsQuery(id);

  if (isLoading) {
    return (
      <h1 className="p-6 text-white">
        Loading...
      </h1>
    );
  }

  if (error) {
    return (
      <h1 className="p-6 text-red-500">
        Error loading coin
      </h1>
    );
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
"
>


<CoinHeader coin={data}/>


<CoinStats coin={data}/>


<PriceChart/>


<MarketInfo coin={data}/>


</div>


  );
}