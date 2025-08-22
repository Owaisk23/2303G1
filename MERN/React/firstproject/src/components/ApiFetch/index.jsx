import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const ApiFetch = () => {
    //useStates
    const [count, setCount] = useState(0);
    //useStates end


    //useEffects
    useEffect(()=>{
        console.log("Component rendered")
        getProducts()
    }, [])
    //useEffects end

    //functions
    const getProducts = async ()=>{
        try{
            const response = await fetch("https://dummyjson.com/products");
            const data = await response.json();
            console.log(data);
        }
        catch (error){
            console.log(error)
        }
    }

  return (
    <div>
      <h1>Useeffect hook</h1>
      <button className="btn btn-primary" onClick={() => {setCount(count + 1)}}>Increment({count})</button>
    </div>
  )
}

export default ApiFetch
