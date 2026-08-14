export default function CoinHeader({ coin }) {
  return (

<div

className="
mb-8

rounded-3xl

bg-gradient-to-r
from-cyan-500
via-blue-600
to-indigo-700

p-8

text-white

shadow-[0_0_80px_rgba(59,130,246,0.35)]

transition-all
duration-500

hover:scale-[1.01]
"

>

<div
className="
flex
items-center
justify-between
"
>


<div
className="
flex
items-center
gap-5
"
>

<img
src={coin.image.large}
alt={coin.name}
className="
h-20
w-20

rounded-full

border-4
border-white

shadow-[0_0_30px_rgba(255,255,255,0.6)]
"
/>


<div>

<h1
className="
text-4xl
font-bold
"
>
{coin.name}
</h1>


<p
className="
uppercase
text-cyan-100
"
>
{coin.symbol}
</p>

</div>

</div>



<div>

<p
className="
rounded-full

bg-green-500/30

px-4
py-2

font-semibold
"
>

● LIVE

</p>

</div>

</div>


<h1
className="
mt-8
text-5xl
font-bold
"
>

$

{coin.market_data.current_price.usd.toLocaleString()}

</h1>



<p
className="
mt-2

text-2xl

font-semibold

text-green-300
"
>

+{coin.market_data.price_change_percentage_24h.toFixed(2)}%

</p>



<p
className="
mt-2

text-cyan-100
"
>

Trending In Crypto Market

</p>


</div>

  );
}