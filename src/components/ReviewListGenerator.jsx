import React from "react";
import ReviewListItem from "./ReviewListItem";

const ReviewListGenerator = ({ reviewList }) => {
  return (
    <ul className="reviews__list">
      {reviewList.map(
        ({
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
            <ReviewListItem
              category={category}
              comment_count={comment_count}
              created_at={created_at}
              designer={designer}
              owner={owner}
              review_id={review_id}
              review_img_url={review_img_url}
              title={title}
              votes={votes}
              key={review_id}
            />
          );
        }
      )}
    </ul>
  );
};

export default ReviewListGenerator;

// category: "hidden-roles";
// comment_count: 0;
// created_at: "2021-02-05T11:27:26.563Z";
// designer: "Don Keigh";
// owner: "cooljmessy";
// review_id: 14;
// review_img_url: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg";
// title: "Velit tempor ullamco amet ipsum dolor voluptate.";
// votes: 3;
