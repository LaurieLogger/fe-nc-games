import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviewById } from "../reqs/apis";

const ReviewItem = ({ isLoading, setIsloading }) => {
  const { review_id } = useParams();
  const [currentReview, setCurrentReview] = useState({});

  useEffect(() => {
    setIsloading(true);
    getReviewById(review_id).then(({ review }) => {
      setCurrentReview(review);
      setIsloading(false);
    });
  }, [review_id]);

  if (isLoading) {
    return <p>Fetching Reviews...</p>;
  }

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
