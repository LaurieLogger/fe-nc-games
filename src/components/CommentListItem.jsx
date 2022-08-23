import React from "react";

const CommentListItem = ({ author, body, comment_id, created_at, votes }) => {
  return (
    <li key={comment_id} className="review__comments__item">
      <p>By: {author}</p>
      <p>At: {created_at}</p> <br></br>
      <p>Votes: {votes}</p>
      <br></br>
      <p>{body}</p>
    </li>
  );
};

export default CommentListItem;
