import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const ServicesCard = ({ service }) => {
  const { _id, title, img, description, price } = service;
  const [reviews, setReviews] = useState([]);

  const rating =
    parseFloat(reviews.reduce((p, c) => p + c.ratingReview, 0)) /
    reviews.length;

  useEffect(() => {
    fetch(`https://maya-kitchen-corner-server.vercel.app/reviews/${_id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [_id]);

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
        <h3 className="text-2xl font-semibold text-slate-800">{title}</h3>
        <p className="text-gray-700">
          {description.slice(0, 100)}
          <Link to={`/service/${_id}`} className="text-blue-600 cursor-pointer">...Read More</Link>
        </p>
        <div className="flex justify-between my-4">
          <p className="text-xl font-bold text-slate-800">Price : {price}tk</p>
          <div className="flex gap-1 items-center">
            <p>{ rating ? rating.toFixed(1) :'0.0'}</p>
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
          <button className="w-full bg-yellow-500 py-1 rounded-b-lg text-lg font-semibold text-white">
            Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServicesCard;
