import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
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
  const { loggedInUser } = useContext(UserContext);

  useEffect(() => {
    setIsloading(true);
    setErr(null);
    getReviewById(review_id)
      .then(({ data }) => {
        setCurrentReview(data.review);
        setIsloading(false);
      })
      .catch((error) =>
        setErr(`${error.response.status} ${error.response.statusText}`)
      );
    if (err) {
      return <p>{err}</p>;
    }
    setIsloading(true);
    fetchCommentsByReview(review_id)
      .then(({ data }) => {
        setReviewComments(data.comments);
        setIsloading(false);
      })
      .catch((error) =>
        setErr(`${error.response.status} ${error.response.statusText}`)
      );
  }, [review_id]);
  if (err) {
    return <p>{err}</p>;
  }

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

  if (err) {
    return <p>{err}</p>;
  }
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
        <button
          id="vote__btn__plus"
          value={"+"}
          onClick={handleVote}
          disabled={
            currentReview.owner === loggedInUser.username ? true : false
          }
        >
          +
        </button>
        <button
          id="vote__btn__minus"
          value={"-"}
          onClick={handleVote}
          disabled={
            currentReview.owner === loggedInUser.username ? true : false
          }
        >
          -
        </button>
        <br></br>
        <p>{currentReview.review_body}</p>
        <br></br>
        <span>Category: {currentReview.category}</span> Designer:{" "}
        {currentReview.designer}
      </section>
      <CommentListGenerator
        reviewComments={reviewComments}
        setReviewComments={setReviewComments}
        review_id={review_id}
        setCurrentReview={setCurrentReview}
      />
    </>
  );
};

export default ReviewItem;
