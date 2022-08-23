import React from "react";
import CommentListItem from "./CommentListItem";
import PostComment from "./PostComment";

const CommentListGenerator = ({
  reviewComments,
  setReviewComments,
  review_id,
}) => {
  return (
    <section className="review__comments__section">
      <h3>Comments Section:</h3>
      <p className={reviewComments.length !== 0 ? "hidden" : ""}>
        Be the first to leave a comment!
      </p>
      <PostComment
        setReviewComments={setReviewComments}
        review_id={review_id}
      />

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
