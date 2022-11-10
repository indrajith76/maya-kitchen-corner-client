import React from "react";
import Rating from "react-rating";
import { FaRegStar, FaStar, FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyReviewCard = ({ myReview, setDeletedCount }) => {
  const { _id, userName, ratingReview, reviewMessage, userImg, date } =
    myReview;

  const handleDelete = () => {
    const deleted = window.confirm("Are want to delete this review?");
    if (deleted) {
      fetch(`https://maya-kitchen-corner-server.vercel.app/myreview/${_id}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            setDeletedCount(data.deletedCount);
            Swal.fire("Review deleted successfully!", "", "success");
          }
        });
    }
  };

  return (
    <div className="border p-5 rounded shadow-lg">
      <div className="flex justify-between">
        <div className="flex items-center gap-5">
          <img className="w-14 rounded-full border" src={userImg} alt="" />
          <div>
            <p className="text-lg font-semibold text-slate-800">{userName}</p>
            <p>{date.slice(0, 10)}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Link
            to={`/myreviews/edit/${_id}`}
            className="bg-green-500 text-white p-2 rounded"
          >
            <FaEdit />
          </Link>
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white p-2 rounded"
          >
            <FaTrashAlt />
          </button>
        </div>
      </div>
      <p className="my-3">{reviewMessage}</p>
      <div className="flex gap-2 text-lg">
        <p className="text-slate-600 font-semibold">
          {ratingReview.toFixed(1)}
        </p>
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

export default MyReviewCard;
