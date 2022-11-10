import React, { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthProvider";
import Swal from "sweetalert2";

const EditReview = () => {
  const { user } = useContext(AuthContext);
  const { _id, serviceName, reviewMessage, ratingReview } = useLoaderData();
  const navigate = useNavigate();

  const [customerRating, setCustomerRating] = useState(5);

  const handleReviewSubmit = (event) => {
    event.preventDefault();
    const review = {
      rating: customerRating,
      review: event.target.textReview.value,
    };

    fetch(`https://maya-kitchen-corner-server.vercel.app/myreview/${_id}`, {
      method: "put",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire("Review Updated Successfully!", "", "success");
          navigate("/myreviews");
        }
      });
  };

  return (
    <div className="mt-10 container mx-auto md:px-5 lg:px-48 2xl:px-72">
      <h3 className="text-3xl">Food Name : {serviceName}</h3>
      <form onSubmit={handleReviewSubmit}>
        <div className="flex items-center gap-4 my-5">
          <p className="text-lg md:text-xl">Select rating :</p>
          <Rating
            className="text-2xl md:text-3xl text-yellow-500"
            emptySymbol={<FaRegStar></FaRegStar>}
            fullSymbol={<FaStar></FaStar>}
            fractions={3}
            initialRating={ratingReview}
            onChange={(rate) => setCustomerRating(rate)}
          />
        </div>
        <textarea
          className="block w-full border p-2"
          name="textReview"
          id="textReview"
          rows="5"
          placeholder="write your review here..."
          defaultValue={reviewMessage}
          required
        ></textarea>
        <div className="flex justify-center mt-10">
          <button
            className="bg-yellow-500 hover:bg-yellow-400 duration-500 px-5 py-2 rounded-lg font-bold text-white"
            type="submit"
          >
            Update Review
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditReview;
