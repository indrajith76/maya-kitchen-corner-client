import React from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const AddService = () => {
  useTitle("Add Service");
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const serviceTitle = form.title.value;
    const serviceImg = form.img.value;
    const servicePrice = form.price.value;
    const serviceDescription = form.description.value;

    const service = {
      title: serviceTitle,
      img: serviceImg,
      price: servicePrice,
      description: serviceDescription,
    };

    fetch("https://maya-kitchen-corner-server.vercel.app/services/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire("Service added successfully!", "", "success");
          navigate("/services");
        }
      });
  };

  return (
    <div className="container mx-auto mt-10">
      {/* price description img title */}
      <form
        onSubmit={handleSubmit}
        className=" md:w-3/4 lg:w-2/5 mx-auto border p-5 md:p-8 rounded shadow-lg"
      >
        <h2 className="text-center mb-10 text-2xl font-semibold text-slate-800">
          Add Your Service
        </h2>
        <label className="" htmlFor="title">
          Service Title
        </label>
        <input
          className="border block w-full pl-3 rounded my-3 h-10"
          type="text"
          name="title"
          id="title"
          placeholder="Service Title"
          required
        />
        <label className="" htmlFor="img">
          Service Image
        </label>
        <input
          className="border block w-full pl-3 rounded my-3 h-10"
          type="text"
          name="img"
          id="img"
          placeholder="Service Image"
          required
        />
        <label className="" htmlFor="price">
          Price
        </label>
        <input
          className="border block w-full pl-3 rounded my-3 h-10"
          type="text"
          name="price"
          id="price"
          placeholder="price"
          required
        />
        <label className="" htmlFor="description">
          Description
        </label>
        <textarea
          className="border block w-full pl-3 rounded my-3"
          name="description"
          id="description"
          rows="5"
          placeholder="Write your service description"
          required
        ></textarea>
        <div className="flex justify-center mt-10">
          <button
            className="bg-yellow-400 text-slate-700 font-semibold text-lg px-5 py-2 rounded-lg shadow"
            type="submit"
          >
            Add Service
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddService;
