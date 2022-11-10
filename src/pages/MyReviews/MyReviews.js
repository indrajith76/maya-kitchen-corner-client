import React, { useContext, useEffect, useState } from "react";
import MyReviewCard from "../../components/MyReviewCard/MyReviewCard";
import { AuthContext } from "../../contexts/AuthProvider";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState([]);
  const [deletedCount, setDeletedCount] = useState(0);
  useEffect(() => {
    fetch(
      `https://maya-kitchen-corner-server.vercel.app/myreviews/${user?.uid}`
    )
      .then((res) => res.json())
      .then((data) => setMyReviews(data));
  }, [user, deletedCount,]);
  return (
    <div className="container mx-auto grid grid-cols-1 px-5 lg:p-0 lg:grid-cols-2 gap-10 mt-10">
      {myReviews.map((myReview) => (
        <MyReviewCard
          key={myReview?._id}
          setDeletedCount={setDeletedCount}
          myReview={myReview}
        ></MyReviewCard>
      ))}
    </div>
  );
};

export default MyReviews;
