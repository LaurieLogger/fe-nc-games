import { queryAllByAttribute } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviewsByCategory, getAllCategories } from "../reqs/apis";
import ReviewListFilter from "./ReviewListFilter";
import ReviewListGenerator from "./ReviewListGenerator";

const ReviewsByCategory = ({
  setCategoryList,
  categoryList,
  reviewList,
  setReviewList,
  sortParams,
  setSortParams,
}) => {
  let test = "";
  if (sortParams.get("sort_by")) {
    test = "?sort_by=" + sortParams.get("sort_by");
  }
  const { category } = useParams();
  const [isLoading, setIsloading] = useState(false);
  const [query, setQuery] = useState("");

  // console.log(test, "<<<<<<<<<<");

  useEffect(() => {
    setIsloading(true);
    setQuery(test);
    getReviewsByCategory(category, query).then(({ reviews }) => {
      setReviewList(reviews);
      setIsloading(false);
    });
    setIsloading(true);
    getAllCategories().then(({ categories }) => {
      setCategoryList(categories);
      setIsloading(false);
    });
  }, [category, test]);

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

export default ReviewsByCategory;
