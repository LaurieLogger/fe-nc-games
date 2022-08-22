import React, { useEffect, useState } from "react";
import { getAllReviews } from "../reqs/apis";
import ReviewListFilter from "./ReviewListFilter";
import ReviewListGenerator from "./ReviewListGenerator";

const Reviews = () => {
  const [reviewList, setReviewList] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    setIsloading(true);
    getAllReviews().then(({ reviews }) => {
      setReviewList(reviews);
      setIsloading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Fetching Reviews...</p>;
  }

  return (
    <>
      <ReviewListFilter />
      <ReviewListGenerator reviewList={reviewList} />
    </>
  );
};

export default Reviews;
