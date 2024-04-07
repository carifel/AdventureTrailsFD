import { useEffect, useState } from "react";

function useFetch(url) {
 const [data, setData] = useState(null);

 useEffect(() => {
  fetch(url)
   .then((res) => res.json())
   .then((value) => {
    setData(value);
   })
 }, [url]);

 return [data];
}

export default useFetch;