import React, { useEffect, useState } from "react";
import { getAllCategories, getAllReviews } from "../reqs/apis";
import ReviewListFilter from "./ReviewListFilter";
import ReviewListGenerator from "./ReviewListGenerator";

const Reviews = ({
  setCategoryList,
  categoryList,
  reviewList,
  setReviewList,
}) => {
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    setIsloading(true);
    getAllReviews().then(({ reviews }) => {
      setReviewList(reviews);
      setIsloading(false);
    });
    setIsloading(true);
    getAllCategories().then(({ categories }) => {
      setCategoryList(categories);
      setIsloading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Fetching Reviews...</p>;
  }

  return (
    <>
      <ReviewListFilter categoryList={categoryList} />
      <ReviewListGenerator reviewList={reviewList} />
    </>
  );
};

export default Reviews;
