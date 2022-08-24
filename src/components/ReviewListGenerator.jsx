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
