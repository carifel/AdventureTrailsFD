import { useEffect, useState } from "react";

function useFetch(url) {
 const [data, setData] = useState(null);
 const [isloading, setIsLoading] = useState(false);

 useEffect(() => {
  setIsLoading(true);
  fetch(url)
   .then((res) => res.json())
   .then((value) => {
    setData(value)
    setIsLoading(false);
   });
 }, [url]);

 return [data, isloading];
}

export default useFetch;