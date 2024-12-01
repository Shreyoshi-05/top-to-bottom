
import React, { useEffect, useState } from 'react'

const Usefetch = (url , options) => {
  const [data , setData] = useState(null)
  const [loding , setLoding] = useState(false)
  const [error ,setError]  = useState(null);

  async function fetchData(){
    setLoding(true);
    try{
      const response = await fetch(url, {...options});
      if(!response.ok) throw new Error(response.statusText);

      const result = await response.json();
      setData(result);
      setError(null);
      setLoding(false);

    }catch(error){
      setError(`${error}. some error occured..`);
      setLoding(false);

    }
  }

  useEffect(()=>{
    fetchData();
  },[url])

  return {data ,error , loding};
}

export default Usefetch
