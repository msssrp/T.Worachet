import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const url = import.meta.env.VITE_BASE_URL;
const user = import.meta.env.VITE_BASE_USERNAME;
const password = import.meta.env.VITE_BASE_PASSWORD;
const config = {
  auth: {
    username: user,
    password: password,
  },
};

const Add = () => {
  const [restaurant, setRestaurant] = useState({
    name: "",
    type: "",
    imageUrl: "",
  });

  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorText, setErrorText] = useState("");

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setRestaurant((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if (!restaurant.name || !restaurant.imageUrl || !restaurant.type) {
      return setErrorText("please input all the feilds");
    }

    const PostData = {
      name: restaurant.name,
      type: restaurant.type,
      image: restaurant.imageUrl,
    };

    try {
      setIsLoading(true);
      const resp = await axios.post(`${url}/restaurants`, PostData, config, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (resp.status != 202) {
        setIsLoading(false);
        return setError(true);
      }
      setIsLoading(false);
      return navigate("/");
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  const handleCancel = () => {
    setRestaurant({
      name: "",
      type: "",
      imageUrl: "",
    });
    setError(false);
    navigate("/");
  };

  return (
    <div className="add-container">
      <h1
        style={{ textAlign: "center", marginTop: "15px", marginBottom: "15px" }}
      >
        Grab Restaurant
      </h1>
      <div className="row form" style={{ justifyContent: "center" }}>
        <div className="col-6 card justify-content-center">
          <h5 className="card-header">Add new Restaurant</h5>
          <div className="card-body">
            <form onSubmit={handleOnSubmit}>
              <div className="form-group" style={{ marginTop: "10px" }}>
                <label htmlFor="name">Restaurant name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="input restaurant name"
                  onChange={handleOnchange}
                  value={restaurant.name}
                />
              </div>
              <div className="form-group" style={{ marginTop: "15px" }}>
                <label htmlFor="name">Restaurant type</label>
                <input
                  type="text"
                  className="form-control"
                  name="type"
                  placeholder="input restaurant type"
                  onChange={handleOnchange}
                  value={restaurant.type}
                />
              </div>
              <div className="form-group" style={{ marginTop: "15px" }}>
                <label htmlFor="name">Restaurant image url</label>
                <input
                  type="text"
                  className="form-control"
                  name="imageUrl"
                  placeholder="input restaurant image url"
                  onChange={handleOnchange}
                  value={restaurant.imageUrl}
                />
              </div>
              <div style={{ marginTop: "15px" }}>
                <button
                  className="btn btn-success"
                  style={{ marginRight: "15px" }}
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? "Creating" : "Create"}
                </button>
                <button className="btn btn-danger" onClick={handleCancel}>
                  Cancel
                </button>
                <div className="error" style={{ marginTop: "5px" }}>
                  {error && "something went wrong !!"}
                  {errorText && errorText}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
