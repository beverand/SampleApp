import { useState, useEffect } from "react";

const useFetch = (url) => {
  
   const [data, setData] = useState(null); // state for storing fetched data 
   const [loading, setLoading] = useState(true); // state for indicating loading status 
   const [error, setError] = useState(null); // state for storing any error 

   useEffect(() => {
     setLoading(true); // set loading to true when url changes 
     setData(null); // set data to null when url changes 
     setError(null); // set error to null when url changes 

     fetch(url) 
       .then((res) => res.json()) 
       .then((json) => {
         setLoading(false); // set loading to false when response is received 
         setData(json); // set data to json when response is received 
       })
       .catch((err) => {
         setLoading(false); // set loading to false when error occurs 
         setError(err); // set error to err when error occurs 
       });
   }, [url]); 
   console.log(data)
   return { data, loading, error }; 

};

export default useFetch;