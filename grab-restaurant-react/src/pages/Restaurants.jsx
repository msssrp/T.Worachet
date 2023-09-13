import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Card from "../components/Card";

const url = import.meta.env.VITE_BASE_URL;
const user = import.meta.env.VITE_BASE_USERNAME;
const password = import.meta.env.VITE_BASE_PASSWORD;
const config = {
  auth: {
    username: user,
    password: password,
  },
};

const Restaurants = () => {
  const [restaurantsData, setRestaurantsData] = useState([]);

  const fecthAPI = async () => {
    try {
      const res = await axios.get(`${url}/restaurants`, config);
      setRestaurantsData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fecthAPI();
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "25px" }}>Restaurants</h1>
      <div className="restaurants">
        {restaurantsData.map((data) => {
          return <Card data={data} key={data.id}/>;
        })}
      </div>
    </div>
  );
};

export default Restaurants;
