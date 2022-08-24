import React from "react";
import { useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { postCommentByReview } from "../reqs/apis";

const PostComment = ({ review_id, setReviewComments, setCurrentReview }) => {
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
        setCurrentReview((currCurrentReview) => {
          currCurrentReview.comment_count++;
          return { ...currCurrentReview };
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
    <>
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
    </>
  );
};

export default PostComment;
