import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  fetchCommentsByReview,
  getReviewById,
  updateVotesByReview,
} from "../reqs/apis";
import CommentListGenerator from "./CommentListGenerator";

const ReviewItem = () => {
  const { review_id } = useParams();
  const [currentReview, setCurrentReview] = useState({});
  const [reviewComments, setReviewComments] = useState([]);
  const [err, setErr] = useState(null);
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    setIsloading(true);
    getReviewById(review_id).then(({ review }) => {
      setCurrentReview(review);
      setIsloading(false);
    });
    setIsloading(true);
    fetchCommentsByReview(review_id).then(({ comments }) => {
      setReviewComments(comments);
      setIsloading(false);
    });
  }, [review_id]);

  const handleVote = (event) => {
    setCurrentReview((currCurrentReview) => {
      if (event.target.value === "+") {
        currCurrentReview.votes++;
        return { ...currCurrentReview };
      } else {
        currCurrentReview.votes--;
        return { ...currCurrentReview };
      }
    });
    setErr(null);
    let modifier = 1;
    if (event.target.value === "-") {
      modifier = -1;
    }
    updateVotesByReview(review_id, modifier).catch((err) => {
      setErr("Something went wrong, please try again.");
      setCurrentReview((currCurrentReview) => {
        if (event.target.value === "+") {
          currCurrentReview.votes--;
          return { ...currCurrentReview };
        } else {
          currCurrentReview.votes++;
          return { ...currCurrentReview };
        }
      });
    });
  };

  if (isLoading) {
    return <p>Fetching Reviews...</p>;
  }

  if (err) return <p>{err}</p>;
  return (
    <>
      <section className="review__review__section">
        <img
          src={currentReview.review_img_url}
          alt={currentReview.title}
          className="reviews__list__img"
        />
        <h3>{currentReview.title}</h3>
        <span>By: {currentReview.owner}</span> At: {currentReview.created_at}{" "}
        <br></br>
        <span>Comments: {currentReview.comment_count}</span> Votes:{" "}
        {currentReview.votes} <br></br>
        <label htmlFor="Vote__btn__plus">Vote: </label>
        <button id="vote__btn__plus" value={"+"} onClick={handleVote}>
          +
        </button>
        <button id="vote__btn__minus" value={"-"} onClick={handleVote}>
          -
        </button>
        <br></br>
        <p>{currentReview.review_body}</p>
        <br></br>
        <span>Category: {currentReview.category}</span> Designer:{" "}
        {currentReview.designer}
      </section>
      <CommentListGenerator reviewComments={reviewComments} />
    </>
  );
};

export default ReviewItem;
