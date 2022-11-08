import React from "react";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const ServicesCard = ({ service }) => {
  const { _id, title, img, description, price, rating } = service;
  return (
    <div className="border shadow-lg rounded-lg">
      <div className=" p-5 pb-0">
        <PhotoProvider>
          <PhotoView src={img}>
            <img
              src={img}
              className="w-full h-[250px] hover:cursor-pointer"
              alt=""
            />
          </PhotoView>
        </PhotoProvider>
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p>
          {description.slice(0, 100)}
          <span className="text-blue-600 cursor-pointer">...Read More</span>
        </p>
        <div className="flex justify-between my-4">
          <p className="text-xl font-bold text-slate-800">Price : {price}tk</p>
          <div className="flex gap-1 items-center">
            <p>{rating}</p>
            <Rating
              className="text-yellow-500"
              placeholderRating={rating}
              emptySymbol={<FaRegStar></FaRegStar>}
              placeholderSymbol={<FaStar></FaStar>}
              fullSymbol={<FaStar></FaStar>}
              readonly
            />
          </div>
        </div>
      </div>
      <div>
        <Link to={`/service/${_id}`}>
          <button className="w-full bg-yellow-300 py-1 rounded-b-lg text-lg font-semibold text-slate-800">
            Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServicesCard;
