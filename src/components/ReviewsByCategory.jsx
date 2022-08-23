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
  const { category } = useParams();
  const [isLoading, setIsloading] = useState(false);

  // let sortAndOrder = { sort: "", order: "" };
  // if (sortParams.get("sort_by")) {
  //   sortAndOrder.sort = "&sort_by=" + sortParams.get("sort_by");
  // }
  // if (sortParams.get("order")) {
  //   sortAndOrder.order = "&order=" + sortParams.get("order");
  // }
  let sort = "";
  let order = "";

  useEffect(() => {
    setIsloading(true);
    getReviewsByCategory(category, sort, order).then(({ reviews }) => {
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
      <ReviewListFilter
        categoryList={categoryList}
        setSortParams={setSortParams}
        sortParams={sortParams}
      />
      <ReviewListGenerator reviewList={reviewList} />
    </>
  );
};

export default ReviewsByCategory;
