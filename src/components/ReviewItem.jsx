import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviewById, updateVotesByReview } from "../reqs/apis";

const ReviewItem = () => {
  const { review_id } = useParams();
  const [currentReview, setCurrentReview] = useState({});
  const [err, setErr] = useState(null);
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    setIsloading(true);
    getReviewById(review_id).then(({ review }) => {
      setCurrentReview(review);
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
    </>
  );
};

export default ReviewItem;

// category: "hidden-roles"
// comment_count: 0
// created_at: "2021-02-05T11:27:26.563Z"
// designer: "Don Keigh"
// owner: "cooljmessy"
// review_body: "Nostrud anim cupidatat incididunt officia cupidatat magna. Cillum commodo voluptate laboris id incididunt esse elit ipsum consectetur non elit elit magna. Aliquip sint amet eiusmod magna. Fugiat non ut ex eiusmod elit. Esse anim irure laborum aute ut ad reprehenderit. Veniam laboris dolore mollit mollit in. Cillum in aliquip adipisicing ipsum et dolor veniam qui ut ullamco aliquip in. Dolor fugiat elit laborum elit cupidatat aute qui nostrud. Duis incididunt ea nostrud minim consequat. Reprehenderit mollit cupidatat do culpa aliqua culpa mollit minim eiusmod. Deserunt occaecat ipsum ex ut pariatur eu veniam cillum nulla ex nostrud. Do nostrud amet duis proident nostrud eiusmod occaecat reprehenderit. Quis et cupidatat tempor qui dolor id veniam in sunt ipsum eiusmod. Sint tempor commodo consectetur mollit proident culpa nulla est tempor ullamco tempor aliquip laboris."
// review_id: 14
// review_img_url: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg"
// title: "Velit tempor ullamco amet ipsum dolor voluptate."
// votes: 3
