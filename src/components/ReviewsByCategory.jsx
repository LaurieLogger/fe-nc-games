import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getReviewsByCategory, getAllCategories } from "../reqs/apis";
import ReviewListFilter from "./ReviewListFilter";
import ReviewListGenerator from "./ReviewListGenerator";

const ReviewsByCategory = ({
  setCategoryList,
  categoryList,
  reviewList,
  setReviewList,
  setIsloading,
  isLoading,
}) => {
  const { category } = useParams();

  useEffect(() => {
    setIsloading(true);
    getReviewsByCategory(category).then(({ reviews }) => {
      setReviewList(reviews);
      setIsloading(false);
    });
    setIsloading(true);
    getAllCategories().then(({ categories }) => {
      setCategoryList(categories);
      setIsloading(false);
    });
  }, [category]);

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

export default ReviewsByCategory;
