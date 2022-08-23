import axios from "axios";

export const getAllReviews = () => {
  return fetch(`https://bumble-nc-games.herokuapp.com/api/reviews`).then(
    (reviews) => reviews.json()
  );
};

export const getAllCategories = () => {
  return fetch(`https://bumble-nc-games.herokuapp.com/api/categories`).then(
    (categories) => categories.json()
  );
};

export const getReviewsByCategory = (category) => {
  return fetch(
    `https://bumble-nc-games.herokuapp.com/api/reviews?category=${category}`
  ).then((reviews) => reviews.json());
};

export const getReviewById = (review_id) => {
  return fetch(
    `https://bumble-nc-games.herokuapp.com/api/reviews/${review_id}`
  ).then((review) => review.json());
};

export const updateVotesByReview = (review_id, modifier) => {
  return axios.patch(
    `https://bumble-nc-games.herokuapp.com/api/reviews/${review_id}`,
    {
      inc_votes: modifier,
    }
  );
};
