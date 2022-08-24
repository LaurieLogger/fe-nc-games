import React, { useEffect, useState } from "react";
import { getAllCategories, getAllReviews } from "../reqs/apis";
import ReviewListFilter from "./ReviewListFilter";
import ReviewListGenerator from "./ReviewListGenerator";
import { useParams, useSearchParams } from "react-router-dom";

const Reviews = () => {
  const { category } = useParams();
  const [isLoading, setIsloading] = useState(false);
  const [categoryList, setCategoryList] = useState([]);
  const [reviewList, setReviewList] = useState([]);
  const [sortParams, setSortParams] = useSearchParams();

  useEffect(() => {
    setIsloading(true);

    let sort = sortParams.get("sort_by");
    let order = sortParams.get("order");

    getAllReviews(category, sort, order).then(({ data }) => {
      setReviewList(data.reviews);
      setIsloading(false);
    });
    setIsloading(true);
    getAllCategories().then(({ categories }) => {
      setCategoryList(categories);
      setIsloading(false);
    });
  }, [category, sortParams]);

  if (isLoading) {
    return <p>Fetching Reviews...</p>;
  }

  return (
    <>
      <ReviewListFilter
        categoryList={categoryList}
        setSortParams={setSortParams}
      />
      <ReviewListGenerator reviewList={reviewList} />
    </>
  );
};

export default Reviews;
