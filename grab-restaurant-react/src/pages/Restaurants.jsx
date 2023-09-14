import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Card from "../components/Card";
import { useSearchContext } from "../hooks/SearchContext";

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

  const { searchValue } = useSearchContext();
  const filteredRestaurants = restaurantsData.filter((restaurant) => {
    return (
      restaurant.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      restaurant.type.toLowerCase().includes(searchValue.toLowerCase())
    );
  });

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "25px" }}>Restaurants</h1>
      <div className="restaurants">
        {searchValue && filteredRestaurants.length > 0 ? (
          <>
            {filteredRestaurants.map((data) => {
              return <Card data={data} key={data.id} />;
            })}
          </>
        ) : searchValue && filteredRestaurants.length === 0 ? (
          <div style={{ textAlign: "center", marginTop: "150px" }}>
            No matching restaurants found.
          </div>
        ) : restaurantsData.length > 0 ? (
          restaurantsData.map((data) => {
            return <Card data={data} key={data.id} />;
          })
        ) : (
          <div
            className="spinner-border"
            style={{ marginTop: "150px" }}
            role="status"
          ></div>
        )}
      </div>
    </div>
  );
};

export default Restaurants;
