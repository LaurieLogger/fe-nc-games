import React from "react";

import { Link } from "react-router-dom";

const ReviewListFilter = ({ categoryList, setSortParams }) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    let searchObj = {
      search:
        "sort_by=" + event.target[0].value + "&order=" + event.target[1].value,
    };
    setSortParams(searchObj["search"], { replace: true });
  };

  return (
    <nav>
      <form onSubmit={handleSubmit}>
        <label htmlFor="review__sort__filter">Sort: </label>
        <select id="review__sort__filter">
          <option defaultValue="created_at" value="created_at">
            Select
          </option>
          <option value="created_at">Date</option>
          <option value="comment_count">Comments</option>
          <option value="votes">Votes</option>
        </select>

        <label htmlFor="review__order__filter">Order: </label>
        <select id="review__order__filter">
          <option defaultValue="desc" value="desc">
            Select
          </option>
          <option value="desc">High-Low</option>
          <option value="asc">Low-High</option>
        </select>
        <button type="submit">sort</button>
      </form>

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
