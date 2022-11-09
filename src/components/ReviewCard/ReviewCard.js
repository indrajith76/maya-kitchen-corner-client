import React from "react";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";

const ReviewCard = ({ review }) => {
  const { userName, ratingReview, reviewMessage, userImg, date } = review;
  return (
    <div className="border p-5 rounded shadow-lg">
      <div className="flex items-center gap-5">
        <img className="w-14 rounded-full border" src={userImg} alt="" />
        <div>
          <p className="text-lg font-semibold text-slate-800">{userName}</p>
          <p>{date.slice(0, 10)}</p>
        </div>
      </div>
      <p className="my-3">{reviewMessage}</p>
      <div className="flex gap-2 text-lg">
        <p className="text-slate-600 font-semibold">{ratingReview.toFixed(1)}</p>
        <Rating
          className="text-yellow-500"
          placeholderRating={ratingReview}
          emptySymbol={<FaRegStar></FaRegStar>}
          placeholderSymbol={<FaStar></FaStar>}
          fullSymbol={<FaStar></FaStar>}
          readonly
        />
      </div>
    </div>
  );
};

export default ReviewCard;
