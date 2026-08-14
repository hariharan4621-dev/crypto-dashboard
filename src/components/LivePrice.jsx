import { useEffect, useState } from "react";

export default function LivePrice({ price }) {
  const [previousPrice, setPreviousPrice] = useState(price);
  const [flash, setFlash] = useState("");

  useEffect(() => {
    if (price > previousPrice) {
      setFlash("text-green-400");
    } else if (price < previousPrice) {
      setFlash("text-red-400");
    }

    const timer = setTimeout(() => {
      setFlash("");
    }, 500);

    setPreviousPrice(price);

    return () => clearTimeout(timer);
  }, [price, previousPrice]);

  return (
    <span className={`font-bold ${flash}`}>
      ${price.toLocaleString()}
    </span>
  );
}