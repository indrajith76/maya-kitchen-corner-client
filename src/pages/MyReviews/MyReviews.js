import React, { useContext, useEffect, useState } from "react";
import MyReviewCard from "../../components/MyReviewCard/MyReviewCard";
import { AuthContext } from "../../contexts/AuthProvider";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState([]);
  useEffect(() => {
    fetch(
      `https://maya-kitchen-corner-server.vercel.app/myreviews/${user?.uid}`
    )
      .then((res) => res.json())
      .then((data) => setMyReviews(data));
  }, [user]);
  return (
    <div className="container mx-auto grid grid-cols-2 gap-10 mt-10">
      {myReviews.map((myReview) => (
        <MyReviewCard key={myReview?._id} myReview={myReview}></MyReviewCard>
      ))}
    </div>
  );
};

export default MyReviews;
