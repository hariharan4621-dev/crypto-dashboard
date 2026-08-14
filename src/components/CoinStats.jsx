export default function CoinStats({ coin }) {


const cards=[

{
title:"Current Price",
value:`$${coin.market_data.current_price.usd.toLocaleString()}`,
color:"text-green-500"
},

{
title:"Market Cap",
value:`$${coin.market_data.market_cap.usd.toLocaleString()}`,
color:"text-blue-500"
},

{
title:"Market Rank",
value:`#${coin.market_cap_rank}`,
color:"text-purple-500"
},

{
title:"Circulating Supply",
value:coin.market_data.circulating_supply.toLocaleString(),
color:"text-orange-500"
},

];


return(

<div
className="
grid

gap-5                   

md:grid-cols-2

lg:grid-cols-4

mb-8
"
>


{cards.map((item)=>(


<div

key={item.title}

className="
rounded-3xl

bg-white
dark:bg-slate-800

p-5

border
border-slate-200
dark:border-slate-700

shadow-xl

transition-all
duration-500

hover:-translate-y-1

hover:shadow-[0_0_40px_rgba(59,130,246,0.25)]

"

>


<h3
className="
text-gray-500

font-medium
"
>

{item.title}

</h3>



<p

className={`

mt-4

text-2xl

font-bold

${item.color}

`}

>

{item.value}

</p>



</div>

))}


</div>


)


}