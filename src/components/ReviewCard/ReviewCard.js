import React from "react";

const ReviewCard = ({ review }) => { 
  const { userName, ratingReview, reviewMessage, userImg, date } = review;
  return <div>
    {reviewMessage}
  </div>;
};

export default ReviewCard;
