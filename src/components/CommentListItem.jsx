import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { deleteCommentById } from "../reqs/apis";

const CommentListItem = ({
  author,
  body,
  comment_id,
  created_at,
  votes,
  setReviewComments,
  reviewComments,
  setCurrentReview,
}) => {
  const { loggedInUser } = useContext(UserContext);
  const [isValidUser, setIsValidUser] = useState(false);
  const [pendingDelete, setPendingDelete] = useState(false);

  useEffect(() => {
    setIsValidUser(false);
    if (author === loggedInUser.username) {
      setIsValidUser(true);
    }
  }, [author, loggedInUser.username]);

  let index = reviewComments.findIndex(
    (object) => object.comment_id === comment_id
  );
  const handleDeleteClick = (event) => {
    setPendingDelete(true);
    deleteCommentById(event.target.value).then(() => {
      setReviewComments((currReviewComments) => {
        currReviewComments.splice(index, 1);

        return [...currReviewComments];
      });
      setCurrentReview((currCurrentReview) => {
        currCurrentReview.comment_count--;
        return { ...currCurrentReview };
      });
      setPendingDelete(false);
    });
  };

  if (pendingDelete) {
    return <p>Deleting comment...</p>;
  }

  return (
    <li key={comment_id} className="review__comments__item">
      <p>By: {author}</p>
      <p>At: {created_at}</p> <br></br>
      <p>Votes: {votes}</p>
      <br></br>
      <p>{body}</p>
      <button
        onClick={handleDeleteClick}
        className={isValidUser ? "" : "hidden"}
        disabled={pendingDelete ? true : false}
        value={comment_id}
      >
        Delete Post x
      </button>
    </li>
  );
};

export default CommentListItem;
