  import { useEffect, useState } from "react";

  //custom hook : 1) It's simply a function implementation to perform an operation. 
  //2) It can use other inbuild hooks in the implementation.
  // 3) Data is returned and this hook is exported at the end.
  
  function useCurrencyInfo(currency) { //useCurrencyInfo is our custom hook and currency variable is a "property or props"
 
    const [data, setData] = useState({})

    //useEffect will help trigger the event when the function is mounted
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json()) //the value obtained from API call is mostly string, so we're parsing it to JSON using res.json()
        .then((res) => setData(res[currency])) //storing the parsed data in variable related to useState() - i.e. "data" | Also selecting only the currency related data, because the API returns key-value pairs, with "date" & "currency" as keys.
     }, [currency])

    return data //returning the data to the component
  }

  export default useCurrencyInfo; //exporting the function to be used in the component


  // by returning the data and exporting the whole function, the other component will be able to call the functional implemented here as well as the data