import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/${currency}.json`,
    )
      .then((res) => res.json()) //Converts raw HTTP response into a JavaScript object
      .then((res) => setData(res[currency]));
  }, [currency]);
  console.log(data);

  return data;
}
