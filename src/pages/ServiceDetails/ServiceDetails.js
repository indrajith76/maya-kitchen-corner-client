import React, { useContext, useState } from "react";
import { useLoaderData, Link } from "react-router-dom";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthProvider";

const ServiceDetails = () => {
  const { user } = useContext(AuthContext);
  const { _id, title, img, description, price, rating } = useLoaderData();
  const [customerRating, setCustomerRating] = useState(0);

  const handleReviewSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const textReview = form.textReview.value;

    const review = {
      serviceId: _id,
      serviceName: title,
      reviewMessage: textReview,
      ratingReview: customerRating,
      userId: user?.uid,
      userName: user?.displayName,
      date: new Date(),
    };

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset();
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:px-5 lg:gap-10 lg:px-10 2xl:gap-14 2xl:px-32">
        <div className="lg:border p-10">
          <img className="w-full" src={img} alt="" />
        </div>
        <div className="px-5 md:p-0">
          <h2 className="text-4xl font-semibold my-5">{title}</h2>
          <p className="text-slate-700">{description}</p>
          <div className="flex justify-between my-10">
            <h3 className="text-2xl font-bold text-slate-700">
              Price : {price}tk
            </h3>
            <div className="flex gap-2 text-lg">
              <p className="text-slate-600 font-semibold">{rating}</p>
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
          <div>
            <Link to="/order">
              <button className="bg-red-500 px-10 py-3 rounded text-white font-semibold">
                Order Now
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="px-5 lg:px-10 2xl:gap-14 2xl:px-32 mt-20 border-t">
        <div className="w-full md:w-2/3 lg:w-2/5 mx-auto border mt-20 p-8">
          <h2 className="text-3xl mt-5 mb-10 text-center font-semibold text-slate-700">
            Drop your review
          </h2>
          <form onSubmit={handleReviewSubmit}>
            <div className="flex items-center gap-4 my-5">
              <p className="text-lg md:text-xl">Select rating :</p>
              <Rating
                className="text-2xl md:text-3xl text-yellow-500"
                emptySymbol={<FaRegStar></FaRegStar>}
                fullSymbol={<FaStar></FaStar>}
                fractions={3}
                onChange={(rate) => setCustomerRating(rate)}
              />
            </div>
            <textarea
              className="block w-full border p-2"
              name="textReview"
              id="textReview"
              rows="5"
              placeholder="write your review here..."
              required
            ></textarea>
            <div className="flex justify-center mt-10">
              <button
                className="bg-yellow-500 hover:bg-yellow-400 duration-500 px-5 py-2 rounded-lg font-bold text-white"
                type="submit"
              >
                Add Review
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
