export default function MarketInfo({coin}){

return(

<div
className="
mt-8
grid
gap-6
md:grid-cols-2
lg:grid-cols-4
"
>

<div
className="
rounded-3xl
bg-white
dark:bg-slate-800
p-6
shadow-xl
"
>

<h2 className="text-gray-500">
24H Volume
</h2>

<p
className="
mt-3
text-2xl
font-bold
text-green-500
"
>

$

{coin.market_data.total_volume.usd.toLocaleString()}

</p>

</div>



<div
className="
rounded-3xl
bg-white
dark:bg-slate-800
p-6
shadow-xl
"
>

<h2 className="text-gray-500">
ATH
</h2>

<p
className="
mt-3
text-2xl
font-bold
text-blue-500
"
>

$

{coin.market_data.ath.usd.toLocaleString()}

</p>

</div>



<div
className="
rounded-3xl
bg-white
dark:bg-slate-800
p-6
shadow-xl
"
>

<h2 className="text-gray-500">
ATL
</h2>

<p
className="
mt-3
text-2xl
font-bold
text-purple-500
"
>

$

{coin.market_data.atl.usd.toLocaleString()}

</p>

</div>



<div
className="
rounded-3xl
bg-white
dark:bg-slate-800
p-6
shadow-xl
"
>

<h2 className="text-gray-500">
24H Change
</h2>

<p
className="
mt-3
text-2xl
font-bold
text-orange-500
"
>

{coin.market_data.price_change_percentage_24h.toFixed(2)}%

</p>

</div>

</div>

);

}