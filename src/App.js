import React,{useState,useEffect} from 'react';
import {fetchDataFromApi} from './utils/api'

const App = () => {

  useEffect(()=>{
    apiTesting();
  },[])
  const apiTesting = ()=>{
    fetchDataFromApi("/movie/popular")
    .then((res)=>{
      console.log(res.results);
    })
  }
  return (
    <div>
      <h1 style={{color:"white"}}>Roopam</h1>
    </div>
  )
}

export default App
