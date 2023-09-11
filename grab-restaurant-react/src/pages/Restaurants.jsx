import React , { useState , useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const url = import.meta.env.VITE_BASE_URL
const user = import.meta.env.VITE_BASE_USERNAME
const password = import.meta.env.VITE_BASE_PASSWORD
const config = {
  auth:{
    username: user,
    password: password,
  }
}

const Restaurants = () => {

  const [restaurantsData , setRestaurantsData] = useState([])

  useEffect(()=>{
    const fecthAPI = async() => {
      try {
        const res = await axios.get(`${url}/restaurants`,config)
        setRestaurantsData(res.data)
      } catch (error) {
        console.log(error);
      }
    }
    fecthAPI()
  },[])

  console.log(restaurantsData);


  return (
    <div>Restaurants</div>
  )
}

export default Restaurants