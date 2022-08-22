import React from "react";
import { Link } from "react-router-dom";

const ReviewListItem = ({
  category,
  comment_count,
  created_at,
  designer,
  owner,
  review_id,
  review_img_url,
  title,
  votes,
}) => {
  return (
    <Link to={`/reviews/${review_id}`} className="list__link">
      <li key={review_id} className="reviews__list__item">
        <img src={review_img_url} alt={title} className="reviews__list__img" />
        <h3>{title}</h3>
        <span>By: {owner}</span> At: {created_at} <br></br>
        <span>Comments: {comment_count}</span> Votes: {votes} <br></br>
        <span>Category: {category}</span> Designer: {designer}
      </li>
    </Link>
  );
};

export default ReviewListItem;
