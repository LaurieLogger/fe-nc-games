import React from "react";
import { Link } from "react-router-dom";

const ReviewListFilter = ({ categoryList }) => {
  return (
    <nav>
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
