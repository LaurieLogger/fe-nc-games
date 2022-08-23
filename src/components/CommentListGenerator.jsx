import React, { useContext } from "react";
import { useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { postCommentByReview } from "../reqs/apis";
import CommentListItem from "./CommentListItem";

const CommentListGenerator = ({
  reviewComments,
  setReviewComments,
  review_id,
}) => {
  const { loggedInUser } = useContext(UserContext);
  const [isCommentFormValid, setIsCommentFormValid] = useState(false);
  const [commentInput, setCommentInput] = useState("");
  const [pendingSubmit, setPendingSubmit] = useState(false);

  const handleAddBtn = () => {
    setIsCommentFormValid(!isCommentFormValid);
  };

  const handleCommentInputChange = (event) => {
    setCommentInput(event.target.value);
  };

  const handleCommentFormSubmit = (event) => {
    event.preventDefault();
    setPendingSubmit(true);
    postCommentByReview(review_id, loggedInUser.username, commentInput).then(
      ({ data }) => {
        setReviewComments((currComments) => {
          let comment = data.newComment;

          return [...currComments, comment];
        });
        setPendingSubmit(false);
      }
    );

    setCommentInput("");
  };

  if (pendingSubmit) {
    return <p>Comment pending...</p>;
  }
  return (
    <section className="review__comments__section">
      <h3>Comments Section:</h3>
      <p className={reviewComments.length !== 0 ? "hidden" : ""}>
        Be the first to leave a comment!
      </p>
      <button onClick={handleAddBtn} id="comments__add__btn">
        Add Comment+
      </button>
      <form
        onSubmit={handleCommentFormSubmit}
        className={isCommentFormValid ? "" : "hidden"}
      >
        <input
          onChange={handleCommentInputChange}
          type="text"
          className="comments__post__input"
          value={commentInput}
        />
        <button
          id="comments__submit__btn"
          type="submit"
          disabled={commentInput === "" ? true : false}
        >
          Submit+
        </button>
      </form>
      <ul className="review__comments__list">
        {reviewComments.map(
          ({ author, body, comment_id, created_at, votes }) => {
            return (
              <CommentListItem
                author={author}
                body={body}
                comment_id={comment_id}
                created_at={created_at}
                votes={votes}
                key={comment_id}
              />
            );
          }
        )}
      </ul>
    </section>
  );
};

export default CommentListGenerator;
