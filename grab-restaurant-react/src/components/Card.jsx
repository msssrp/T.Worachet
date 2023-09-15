import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
const url = import.meta.env.VITE_BASE_URL;
const user = import.meta.env.VITE_BASE_USERNAME;
const password = import.meta.env.VITE_BASE_PASSWORD;
const config = {
  auth: {
    username: user,
    password: password,
  },
};

const Card = ({ data }) => {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async (restaurantID) => {
    setIsLoading(true);
    try {
      const resp = await axios.delete(
        `${url}/restaurants/${restaurantID}`,
        config
      );
      if (resp.status != 202) {
        setIsLoading(false);
        return setError(true);
      }
      setIsLoading(false);
      return window.location.reload(true);
    } catch (error) {
      console.log(error);
      return setError(true);
    }
  };

  return (
    <div className="card" style={{ width: "18rem", height: "400px" }}>
      <div className="container-img">
        <img src={data.image} alt={data.name} className="card-img-top" />
      </div>
      <div className="card-body">
        <div className="card-info">
          <h5 className="title">{data.name}</h5>
          <p className="card-text">{data.type}</p>
        </div>
        <div className="container-btn">
          <button
            className="btn btn-danger px-2"
            style={{ marginRight: "15px" }}
            onClick={() => handleDelete(data.id)}
            disabled={isLoading}
          >
            {isLoading ? "Deleting" : "Delete"}
          </button>
          <Link to={`/update/${data.id}`} className="btn btn-warning px-2">
            Edit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
