import React, { useState } from "react";

import { Link } from "react-router-dom";

const ReviewListFilter = ({
  categoryList,
  setSortParams,

  sortParams,
}) => {
  const [searchQuery, setSearchQuery] = useState({ sort_by: "", order: "" });

  let search = {};
  const handleSortChange = (event) => {
    setSearchQuery((currSearchQuery) => {
      currSearchQuery["sort_by"] = event.target.value;
      return { ...currSearchQuery };
    });
    // search["sort_by"] = event.target.value;
    // setSortParams(search, { replace: true });
  };
  console.log(searchQuery, "<<<<<<searchquery");

  const handleOrderChange = (event) => {
    setSearchQuery((currSearchQuery) => {
      currSearchQuery["order"] = event.target.value;
      return { ...currSearchQuery };
    });
    // search["order"] = event.target.value;
    // setSortParams(search, { replace: true });
  };
  setSortParams(searchQuery["sort_by"] + searchQuery["order"], {
    replace: true,
  });

  return (
    <nav>
      <label htmlFor="review__sort__filter">Sort: </label>
      <select id="review__sort__filter" onChange={handleSortChange}>
        <option defaultValue="created_at">Select</option>
        <option value="created_at">Date</option>
        <option value="comment_count">Comments</option>
        <option value="votes">Votes</option>
      </select>

      <label htmlFor="review__order__filter">Order: </label>
      <select id="review__order__filter" onChange={handleOrderChange}>
        <option defaultValue="desc">Select</option>
        <option value="desc">High-Low</option>
        <option value="asc">Low-High</option>
      </select>

      <Link key="all" to={`/reviews`}>
        All{" "}
      </Link>
      {categoryList.map(({ slug }) => {
        return (
          <Link key={slug} to={`/reviews/categories/${slug}`}>
            {slug}
          </Link>
        );
      })}
    </nav>
  );
};

export default ReviewListFilter;
