import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
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

const Update = () => {
  const [restaurant, setRestaurant] = useState([]);
  const [newRestaurant, setNewRestaurant] = useState({
    name: "",
    type: "",
    imageUrl: "",
  });

  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const { id } = useParams();

  const fecthAPI = async () => {
    try {
      const res = await axios.get(`${url}/restaurants/${id}`, config);
      setRestaurant(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fecthAPI();
  }, [id]);
 

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setNewRestaurant((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const PostData = {
      name: newRestaurant.name,
      type: newRestaurant.type,
      image: newRestaurant.imageUrl,
    };

    try {
      const resp = await axios.put(
        `${url}/restaurants/${id}`,
        PostData,
        config,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (resp.status != 202) {
        return setError(true);
      }
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  const handleCancel = () => {
    setNewRestaurant({
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
                  placeholder={restaurant.name}
                  onChange={handleOnchange}
                />
              </div>
              <div className="form-group" style={{ marginTop: "15px" }}>
                <label htmlFor="name">Restaurant type</label>
                <input
                  type="text"
                  className="form-control"
                  name="type"
                  placeholder={restaurant.type}
                  onChange={handleOnchange}
                />
              </div>
              <div className="form-group" style={{ marginTop: "15px" }}>
                <label htmlFor="name">Restaurant image url</label>
                <input
                  type="text"
                  className="form-control"
                  name="imageUrl"
                  placeholder={restaurant.image}
                  onChange={handleOnchange}
                />
              </div>
              <div style={{ marginTop: "15px" }}>
                <button
                  className="btn btn-success"
                  style={{ marginRight: "15px" }}
                  type="submit"
                >
                  Update
                </button>
                <button className="btn btn-danger" onClick={handleCancel}>
                  Cancel
                </button>
                <div className="error" style={{ marginTop: "5px" }}>
                  {error && "something went wrong !!"}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
