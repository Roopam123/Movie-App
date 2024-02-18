import React,{useEffect} from 'react';
import {fetchDataFromApi} from './utils/api';
import {useSelector,useDispatch} from 'react-redux';
import {getApiConfigrations} from './store/homeSlice';


const App = () => {

  // useDispatch used for the send the data
  const dispatch = useDispatch(); 

  // useSelector used for the data get from the store
  const { url } = useSelector((state) => state.home);


  useEffect(()=>{
    apiTesting();
  },[])



  const apiTesting = ()=>{
    fetchDataFromApi("/movie/popular")
    .then((res)=>{
      // console.log(res.results);
      dispatch(getApiConfigrations(res))
    })
  }
  const name = "Roopam"
  return (
    <div>
      <h1 style={{color:"white"}}>Roopam</h1>
    </div>
  )
}

export default App
