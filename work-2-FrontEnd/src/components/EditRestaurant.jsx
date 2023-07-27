import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { useParams, useLocation } from "react-router-dom";
import queryString from "query-string";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function EditPlayer() {
  const { id } = useParams();

  const location = useLocation();

  const { name, type, image } = queryString.parse(location.search);



  const [updateRestaurant, setUpdateRestaurant] = useState({
    name: "",
    type: "",
    image: "",
  });

  console.log(updateRestaurant);


  const handleOnchange = (e) => {
    const { name, value } = e.target;

    setUpdateRestaurant((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleOnsubmit = (e) => {
    e.preventDefault();

    const putData = {
      name: updateRestaurant.name,
      type: updateRestaurant.type,
      image: updateRestaurant.image
    }

    axios.put(`http://localhost:8080/restaurants/${id}`,putData,{
        headers: {
            "Content-Type": "application/json",
          },
    }).then((res) => {
      if (res.status === 202) {
        toast.success(`updated ${id}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        toast.error(`Can't Update ${id}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    });
  };



  console.log(id);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
      <Navbar />
      <div className="flex flex-col justify-center items-center h-full bg-white pt-[50px] pb-[50px]">
        <div class="w-full max-w-[550px] h-full bg-white">
          <form class="py-6 px-9" action="post" onSubmit={handleOnsubmit}>
            <div class="mb-5">
              <label
                for="name"
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                name
              </label>
              <input
                type="text"
                firstName="name"
                name="name"
                placeholder={name}
                onChange={handleOnchange}
                class="w-[100%] mr-[10px] rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div class="mb-5">
              <label
                for="name"
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                type
              </label>
              <input
                type="text"
                name="type"
                placeholder={type}
                onChange={handleOnchange}
                class="w-[100%] mr-[10px] rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            
            
            <div class="mb-5">
              <label
                for="name"
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                image
              </label>
              <input
                type="text"
                name="image"
                placeholder="image URL"
                onChange={handleOnchange}
                class="w-[100%] mr-[10px] rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            


            <div>
              <button
                type="submit"
                class="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
              >
                Update Restaurant
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditPlayer;
