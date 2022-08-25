import axios from "axios";

export const getAllCategories = () => {
  return fetch(`https://bumble-nc-games.herokuapp.com/api/categories`).then(
    (categories) => categories.json()
  );
};

export const getAllReviews = (category, sort, order) => {
  return axios.get(`https://bumble-nc-games.herokuapp.com/api/reviews`, {
    params: { category: category, sort_by: sort, order: order },
  });
};

export const getReviewById = (review_id) => {
  return axios.get(
    `https://bumble-nc-games.herokuapp.com/api/reviews/${review_id}`
  );
};

export const updateVotesByReview = (review_id, modifier) => {
  return axios.patch(
    `https://bumble-nc-games.herokuapp.com/api/reviews/${review_id}`,
    {
      inc_votes: modifier,
    }
  );
};

export const fetchCommentsByReview = (review_id) => {
  return axios.get(
    `https://bumble-nc-games.herokuapp.com/api/reviews/${review_id}/comments`
  );
};

export const postCommentByReview = (review_id, username, body) => {
  return axios.post(
    `https://bumble-nc-games.herokuapp.com/api/reviews/${review_id}/comments`,
    {
      username: username,
      body: body,
    }
  );
};

export const deleteCommentById = (comment_id) => {
  return axios.delete(
    `https://bumble-nc-games.herokuapp.com/api/comments/${comment_id}`
  );
};
