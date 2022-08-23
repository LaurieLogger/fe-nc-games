import React from "react";

import { Link, useSearchParams } from "react-router-dom";

const ReviewListFilter = ({ categoryList, setSortParams }) => {
  const handleSortChange = (event) => {
    let search = {};
    if (
      event.target.value === "created_at" ||
      event.target.value === "comment_count" ||
      event.target.value === "votes"
    ) {
      search["sort_by"] = event.target.value;
    } else if (event.target.value === "desc") {
      search["order"] = event.target.value;
    }

    setSortParams(search, { replace: true });
  };

  return (
    <nav>
      <label htmlFor="review__filter">Sort: </label>
      <select id="review__filter" onChange={handleSortChange}>
        <option defaultValue="">Select</option>
        <option value="created_at">Date</option>
        <option value="comment_count">Comments</option>
        <option value="votes">Votes</option>
        <option value="desc">Desc</option>
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
